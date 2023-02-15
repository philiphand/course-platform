import { Module, Section } from "../types";

let sections: Section[] = [
  {
    type: "text",
    title: "80,000 Hours key ideas",
    organization: "80,000 Hours",
    linkTitle: "Summary: what makes for a high-impact career?",
    url: "https://80000hours.org/key-ideas/summary/",
    minutes: 7
  },
  {
    type: "video",
    title: "Mistakes on the way to impact",
    person: "Michael Noetel",
    url: "https://www.youtube.com/watch?v=efVh51hbRHY"
  },
  {
    type: "video",
    title: "Doing good as a student",
    person: "Claire Zabel",
    url: "https://www.youtube.com/watch?v=uAp9nv2lUSg"
  },
  {
    type: "video",
    title: "Fulfilling careers",
    url: "https://www.youtube.com/watch?v=iY5Vd4LH1J4"
  },
  {
    type: "video",
    title: "Finding the right career for you",
    url: "https://www.youtube.com/watch?v=qcvcDvzjSzc"
  },
  {
    type: "video",
    title: "Charity Entrepreneurship",
    url: "https://www.youtube.com/watch?v=S7Cu59G1aSQ"
  },
  {
    type: "text",
    title: "Effective Thesis",
    organization: "Effective Thesis",
    linkTitle: "Make your thesis more meaningful",
    url: "https://effectivethesis.org/",
    minutes: 5
  },
  {
    title: "Week 6 discussion questions",
    type: "reflection",
    questions: [
      "Based on the readings in previous sessions, which global problems do you think are most pressing and why? (Remember, experts are quite uncertain about this question!)",
      "What are your 3-5 biggest uncertainties about the above?",
      "What could you do over the next few weeks to explore those uncertainties? (For example, do more reading, talk things through with a friend, or write an EA Forum post on your key uncertainties to get feedback.)",
      "What aptitudes are you most interested in exploring or using next? You might want to think about what you’re unusually good at, what activities make you feel energized, and what skills seem especially useful for addressing the problems you listed above.",
      "How could you begin to test out those aptitudes over the next few weeks?",
      "While you’re figuring out your uncertainties, are there any actions to improve the world that you want to do now? (E.g. make a donation, or do things that make it more likely that you remember to apply these ideas in your life (like signing up to newsletters, committing to discuss your career with a friend, or making a task to apply for high-impact jobs/internships))."
    ],
    organization: "Centre for Effective Altruism",
    url: "https://centreforeffectivealtruism.notion.site/centreforeffectivealtruism/2875846af31449c58ea5969072692073?v=5da1eebe4c7e4568b0c99ae04df23606"
  }
];

let module: Module = {
  number: 6,
  title: "Putting it into practice",
  goals: [
  ],
  introduction: [
  ],
  keyConcepts: [
    "Career capital: anything that puts you in a better position to make a difference in the future, including skills, connections, credentials and runway. Gaining career capital is important throughout your career, but especially when you're young and you have a lot to learn.",
    "Personal fit: a measure of a person's chances of excelling in a particular job. Formally, personal fit it may be defined as the ratio of the person's productivity in the job to the average productivity of other candidates likely to take that job.",
    "Earning to give: deliberately pursuing a high-earning career for the purpose of donating a significant portion of earned income, typically because of a desire to do effective altruism.",
    "Direct work: working directly on solving important problems to maximize your impact, or providing support to others doing impactful work. Direct work does not necessarily mean working for a charity; it can also involve working for a government body or a for-profit company."
  ],
  sections
}

export default module;