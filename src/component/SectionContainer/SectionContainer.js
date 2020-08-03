import React from 'react';
import './section-container.css';
import { About } from '../About/About';
import {Skills} from '../Skills/Skills';

export const SectionContainer = ({handleSectionClick,about,skills,selectedHeading,selectedQuote,selectedSection}) =>{
    return(
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                   { 
                    about: <About />,
                    skills: <Skills />
                   }[selectedSection]
                }
            </div>
        </div>
    )
}