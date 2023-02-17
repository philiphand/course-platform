/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect, useState } from 'react';
import { List, People, PlayVideo, Question, TextIcon } from '../../../components/icons/icons';
import { IntroProgramContext } from '../../../Provider';
import "./sectionoverview.css";

interface Props {
    moduleNumber: number;
}

export const SectionOverview: React.FC<Props> = ({moduleNumber}) => {
    const context = useContext(IntroProgramContext);
    const modules = context.state.modules;
    const [totalMinutes, setTotalMinutes] = useState(0);

    useEffect(() => {
        let minutes = 0;
        modules[moduleNumber-1].sections.forEach(section => {
            if (section.minutes) minutes += section.minutes;
        })
        setTotalMinutes(minutes);
    }, [modules, moduleNumber])

    return (
        <div className="module-summary">
            {moduleNumber > 0 &&
                <div>
                    <strong className="module-title" onClick={() => context.goToModule(moduleNumber)}>{modules[moduleNumber-1].title}</strong>
                    <p>Week {moduleNumber} of {context.state.modules.length}</p>
                    <p>Estimated workload of {totalMinutes} minutes</p>
                </div>
            }

            <strong>Key concepts</strong>
            <ul className="key-concepts">
                {moduleNumber > 0 && modules[moduleNumber-1].keyConcepts.map((concept) => {
                return <li><strong>{concept.split(":")[0]}:</strong>{concept.split(":")[1]}</li>
                })}
            </ul>

            {moduleNumber > 0 && 
                <strong>Sections</strong>
            }
            {moduleNumber > 0 && modules[moduleNumber-1].sections.map((section) => {
                const sectionNumber = modules[moduleNumber-1].sections.indexOf(section)+1;
                return (
                    <>
                        <div 
                            onClick={() => {
                            context.goToSection({section: sectionNumber, module: moduleNumber});
                            }}
                            className="section-preview"
                        >
                            {section.type === "overview" && <List />}
                            {section.type === "video" && <PlayVideo />}
                            {section.type === "text" && <TextIcon />}
                            {section.type === "meeting" && <People />}
                            {section.type === "reflection" && <Question />}
                            <span>
                                <strong>{section.title}</strong> {(section.minutes && section.minutes > 0) ? `(${section.minutes} min)`: ""}
                            </span>
                        </div>
                    </>
                )
            })}
            <br />
            <button className="nav-button" onClick={() => {
                context.goToModule(moduleNumber)
            }}>
                Go to module {moduleNumber}
            </button>
        </div>
    );
}