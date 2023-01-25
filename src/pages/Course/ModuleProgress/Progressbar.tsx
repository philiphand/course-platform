/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { List, People, PlayVideo, Question, TextIcon } from '../../../components/icons/icons';
import { IntroProgramContext } from '../../../Provider';
import "./progressbar.css"

interface Props {
    moduleNumber: number;
}

export const Progressbar: React.FC<Props> = ({ moduleNumber }) => {
    const context = useContext(IntroProgramContext);
    const currSecNumber = context.state.currentSection.section;
    const modules = context.state.modules;

    return (
        <div className="progress-bar">
            {modules[moduleNumber-1].sections.map((section) => {
                const sectionNumber = modules[moduleNumber-1].sections.indexOf(section)+1;
                const classes = `tooltip progress-section ${section.completed && "filled-progress"} ${currSecNumber === sectionNumber && "current-section"}`
                return (
                    <div
                        className={classes}
                        onClick={() => {
                            context.goToSection({module: moduleNumber, section: sectionNumber})
                        }}
                    >
                        <span className="tooltiptext">{section.title}</span>
                        <span>
                            {section.type === "overview" && <List />}
                            {section.type === "video" && <PlayVideo />}
                            {section.type === "text" && <TextIcon />}
                            {section.type === "meeting" && <People />}
                            {section.type === "reflection" && <Question />}
                        </span>
                    </div>
                )
            })}
        </div>
    );
}