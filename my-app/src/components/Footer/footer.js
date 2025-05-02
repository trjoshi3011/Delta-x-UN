import React, { useState } from 'react';
import './footer.css';

const sections = {
  'MAIN BODIES': [
    'General Assembly', 'Security Council', 'Economic and Social Council',
    'Trusteeship Council', 'International Court of Justice', 'Secretariat'
  ],
  'DEPARTMENTS / OFFICES': [
    'New York', 'Geneva', 'Nairobi', 'Vienna', 'UN System Directory', 'UN System Chart',
    'Global Leadership', 'UN Information Centres'
  ],
  'RESOURCES / SERVICES': [
    'Emergency information', 'Reporting Wrongdoing', 'UN Journal', 'Documents',
    'Guidelines for gender-inclusive language', 'Databases', 'Library', 'UN iLibrary',
    'UN Chronicle', 'UN Yearbook', 'Bookshop', 'Publications for sale', 'Maps',
    'Media Accreditation', 'NGO accreditation at ECOSOC', 'NGO accreditation at DGC',
    "Visitors' services", 'Exhibits', 'Procurement', 'Employment', 'Internships',
    'Model UN', 'Academic Impact', 'UN Archives', 'UN Audiovisual Library',
    'How to donate to the UN System', 'Information on COVID-19 (Coronavirus)',
    'Africa Renewal', 'Ten ways the UN makes a difference', 'GA High-level Week 2024'
  ],
  'KEY DOCUMENTS': [
    'UN Charter', 'Universal Declaration of Human Rights',
    'Convention on the Rights of the Child', 'Statute of the International Court of Justice',
    'Annual Report of the Secretary-General on the Work of the Organization'
  ],
  'NEWS AND MEDIA': [
    'News', 'Press Releases', 'Briefings', 'Spokesperson', 'Photos', 'UNifeed',
    'UN Web TV', 'UN Video', 'Social Media', 'The Essential UN', 'Awake at Night podcast'
  ],
  'ISSUES / CAMPAIGNS': [
    'Global Issues', 'Observances', 'Sustainable Development Goals', 'Our Common Agenda',
    'The Summit of the Future', 'Climate Action', 'Peace and Security',
    'Action for Peacekeeping (A4P)', 'Global Crisis Response Group',
    'Call to Action for Human Rights', 'Disability Inclusion Strategy', 'Fight Racism',
    'Hate Speech', 'LGBTQ+ People', 'Safety of Journalists', 'Rule of Law',
    'Action to Counter Terrorism', 'Victims of Terrorism', 'Children and Armed Conflict',
    'Violence Against Children (SRSG)', 'Sexual Violence in Conflict', 'Refugees and Migrants',
    'Action Agenda on Internal Displacement', 'Spotlight Initiative',
    'Preventing Sexual Exploitation and Abuse',
    'Prevention of Genocide and the Responsibility to Protect', 'The Rwanda Genocide',
    'The Holocaust', 'The Question of Palestine', 'The Transatlantic Slave Trade',
    'Decolonization', 'Messengers of Peace', 'Roadmap for Digital Cooperation',
    'Digital Financing Task Force', 'Data Strategy', 'Information Integrity',
    'Countering Disinformation', 'UN75: 2020 and Beyond', 'Women Rise for All',
    'Stop the Red Sea Catastrophe',
    'Black Sea Grain Initiative Joint Coordination Centre'
  ]
};

const UNFooterSection = () => {
    const [openSection, setOpenSection] = useState(null);
  
    const toggleSection = (title) => {
      setOpenSection(prev => (prev === title ? null : title));
    };
  
    return (
      <div className="un-footer">
        {Object.entries(sections).map(([title, items], index, array) => (
          <div
            className={`un-footer-section ${index === array.length - 1 ? 'align-right' : ''}`}
            key={title}
            onMouseEnter={() => setOpenSection(title)}
            onMouseLeave={() => setOpenSection(null)}
          >
            <button className="footer-toggle">{title}</button>
            {openSection === title && (
              <div className="footer-popup">
                <ul>
                  {items.map((item, index) => (
                    <li key={index}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
export default UNFooterSection;