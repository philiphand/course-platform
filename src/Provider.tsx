/* eslint-disable no-empty-pattern */
import React, { createContext, useState } from 'react';
import { Course, Module } from './pages/Course/courses/types';
import courses from './pages/Course/courses/courses';

export interface Section {
  module: number;
  section: number;
}

export type IntroProgramState = {
  courses: Course[];
  currentCourse?: Course;
  modules: Module[];
  currentCourseId: string;
  currentSection: Section;
  sidebarOpen: boolean;
}

let initialState: IntroProgramState = {
  courses,
  modules: [],
  currentCourseId: "",
  currentSection: {module: 0, section: 0},
  sidebarOpen: false,
}

export const IntroProgramContext = createContext({
  state: initialState,
  nextSection: () => {},
  prevSection: () => {},
  goToModule: (targetModule: number) => {},
  goToSection: (targetSection: Section) => {},
  setModules: (modules: Module[]) => {},
  setCurrentCourseId: (courseId: string) => {},
  setCompletedSection: (targetSection: Section, completionStatus: boolean) => {},
  setSidebarOpen: (openStatus: boolean) => {},
})

function Provider(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  const [state, setState] = useState(initialState);

  const nextSection = () => {
    setState({...state, currentSection: {module: state.currentSection.module, section: state.currentSection.section + 1}})
  }
  const prevSection = () => {
    setState({...state, currentSection: {module: state.currentSection.module, section: state.currentSection.section - 1}})
  }
  const goToModule = (targetModule: number) => {
    window.scrollTo(0,0);
    setState({...state, currentSection: {module: targetModule, section: 1}})
  }
  const goToSection = (targetSection: Section) => {
    window.scrollTo(0,0);
    setState({...state, currentSection: targetSection})
  }
  const setModules = (modules: Module[]) => {
    setState({...state, modules})
  }
  const setCurrentCourseId = (currentCourseId: string) => {
    setState({...state, currentCourseId})
  }
  const setCompletedSection = (targetSection: Section, completionStatus: boolean) => {
    let newState = {...state}
    newState.modules[targetSection.module-1].sections[targetSection.section].completed = completionStatus;
    setState({...state})
  }
  const setSidebarOpen = (openStatus: boolean) => {
    setState({...state, sidebarOpen: openStatus})
  }

  return (
    <IntroProgramContext.Provider value={{
        state, 
        nextSection, 
        prevSection,
        goToModule,
        goToSection,
        setModules,
        setCurrentCourseId,
        setCompletedSection,
        setSidebarOpen,
    }}>
      {props.children}
    </IntroProgramContext.Provider>
  );
}

export default Provider;
