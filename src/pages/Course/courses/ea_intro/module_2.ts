import { Module, Section } from "../types";

let sections: Section[] = [
  {
    title: "The ITN framework",
    type: "text",
    introduction: [
      "What is the best way to find cost-effective interventions to improve the world? Nobody has yet found a perfect way to go about this, but the EA community often uses a method known as the ITN framework. ITN is an abbreviation for importance, neglectedness, and tractability, which are the three factors the framework considers to prioritize global cause areas.",
      "Very roughly speaking, importance stands for the scale and severity of the problem, while neglectedness stands for the amount of attention and resources it has received, and tractability stands for how much progress we can expect to make if we invest a certain amount of resources into it. Weighing these three factors together may help us identify cost-effective interventions that are likely to have the greatest impact.",
      "The following article explains how Open Philanthropy uses the ITN framework to prioritize different causes. Open Philanthropy is a non-profit organization that works to strategically allocate resources to the most effective causes and interventions. They also do independent research to find the most cost-effective interventions and support them accordingly."
    ],
    linkTitle: "Cause selection",
    organization: "Open Philanthropy",
    url: "https://www.openphilanthropy.org/cause-selection/",
    minutes: 6
  },
  {
    title: "Fermi estimates",
    introduction: [
      "Fermi estimates are about making rough estimates about quantities that are difficult to measure. For example, the exact number of people in a city or stars in the sky at a given time. In both of these cases it would be nearly impossible to come up with an exact number.",
      "However, by using a few basic assumptions and some simple math, it is often possible to come up with a reasonable estimate of the quantity in question. Instead of simply guessing or following our intuition, it may be more rational to make a rough and inaccurate estimate to aid our decision-making.",
      "Fermi estimates can help us estimate the cost-effectiveness different interventions to improve the world. They are therefore very useful in the context of cause prioritization and deciding where to allocate our resources."
    ],
    person: "Nagesh Belludi",
    organization: "Right Attitudes",
    type: "text",
    linkTitle: "The Fermi Rule: Better be Approximately Right than Precisely Wrong",
    url: "https://www.rightattitudes.com/2017/08/28/the-fermi-rule-guesstimation/",
    minutes: 5
  },
  {
    type: "video",
    title: "Expected value",
    introduction: [
      "This section introduces the concept of expected value. The expected value of en event is defined as the probability of the event multiplied by the value of the event if it occurs. Because the world is highly unpredictable, expected value calculations are commonly used in cost-effectiveness analysis for uncertain events where the probability is less than 100%."
    ],
    organization: "Veritasium",
    linkTitle: "Would You Take This Bet?",
    url: "https://www.youtube.com/watch?v=vBX-KulgJ1o",
    minutes: 7
  },
  {
    title: "Hits-based giving",
    type: "text",
    linkTitle: "Hits-based Giving",
    organization: "Open Philanthropy",
    person: "Holden Karnofsky",
    url: "https://www.openphilanthropy.org/research/hits-based-giving/",
    minutes: 27
  },
  {
    type: "text",
    title: "GiveWells criteria",
    url: "https://www.givewell.org/how-we-work/criteria",
    minutes: 10
  },
  {
    title: "What does it cost to save a life?",
    introduction: [
      "The following article shows an attempt at estimating the cost of saving a life. This example estimate is from a cost-effectiveness analysis done by the charity evaluator GiveWell. A charity evaluator is an organization that evaluates charities and provides recommendations for donors. GiveWell separates itself from other charity evaluators by emphasizing evidence and certainty of positive outcomes when ranking charity interventions."
    ],
    type: "text",
    url: "https://www.givewell.org/cost-to-save-a-life",
    minutes: 5
  },
  {
    title: "Week 2 discussion questions",
    type: "reflection",
    questions: [
      "How can we go about comparing different interventions/cause areas? Can quantitative estimates of impact be useful even if they’re imprecise?",
      "How useful are QALYs? What are the benefits? What are potential drawbacks?",
      "How useful is considering importance, tractability, and neglectedness?",
      "How useful is expected value (EV)? What are the benefits? What are potential drawbacks?",
      "What types of outcomes are particularly hard to measure (or even impossible)? How should we treat such outcomes?",
      "What kind of problems can we run into when we try quantifying cost-effectiveness? What features are not captured by such estimates? Are there important features of an intervention that are not captured by cost-effectiveness estimates? Which?"
    ],
    organization: "Centre for Effective Altruism",
    url: "https://centreforeffectivealtruism.notion.site/Differences-in-Impact-7ca0f3806c5b45afbb563526391bd210"
  }
];

let module: Module = {
  number: 2,
  title: "Cause prioritization",
  goals: [
  ],
  introduction: [
  ],
  keyConcepts: [
  ],
  sections
}

export default module;