import handbook from "./handbook/course"
import { Course } from "./types";
import { IntroProgramState } from "../../../Provider";

let courses: Course[] = [
    handbook,
]

// Update state based on localStorage
for (let i = 0; i < courses.length; i++) {
    let localStateJSON = localStorage.getItem(courses[i].name);
    const localState: IntroProgramState = localStateJSON ? JSON.parse(localStateJSON) : null;

    if (localState !== null) {
        localState.modules.forEach(module => {
            module.sections.forEach(section => {
                courses[i].modules.forEach(initialModule => {
                    initialModule.sections.forEach(initialSection => {
                        if (section.title === initialSection.title) {
                            if (section.completed) initialSection.completed = true;

                            // Updates video sections with data from YouTube API
                            if (section.linkTitle && !initialSection.linkTitle) {
                                initialSection.linkTitle = section.linkTitle
                            }
                            if (section.minutes && !initialSection.minutes) {
                                initialSection.minutes = section.minutes
                            }
                            if (section.organization && !initialSection.organization) {
                                initialSection.organization = section.organization
                            }
                        }
                    })
                })
            })
        })
    }
}

courses.forEach(course => {
    let totalCourseMinutes = 0
    course.modules.forEach((module) => {
        let moduleWorkload = 0
        module.sections.forEach((section) => {
            if (!section.organization && !section.person && section.type !== "video") {
                section.organization = ""
            }
            if (section.url?.includes("/watch")) {
                section.url = section.url.replace("/watch?v=", "/embed/")
            }
            if (section.minutes) moduleWorkload += section.minutes
            if (section.type === "video" && section.minutes === undefined) {
                const videoId = section.url ? section.url.split("embed/")[1] : "";
                const Http = new XMLHttpRequest();
                const apiKey = "AIzaSyD0dwiSBbHvGuf6EOaRkzIUjPCTwVWxits";
                const url= `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,contentDetails,statistics,status`;
                Http.open("GET", url);
                Http.send();

                Http.onreadystatechange = (e) => {
                    const result = JSON.parse(Http.responseText);
                    const videoTitle = result.items[0].snippet.title;
                    const channelTitle = result.items[0].snippet.channelTitle;
                    let minutes = parseInt(result.items[0].contentDetails.duration.split("M")[0].split("PT")[1]);
                    const seconds = parseInt(result.items[0].contentDetails.duration.split("M")[1].split("S")[0]);
                    if (seconds >= 30) minutes += 1;

                    section.linkTitle = videoTitle;
                    section.organization = channelTitle
                    section.minutes = minutes;
                    moduleWorkload += minutes;
                }
            }
        })
        totalCourseMinutes += moduleWorkload
    })
    courses[courses.indexOf(course)].totalMinutes = totalCourseMinutes
})

export default courses