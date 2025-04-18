import React from 'react';
import './LinkColumns.css';

function LinkColumns() {
    const columns = [
      [
        { text: "UN Journal", url: "https://journal.un.org/en/new-york/all/2025-04-18" },
        { text: "UN WebTV schedule", url: "https://webtv.un.org/en/schedule" },
        { text: "Documents", url: "https://journal.un.org/en/new-york/all/2025-04-18" },
        { text: "Noon Briefings", url: "https://press.un.org/en" }
      ],
      [
        { text: "Security Council", url: "https://main.un.org/securitycouncil/en/content/programme-work?_gl=1*tpi1qw*_ga*MTE5NTExODczNi4xNzQwNDYxMTMw*_ga_TK9BQL5X7Z*MTc0NDk0NzYxOC4yMS4xLjE3NDQ5NDkwNjEuMC4wLjA." },
        { text: "General Assembly", url: "https://www.un.org/en/ga/meetings/" },
        { text: "Economic and Social Council", url: "https://ecosoc.un.org/en/events?_gl=1*dk1okc*_ga*MTE5NTExODczNi4xNzQwNDYxMTMw*_ga_TK9BQL5X7Z*MTc0NDk0NzYxOC4yMS4xLjE3NDQ5NDkxNzIuMC4wLjA." }
      ],
      [
        { text: "Geneva", url: "https://dcs.unon.org/calendar-meetings" },
        { text: "Vienna", url: "https://unis.unvienna.org/" },
        { text: "Nairobi", url: "https://dcs.unon.org/calendar-meetings" }
      ],
      [
        { text: "Addis Ababa (ECA)", url: "https://www.uneca.org/eca-events/" },
        { text: "Bangkok (ESCAP)", url: "https://www.unescap.org/events" },
        { text: "Beirut (ESCWA)", url: "https://www.unescwa.org/events" },
        { text: "Geneva (ECE)", url: "https://unece.org/info/events/unece-meetings-and-events" },
        { text: "Santiago (ECLAC)", url: "https://www.cepal.org/en/eclac-live" }
      ]
    ];
  
    return (
      <div className="link-columns">
        {columns.map((col, i) => (
          <div className="column" key={i}>
            {col.map(link => (
              <a href={link.url} key={link.text} className="link-item" target="_blank" rel="noopener noreferrer">
                {link.text} <span className="arrow">»</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  export default LinkColumns;