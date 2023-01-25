import React, { useContext, useEffect, useState } from 'react';
import { IntroProgramContext } from '../../../Provider';
import CircularProgressBar from '../CircularProgress/CircularProgress';
import "./progressinfo.css"

export const ProgressInfo: React.FC = () => {
    const context = useContext(IntroProgramContext);
    const modules = context.state.modules;
    const [courseProgressPercentage, setCourseProgressPercentage] = useState(0);
    const [totalCourseMinutes, setTotalCourseMinutes] = useState(0);
    const [completedCourseMinutes, setCompletedCourseMinutes] = useState(0);
    const [totalCourseSections, setTotalCourseSections] = useState(0);
    const [completedCourseSections, setCompletedCourseSections] = useState(0);
    const [totalCourseModules, setTotalCourseModules] = useState(0);
    const [completedCourseModules, setCompletedCourseModules] = useState(0);

    useEffect(() => {
        let totalMin = 0;
        let completedMin = 0;
        let totalSections = 0;
        let completedSections = 0;
        let totalModules = 0;
        let completedModules = 0;
        modules.forEach(module => {
            let moduleCompleted = true;
            module.sections.forEach(section => {
                if (section.completed) {
                    completedMin += section.minutes ? section.minutes : 0;
                    completedSections += 1;
                } else {
                    moduleCompleted = false;
                }
                totalMin += section.minutes ? section.minutes : 0;
                totalSections += 1;
            })
            totalModules += 1;
            if (moduleCompleted) completedModules += 1;
        })
        setTotalCourseMinutes(totalMin);
        setCompletedCourseMinutes(completedMin);
        setCourseProgressPercentage(Math.round((completedMin/totalMin)*100));
        setTotalCourseSections(totalSections);
        setCompletedCourseSections(completedSections);
        setTotalCourseModules(totalModules);
        setCompletedCourseModules(completedModules);
    }, [modules])

    return (
        <div className="progress-info">
            <div className="progress-bar-wrapper">
                <div className="progress-bar-frame">
                    <div className="progress-bar-fill" style={{width: `${courseProgressPercentage.toString()}%`}}>
                        <strong>{courseProgressPercentage > 6 && `${courseProgressPercentage}%`}</strong>
                    </div>
                </div>
                <span>Completed {(completedCourseMinutes/60).toFixed(0)} of {(totalCourseMinutes/60).toFixed(0)} hours</span>
            </div>
            <br />
            <div className="circle-dashboard">
                <div className="circle-progress-div">
                    <CircularProgressBar 
                        selectedValue={completedCourseSections} 
                        maxValue={totalCourseSections}
                        radius={40}
                    />
                    <span>Completed {completedCourseSections} of {totalCourseSections} sections</span>
                </div>
                <div className="circle-progress-div">
                    <CircularProgressBar 
                        selectedValue={completedCourseModules} 
                        maxValue={totalCourseModules}
                        radius={40}
                    />
                    <span>Completed {completedCourseModules} of {totalCourseModules} modules</span>
                </div>
            </div>
        </div>
    );
}