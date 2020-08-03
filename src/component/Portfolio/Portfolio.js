import React from 'react';

import './portfolio.css';
import { SideNav } from '../SideNav/SideNav';
import { SectionContainer } from '../SectionContainer/SectionContainer';

export const Portfolio =({handleSectionClick,about,skills,selectedHeading,selectedQuote,selectedSection}) =>{
    return(
        <div className="portfolio-container">
            <div className="sidenav-container">
                <h1><SideNav 
                handleSectionClick={handleSectionClick} /></h1>
            </div>
            <div className="main-section-container">
                <h1><SectionContainer
                 about={about}
                 skills={skills}
                 selectedHeading={selectedHeading}
                 selectedQuote={selectedQuote}
                 selectedSection={selectedSection}
                  /></h1>
            </div>
        </div>
    )
}