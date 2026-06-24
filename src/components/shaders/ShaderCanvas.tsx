'use client';

import { useRef, useEffect } from 'react';

interface ShaderCanvasProps {
  className?: string;
  variant?: 'hero' | 'ambient';
}

const HERO_FRAGMENT = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = uv * 2.0 - 1.0;
    p.x *= u_resolution.x / u_resolution.y;
    float t = u_time * 0.15;
    for(float i = 1.0; i < 5.0; i++){
        p.x += 0.3 / i * sin(i * 3.0 * p.y + t);
        p.y += 0.3 / i * cos(i * 3.0 * p.x + t);
    }
    // Deep navy base matching DEZAI brand
    vec3 col1 = vec3(0.02, 0.04, 0.12);
    // Royal blue matching the D logo
    vec3 col2 = vec3(0.15, 0.39, 0.92);
    // Lighter sky blue highlight
    vec3 col3 = vec3(0.25, 0.55, 0.98);
    // Gold accent from logo trim
    vec3 col4 = vec3(0.85, 0.65, 0.20);
    
    vec3 finalCol = mix(col1, col2, 0.4 + 0.4 * sin(p.x + p.y));
    finalCol = mix(finalCol, col3, 0.25 * sin(p.x * 2.0 + u_time * 0.1));
    // Subtle gold shimmer
    finalCol += col4 * 0.06 * (0.5 + 0.5 * sin(p.y * 3.0 + u_time * 0.2));
    // Vignette for depth
    float vignette = 1.0 - length(uv - 0.5) * 0.8;
    gl_FragColor = vec4(finalCol * 0.55 * vignette, 1.0);
}`;

const AMBIENT_FRAGMENT = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main() {
    vec2 uv = v_texCoord;
    vec2 p = (uv - 0.5) * 2.0;
    p.x *= u_resolution.x / u_resolution.y;
    float t = u_time * 0.15;
    // Deep navy base
    vec3 color = vec3(0.02, 0.04, 0.10);
    for(float i = 1.0; i < 4.0; i++) {
        float n = noise(p * (1.5 + i * 0.2) + t * i);
        float line = smoothstep(0.48, 0.5, n) - smoothstep(0.5, 0.52, n);
        // Royal blue energy lines
        vec3 lineColor = mix(vec3(0.12, 0.35, 0.92), vec3(0.20, 0.50, 0.98), uv.y);
        if(i > 2.0) lineColor = vec3(0.30, 0.45, 0.95);
        color += lineColor * line * 0.5 * (1.0 - length(p) * 0.4);
    }
    // Blue glow from bottom
    float glow = smoothstep(1.0, 0.0, uv.y);
    color += vec3(0.08, 0.20, 0.55) * glow * 0.4;
    // Subtle gold grid
    vec2 grid = fract(uv * 40.0);
    float gridLine = smoothstep(0.02, 0.0, grid.x) + smoothstep(0.02, 0.0, grid.y);
    color += vec3(0.85, 0.65, 0.20) * gridLine * 0.02;
    // Blue-white grid highlight
    color += vec3(0.6, 0.75, 1.0) * gridLine * 0.02;
    // Vignette
    float vignette = 1.0 - length(uv - 0.5) * 0.6;
    gl_FragColor = vec4(color * vignette, 1.0);
}`;

const VERTEX = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

export default function ShaderCanvas({ className = '', variant = 'hero' }: ShaderCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const observer = new ResizeObserver(syncSize);
    observer.observe(canvas);
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const glCtx = gl as WebGLRenderingContext;

    const createShader = (type: number, src: string) => {
      const s = glCtx.createShader(type);
      if (!s) return null;
      glCtx.shaderSource(s, src);
      glCtx.compileShader(s);
      return s;
    };

    const prog = glCtx.createProgram();
    if (!prog) return;

    const vs = createShader(glCtx.VERTEX_SHADER, VERTEX);
    const fs = createShader(glCtx.FRAGMENT_SHADER, variant === 'hero' ? HERO_FRAGMENT : AMBIENT_FRAGMENT);
    if (!vs || !fs) return;

    glCtx.attachShader(prog, vs);
    glCtx.attachShader(prog, fs);
    glCtx.linkProgram(prog);
    glCtx.useProgram(prog);

    const buf = glCtx.createBuffer();
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);
    glCtx.bufferData(glCtx.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), glCtx.STATIC_DRAW);

    const pos = glCtx.getAttribLocation(prog, 'a_position');
    glCtx.enableVertexAttribArray(pos);
    glCtx.vertexAttribPointer(pos, 2, glCtx.FLOAT, false, 0, 0);

    const uTime = glCtx.getUniformLocation(prog, 'u_time');
    const uRes = glCtx.getUniformLocation(prog, 'u_resolution');
    const uMouse = glCtx.getUniformLocation(prog, 'u_mouse');

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouse.x = ((e.clientX - rect.left) / rect.width) * canvas.width;
        mouse.y = (1.0 - (e.clientY - rect.top) / rect.height) * canvas.height;
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    const render = (t: number) => {
      glCtx.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) glCtx.uniform1f(uTime, t * 0.001);
      if (uRes) glCtx.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) glCtx.uniform2f(uMouse, mouse.x, mouse.y);
      glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
      animRef.current = requestAnimationFrame(render);
    };
    animRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
