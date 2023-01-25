/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect, useState } from 'react';
import "./course.css";
import { IntroProgramContext, Section } from '../../Provider';
import { Book, Calendar, Certificate, Clock, Globe, LightBulb, Warning, WhiteCheckMark, Wrench } from '../../components/icons/icons';
import { Module } from './Module/Module';
import { Sidebar } from './Sidebar/Sidebar';
import { SectionOverview } from './SectionOverview/SectionOverview';
import { Progressbar } from './ModuleProgress/Progressbar';
import { ProgressInfo } from './ProgressInfo/ProgressInfo';

const Course: React.FC = () => {
  const context = useContext(IntroProgramContext);
  //let { id } = useParams();
  const id = "handbook" // Temporarily override url parameter
  const [initiatedModules, setInitiatedModules] = useState(false);
  const [courseStarted, setCourseStarted] = useState(false);
  const [changedCourse, setChangedCourse] = useState(false);
  const [firstIncompleteSection, setFirstIncompleteSection] = useState<Section>({module: 0, section: 0});
  const state = context.state;
  const currMod = context.state.currentSection.module;
  const modules = context.state.modules;

  // Go to course overview when changing to another course
  useEffect(() => {
    if (changedCourse) {
      context.goToModule(0);
      setChangedCourse(false)
    }
  }, [changedCourse, context])

  // Update state when changing course
  useEffect(() => {
    if (id !== context.state.currentCourseId) {
      context.setCurrentCourseId(id ? id : "");
      setChangedCourse(true);
    }
  }, [context, id])

  // Set course modules
  useEffect(() => {
    context.state.courses.forEach(course => {
      if (course.name === id) {
        if (!initiatedModules) {
          setInitiatedModules(true);
          context.setModules(course.modules);
        }
      }
    })
  }, [context, id, initiatedModules])

  // Update localstorage on state changes
  useEffect(() => {
    if (id) localStorage.setItem(id, JSON.stringify(state));

    let completedSections: string[] = [];
    state.modules.forEach(module => {
      module.sections.forEach(section => {
        if (section.completed) completedSections.push(section.title);
      })
    })
    localStorage.setItem("completedSections", JSON.stringify(completedSections));
  }, [id, state])

  useEffect(() => {
    let firstSectionfound = false;
    modules.forEach((module) => {
      // Find first uncompleted section
      module.sections.forEach((section) => {
        const sectionNumber = module.sections.indexOf(section);
        if (section.completed) setCourseStarted(true);
        if (!section.completed && !firstSectionfound) {
          setFirstIncompleteSection({module: module.number, section: sectionNumber+1});
          firstSectionfound = true;
        }
      })
    })
  }, [modules])

  return (
      <div className="center-div course-page">
          <div>
            <h3 onClick={() => context.goToModule(0)} className="page-title link">{state.currentCourse?.name}</h3>
            {currMod === 0 && !courseStarted &&
              <div className="course-overview">
                <strong>Learn about</strong>
                <div className="intro-list">
                <div><LightBulb/><span>The core ideas of effective altruism</span></div>
                <div><Warning/><span>Some of the world's most pressing problems</span></div>
                <div><Globe/><span>How you can help make a difference</span></div>
                
                </div>
                <strong>Course info</strong>
                <div className="intro-list">
                  <div><Book/><span>Content based on <a href="https://forum.effectivealtruism.org/handbook" target="_blank" rel="noreferrer">The EA Handbook</a></span></div>
                  <div><Calendar/><span>Six weekly modules</span></div>
                  <div><Clock/><span>Estimated course workload of 6-8 hours</span></div>
                  <div><Certificate/><span>Digital certificate upon completion</span></div>
                </div>
                <button className="nav-button" onClick={() => {
                    if (firstIncompleteSection.section > 1) {
                      context.goToSection(firstIncompleteSection);
                    } else {
                      // Show module preview before going to first section
                      context.goToSection({module: courseStarted ? firstIncompleteSection.module : 1, section: 0});
                    }
                  }}>
                    {courseStarted ? "Continue learning" : "Start learning"}
                  </button>
              </div>
            }

            {currMod === 0 && courseStarted &&
              <div className="progress-overview">
                <div>
                  <h3>{"Course overview"}</h3>
                  <ProgressInfo />
                  {currMod === 0 && 
              <div>
                {
                  <button className="nav-button" onClick={() => {
                    if (!courseStarted) setCourseStarted(true);
                    if (firstIncompleteSection.section > 1) {
                      context.goToSection(firstIncompleteSection);
                    } else {
                      // Show module preview before going to first section
                      context.goToSection({module: courseStarted ? firstIncompleteSection.module : 0, section: 0});
                    }
                  }}>
                    {courseStarted ? "Continue learning" : "Start learning"}
                  </button>
                }
              </div>
            }
                </div>
                {modules.map((module) => {
                  let totalMinutes = 0;
                  let completedMinutes = 0;
                  module.sections.forEach((section) => {
                    if (section.minutes) totalMinutes += section.minutes;
                    if (section.completed && section.minutes) completedMinutes += section.minutes;
                  })

                  const remainingMinutes = totalMinutes - completedMinutes;

                  return (
                    <div>
                      <div className="progress-overview-title">
                        <strong onClick={() => context.goToModule(module.number)}>
                          {module.title}
                        </strong>
                        {remainingMinutes !== 0 ? `(${remainingMinutes} minutes left)` : <WhiteCheckMark />}
                      </div>
                      <Progressbar moduleNumber={module.number} />
                    </div>
                  )
                })}
                <br />
              </div>
            }

            {currMod === 0 &&
              <div>
                <h3>Module overview</h3>
                <div className="module-overview">
                  {modules.map((module) => {
                    return (
                      <SectionOverview moduleNumber={module.number} />
                    )
                  })}
                </div>
              </div>
            }
            {currMod === 0 && <p>Content based on <a href="https://forum.effectivealtruism.org/handbook" target="_blank" rel="noreferrer">The EA Handbook</a></p>}
            {currMod === 0 && 
              <div>
                {
                  <button className="nav-button" onClick={() => {
                    if (firstIncompleteSection.section > 1) {
                      context.goToSection(firstIncompleteSection);
                    } else {
                      // Show module preview before going to first section
                      context.goToSection({module: courseStarted ? firstIncompleteSection.module : 1, section: 0});
                    }
                  }}>
                    {courseStarted ? "Continue learning" : "Start learning"}
                  </button>
                }
              </div>
            }
            {currMod !== 0 && 
              <Module moduleNumber={currMod} />
            }
            <Sidebar modules={modules} />
          </div>
      </div>
  );
}

export default Course;