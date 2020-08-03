import React from 'react';
import {skills} from './../../constants/Skills';
import {SkillCard} from './../SkillCard/SkillCard';
import './skills.css';

export const Skills = (props) => {
    return (
        <div className="skills-container">
            <h3>Industry Knowledge</h3>
            <div className="industry-skill-container">
               {
                   skills.industryKnowledge.map (skill => <SkillCard skill={skill} /> )
               }
            </div>
        </div>
    )
}