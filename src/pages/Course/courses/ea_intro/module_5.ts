import { Module, Section } from "../types";

let sections: Section[] = [
  {
    type: "text",
    title: "Is the world getting better or worse?",
    linkTitle: "Is the world getting better or worse?",
    person: "Benjamin Hilton",
    organization: "80,000 Hours",
    url: "https://80000hours.org/2023/02/is-the-world-getting-better-or-worse/",
    minutes: 5
  },
  {
    title: "The world can be much better",
    person: "Max Roser",
    organization: "Our World in Data",
    type: "text",
    linkTitle: "The world is awful. The world is much better. The world can be much better.",
    url: "https://ourworldindata.org/much-better-awful-can-be-better",
    minutes: 7
  },
  {
    type: "text",
    title: "Superforecasting",
    linkTitle: "Superforecasting in a nutshell",
    person: "Luke Muehlhauser",
    url: "https://lukemuehlhauser.com/superforecasting-in-a-nutshell/",
    minutes: 5
  },
  {
    type: "text",
    title: "Bayes' rule",
    linkTitle: "Bayes' rule: Guide",
    url: "https://arbital.com/p/bayes_rule/?l=1zq",
    organization: "Arbital",
    minutes: 20
  },
  {
    type: "text",
    title: "AI timelines",
    person: "Max Roser",
    organization: "Our World in Data",
    linkTitle: "AI timelines: What do experts in artificial intelligence expect for the future?",
    url: "https://ourworldindata.org/ai-timelines",
    minutes: 9
  },
  {
    type: "text",
    title: "This can't go on",
    linkTitle: "This Can't Go On",
    person: "Holden Karnofsky",
    url: "https://www.cold-takes.com/this-cant-go-on/",
    minutes: 13
  },
  {
    type: "text",
    title: "Metaculus",
    introduction: [
      "Read the first few dozen results and reflect on what you find important and surprising. These are average predictions of how several important trends will unfold over the coming years. We’re not sure how accurate they’ll be, but we think it gives a glimpse into the future."
    ],
    linkTitle: "Questions",
    organization: "Metaculus",
    url: "https://www.metaculus.com/questions/?order_by=-votes&main-feed&type=forecast&status=open",
    minutes: 5
  }
];

let module: Module = {
  number: 5,
  title: "Forecasting the future",
  goals: [
  ],
  introduction: [
  ],
  keyConcepts: [
  ],
  sections
}

export default module;