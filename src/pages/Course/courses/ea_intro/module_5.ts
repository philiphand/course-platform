import { Module, Section } from "../types";

let sections: Section[] = [
  {
    type: "text",
    title: "Is the world getting better or worse?",
    linkTitle: "Is the world getting better or worse?",
    person: "Benjamin Hilton",
    organization: "80,000 Hours",
    url: "https://80000hours.org/2023/02/is-the-world-getting-better-or-worse/",
    minutes: 6,
    introduction: [
      "It's difficult to say whether the world is improving or not, as there are both positive and negative trends. On the one hand, poverty levels have decreased significantly since 1990, with both the share and absolute number of people living in extreme poverty falling. Additionally, child mortality rates have dropped, and life expectancy is on the rise. On the other hand, the number of people living in autocracies has been increasing since the 1950s, and animals exploited by humans are suffering more than ever before.",
      "Moreover, the risk of some catastrophes, such as engineered pandemics and AI-related catastrophes, is higher than ever before. Since the invention of nuclear weapons in 1945, humans have possessed the capacity to cause major global damage, and the number of countries with nuclear weapons has not decreased. While the absolute number of nuclear warheads has fallen since the 1980s, there are still enough to cause a major catastrophe. Additionally, we face new threats as we develop more dangerous technology, and the possibility of an engineered pandemic is a growing concern.",
      "It's essential to recognize that we don't know what the future holds, and it's impossible to predict the direction of global trends with certainty. While some positive trends, such as the decrease in poverty levels and the rise of renewable energy, may continue, negative trends, such as the increase in autocracies and the risk of catastrophes, may worsen. Nevertheless, there are ways we can increase the accuracy of our predictions about the future, which is this week's topic."
    ]
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
    title: "This can't go on",
    linkTitle: "This Can't Go On",
    person: "Holden Karnofsky",
    url: "https://www.cold-takes.com/this-cant-go-on/",
    minutes: 13
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