import EventsClient from "@/components/events/EventsClient";
import Script from "next/script";

export default function EventsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Event",
          "name": "GDG CHARUSAT × DEZAI Hackorbit Hackathon 2026",
          "startDate": "2026-08-18",
          "endDate": "2026-08-18",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "CHARUSAT University"
          },
          "description": "Students and mentors came together for an intensive build session. Live product demos and hands-on mentoring by DEZAI engineers.",
          "organizer": {
            "@type": "Organization",
            "name": "DEZAI & GDG CHARUSAT",
            "url": "https://dezai.org"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Event",
          "name": "Tetrathon 2026 — India's First Indo-French Hackathon",
          "startDate": "2026-08-18",
          "endDate": "2026-08-18",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Navrachana University, Baroda"
          },
          "description": "DEZAI Founder & CEO as Jury evaluating student and startup teams. Evaluating high-standard product engineering and talent development.",
          "organizer": {
            "@type": "Organization",
            "name": "Navrachana University",
            "url": "https://dezai.org"
          }
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="events-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <EventsClient />
    </>
  );
}
