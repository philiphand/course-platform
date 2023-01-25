export interface Section {
    title: string;
    person?: string;
    organization?: string;
    accreditation?: string;
    type: string;
    url?: string;
    minutes?: number;
    completed?: boolean;
    introduction?: string[];
    linkTitle?: string;

    // Meetings
    calendarLink?: string;
    date?: Date;
    meetingDescription?: string;
    location?: string;
    room?: string;

    // Reflection
    questions?: string[];
}

export interface Module {
    number: number;
    title: string;
    goals?: string[];
    sections: Section[];
    introduction?: string[];
    keyConcepts: string[];
}

export interface Course {
    name: string;
    title: string;
    shortDesc?: string;
    uibCurriculum?: string;
    modules: Module[];
    totalMinutes?: number;
    released?: boolean;
    recommended?: boolean;
    imageFileName?: string;
}

export enum Category {
    AIS = "AI safety",
    Biosecurity = "Biosecurity",
    GlobalHealth = "Global Health",
    Medicine = "Medicine",
    Biology = "Biology",
}

export enum SectionType {
    Video = "video",
    Text = "text",
    Overview = "overview",
}