import React, { useContext, useEffect } from 'react';
import { CheckedCircle, HalfCircle, HideButton, OpenMenu, PlayCircle } from '../../../components/icons/icons';
import { IntroProgramContext } from '../../../Provider';
import { Module } from '../courses/types';
import "./sidebar.css";

interface Props {
    modules: Module[];
}

export const Sidebar: React.FC<Props> = ({modules}) => {
    const context = useContext(IntroProgramContext);
    const currMod = context.state.currentSection.module;
    const showSidebar = context.state.sidebarOpen;

    return (
        <div>
            <div className={showSidebar ? "expand-sidebar hidden" : "expand-sidebar"}>
                <div onClick={() => context.setSidebarOpen(true)}><OpenMenu /></div>
            </div>
            <div className={showSidebar ? "sidebar" : "sidebar hidden"}>
                <div className="cross-div" onClick={() => context.setSidebarOpen(false)}><HideButton /></div>
                <div><strong className="overview-link" onClick={() => context.goToModule(0)}>Course overview</strong></div>
                {modules.map((module) => {
                    const moduleLength = module.sections.length;
                    let completedSections = 0;
                    module.sections.forEach((section) => {
                        if (section.completed) completedSections += 1
                    })
                    const moduleStarted = completedSections > 0;
                    const moduleCompleted = completedSections === moduleLength
                    return (
                        <div 
                            className={currMod === module.number ? "current-module module-div": "module-div"} 
                            key={module.number} 
                            onClick={() => context.goToModule(module.number)}
                        >
                            <div className="sidebar-title">
                                {!moduleStarted && <PlayCircle />}
                                {moduleStarted && !moduleCompleted && <HalfCircle />}
                                {moduleCompleted && <CheckedCircle />}
                                <span> Week {module.number} - {module.title}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}