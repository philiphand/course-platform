/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { Academic, Clock, ExternalLink, Organization, Person, Return, WhiteCheckMark } from '../../../components/icons/icons';
import { IntroProgramContext } from '../../../Provider';
import "./module.css";
import "../course.css";
import { SectionOverview } from '../SectionOverview/SectionOverview';
import { Progressbar } from '../ModuleProgress/Progressbar';
import CircularProgressBar from '../CircularProgress/CircularProgress';

interface Props {
    moduleNumber: number;
}

export const Module: React.FC<Props> = ({moduleNumber}) => {
    const context = useContext(IntroProgramContext);
    const modules = context.state.modules;
    const currSec = context.state.currentSection.section;
    const currMod = modules[moduleNumber-1];
    const sectionCount = modules[moduleNumber-1].sections.length;
 
    let totalMinutes = 0;
    let completedMinutes = 0;
    currMod.sections.forEach((section) => {
        if (section.minutes) totalMinutes += section.minutes;
        if (section.completed && section.minutes) completedMinutes += section.minutes;
    })

    const remainingMinutes = totalMinutes - completedMinutes;

    return (
        <div className="module">
            <p className="return-link" onClick={() => context.goToModule(0)}><Return />Back to course overview</p>
            <div>
                <h3 className="module-title">
                    <strong onClick={() => context.goToModule(currMod.number)}>{modules[currMod.number-1].title}</strong>
                    {remainingMinutes !== 0 ? <span className="not-bold">({remainingMinutes} minutes left)</span> : <WhiteCheckMark />}
                </h3>
            </div>
            <div>
                {currSec === 0 &&
                    <SectionOverview moduleNumber={currMod.number}/>
                }

                {currSec > 0 && <Progressbar moduleNumber={currMod.number} />}
                <br />
                {currSec > 0 && <strong>{currMod.sections[currSec-1].title}</strong>}

                {currSec !== 0 && currMod.sections[currSec-1].type === "overview" &&
                    <div>
                        {currMod.sections[currSec-1].introduction?.map(paragraph => {
                            return <p>{paragraph}</p>
                        })}
                        <strong>Key concepts</strong>
                        <ul className="key-concepts">
                            {moduleNumber > 0 && modules[moduleNumber-1].keyConcepts.map((concept) => {
                            return <li><strong>{concept.split(":")[0]}:</strong>{concept.split(":")[1]}</li>
                            })}
                        </ul>
                    </div>
                }

                {currSec !== 0 && currMod.sections[currSec-1].type === "video" &&
                    <div>
                        {currMod.sections[currSec-1].completed && <p className="centered-logo-text greentext">Section completed <WhiteCheckMark /> </p>}
                        {currMod.sections[currSec-1].introduction?.map(paragraph => {
                            return <p>{paragraph}</p>
                        })}
                        <iframe
                            allow="fullscreen"
                            className="youtube-video"
                            title={currMod.sections[currSec-1].title}
                            src={currMod.sections[currSec-1].url}>
                        </iframe>
                    </div>
                }
                {currSec !== 0 && currMod.sections[currSec-1].type === "text" &&
                    <div>
                        {currMod.sections[currSec-1].completed && <p className="centered-logo-text greentext">Section completed <WhiteCheckMark /> </p>}
                        {currMod.sections[currSec-1].introduction?.map(paragraph => {
                            return <p>{paragraph}</p>
                        })}
                        <br />
                        <strong><i>{currMod.sections[currSec-1].linkTitle} - {currMod.sections[currSec-1].person ? currMod.sections[currSec-1].person : currMod.sections[currSec-1].organization}</i></strong>
                        <br />
                        <br />
                        <a href={currMod.sections[currSec-1].url} target="_blank" rel="noreferrer" >
                            <button className="nav-button"><ExternalLink /> Open article</button>
                        </a>
                        <br />
                    </div>
                }
                {currSec !== 0 && currMod.sections[currSec-1].type === "meeting" &&
                    <div>
                        <p>{currMod.sections[currSec-1].meetingDescription}</p>
                        {currMod.sections[currSec-1].room && <p>Room: {currMod.sections[currSec-1].room}</p>}
                        <a href="https://eauib.no/calendar" target="_blank" rel="noreferrer"><button className="nav-button"><ExternalLink /> View in our calendar</button></a>
                        <br />
                        <iframe className="maps-iframe" src={currMod.sections[currSec-1].url} loading="lazy" title="iframe-map"></iframe>
                    </div>
                }
                {currSec !== 0 && currMod.sections[currSec-1].type === "reflection" &&
                    <div>
                        Here are some discussion questions to reflect on before our next discussion meeting. It can also be helpful to write down your thoughts to remember them.
                        <br />
                        <br />
                        <strong>Questions</strong>
                        <ul>
                            {currMod.sections[currSec-1].questions?.map(question => {
                                return <li className="discussion-question">{question}</li>
                            })}
                        </ul>
                    </div>
                }
                
                {currSec !== 0 && currMod.sections[currSec-1].type !== "meeting" &&
                    <div className="section-info">
                        {currMod.sections[currSec-1].type === "video" && <div><Clock /> {currMod.sections[currSec-1].minutes} minute video</div>}
                        {currMod.sections[currSec-1].type === "text" && <div><Clock />{currMod.sections[currSec-1].minutes} minute read</div>}
                        {currMod.sections[currSec-1].person && <div><Person />{currMod.sections[currSec-1].person}</div>}
                        {currMod.sections[currSec-1].organization && <div><Organization />{currMod.sections[currSec-1].organization}</div>}
                        {currMod.sections[currSec-1].accreditation && <div><Academic />{currMod.sections[currSec-1].accreditation}</div>}
                        {(currMod.sections[currSec-1].type === "video" || currMod.sections[currSec-1].type === "reflection") && <div><ExternalLink /><a href={currMod.sections[currSec-1].url} target="_blank" rel="noreferrer" >Original source</a></div>}
                    </div>
                }

                <div className="navigation-div">
                    {currSec > 0 &&
                        <button className="nav-button" onClick={() => {
                            context.prevSection();
                        }}>
                            Go back
                        </button>
                    }
                    {currSec > 0 &&
                        <CircularProgressBar
                            radius={20}
                            maxValue={sectionCount}
                            selectedValue={currSec}
                            valueFontSize={16}
                            activeStrokeColor={"var(--primary)"}
                        />
                    }
                    {currSec < currMod.sections.length &&
                        <button className="nav-button" onClick={() => {
                            if (currSec > 0) context.setCompletedSection({module: currMod.number, section: currSec-1}, true);
                            context.nextSection();
                        }}>{currSec === 0 ? "Continue" : (currMod.sections[currSec-1].completed ? "Continue" : "Complete")}</button>
                    }
                    {currSec === currMod.sections.length && // TODO: Refactor
                        <button className="nav-button" onClick={() => {
                            if (currSec > 0) context.setCompletedSection({module: currMod.number, section: currSec-1}, true);
                            context.goToModule(0);
                        }}>Complete</button>
                    }
                </div>
            </div>
        </div>
    );
}