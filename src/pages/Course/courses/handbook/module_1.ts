import { Module, Section } from "../types";

let sections: Section[] = [
  {
    title: "What is effective altruism (EA)?",
    organization: "Centre for Effective Altruism",
    introduction: [
      "The world we live in today is full of problems, from poverty to climate change, and it can be difficult to know where to start when it comes to making a positive impact. Fortunately, effective altruism offers us a powerful tool to guide our efforts – a way to make the most of our time, money, and talents to make the most meaningful difference we can.", 
      "In this article, we'll explore what effective altruism is and how it can help us make the world a better place. This article provides an overview of the philosophy of effective altruism, as well as current thinking in the EA community. We’ll look at why it’s important to focus our efforts on areas of greatest need, and how to identify and evaluate potential causes to support. Finally, we’ll discuss practical strategies for putting our altruistic intentions into action.",
    ],
    type: "text",
    linkTitle: "What is effective altruism?",
    url: "https://www.effectivealtruism.org/articles/introduction-to-effective-altruism",
    minutes: 15
  },
  {
    title: "Four ideas you agree with EA about",
    person: "Sam Deere",
    organization: "Giving What We Can",
    type: "text",
    linkTitle: "Four Ideas You Already Agree With (That Mean You're Probably on Board with Effective Altruism)",
    url: "https://www.givingwhatwecan.org/post/2016/03/four-things-you-already-agree-with-effective-altruism/",
    minutes: 5
  },
  {
    title: "Can we really improve the world?",
    person: "Max Roser",
    organization: "Our World in Data",
    type: "text",
    linkTitle: "The world is awful. The world is much better. The world can be much better.",
    url: "https://ourworldindata.org/much-better-awful-can-be-better",
    minutes: 5
  },
  {
    title: "Scope insensitivity",
    introduction: [
      "Scope neglect or scope insensitivity is a cognitive bias that occurs when the valuation of a problem is not valued with a multiplicative relationship to its size. Daniel Kahneman, a Nobel Prize-winning economist, and Amos Tversky, his research partner, first identified scope neglect in the early 1970s.",
      "For example, people are more likely to judge a problem that will affect 10 people as being more severe than a problem that will affect only one person. However, they are less likely to judge a problem that will affect 100 people as being more severe than a problem that will affect 10 people. Scope neglect can have a significant impact on decision-making. For example, it can lead people to underestimate the severity of a problem, which can lead to poor decisions.",
      "In one study, respondents were asked how much they were willing to pay to prevent migrating birds from drowning in uncovered oil ponds by covering the oil ponds with protective nets. Subjects were told that either 2,000, or 20,000, or 200,000 migrating birds were affected annually, for which subjects reported they were willing to pay $80, $78 and $88 respectively, showing that people were willing to pay nearly the same amount to save either 2,000 or 200,000 birds. This is arguably not a rational decision."
    ],
    person: "Nate Soares",
    organization: "Minding our way",
    type: "text",
    linkTitle: "On caring",
    url: "http://mindingourway.com/on-caring/",
    minutes: 10
  },
  {
    title: "Scout mindset",
    introduction: 
      [
        'Perspective is everything, especially when it comes to examining your beliefs. Are you a soldier, prone to defending your viewpoint at all costs — or a scout, spurred by curiosity? Julia Galef examines the motivations behind these two mindsets and how they shape the way we interpret information, interweaved with a compelling history lesson from 19th-century France. When your steadfast opinions are tested, Galef asks: "What do you most yearn for? Do you yearn to defend your own beliefs or do you yearn to see the world as clearly as you possibly can?"',
      ],
    person: "Julia Galef",
    type: "video",
    linkTitle: "Why you think you are right – even if you’re wrong",
    url: "https://www.youtube.com/embed/w4RLfVxTGH4",
    minutes: 11
  },
  {
    title: "Cognitive biases",
    organization: "Practical Psychology",
    introduction: [
      "Cognitive biases are tendencies to think in certain ways that can lead to inaccurate judgments. There are many different cognitive biases, and they can affect judgments in different ways. It is important to be aware of the most common cognitive biases and how they can lead to inaccurate judgments, so that you can avoid making these mistakes in your own life.",
      "Some cognitive biases related to effective altruism are the sunk cost fallacy, the gambler’s fallacy, and the overconfidence bias. The sunk cost fallacy is the tendency to continue investing in something, even when it is no longer rational to do so, because of the investments that have already been made. The gambler’s fallacy is the belief that past events can influence the likelihood of future events. The overconfidence bias is the tendency to overestimate one’s abilities or chances of success.",
    ],
    type: "video",
    linkTitle: "12 Cognitive Biases Explained - How to Think Better and More Logically Removing Bias",
    url: "https://www.youtube.com/embed/wEwGBIr_RIw",
    minutes: 10
  },
  {
    title: "Feeling good vs. doing good",
    person: "Eliezer Yudkowsky",
    type: "text",
    linkTitle: "Purchase fuzzies and utilons differently",
    url: "https://www.lesswrong.com/posts/3p3CYauiX8oLjmwRF/purchase-fuzzies-and-utilons-separately",
    minutes: 6
  },
  {
    title: "Triage and cause prioritization",
    person: "Holly Elmore",
    type: "text",
    linkTitle: "We are in triage every second of every day",
    url: "https://mhollyelmoreblog.wordpress.com/2016/08/26/we-are-in-triage-every-second-of-every-day/",
    minutes: 5
  },
  {
    title: "Week 1 discussion questions",
    type: "reflection",
    questions: [
      "What are the most important new ideas that you took away from the readings this week?",
      "What is the core question of effective altruism?",
      "You have limited resources, so you can’t solve all the world’s problems overnight. What should you focus on first? How do you even start to answer this question?",
      "What are the habits/tips for thinking and communicating clearly and sincerely from the readings that you found most compelling? Most challenging?",
      "What does Holly Elmore mean when she writes “We are always in triage?” Why is triage an important concept for effective altruism?",
      "Scope sensitivity - that helping more is better than helping less at all scales - is a core idea in effective altruism. Why do you think it’s so important to EA?"
    ],
    organization: "Centre for Effective Altruism",
    url: "https://centreforeffectivealtruism.notion.site/The-Effectiveness-Mindset-5cfdfbcfc4334d5288daaa25bbe878be"
  }
];

let module: Module = {
  number: 1,
  title: "Effective altruism",
  goals: [
  ],
  introduction: [
    "Effective alruism is about doing the most good using the resources available.",
    "This goal can best be achieved through the use of critical thinking and evidence.",
    "In this module you will learn some common ideas and tools used to evaluate the cost-effectiveness of different interventions.",
    "During the first two weeks we aim to introduce the core principles of EA. We introduce these ideas in the context of global poverty because we think it’s an approachable and intuitive cause area, and makes the tools more obviously and immediately useful and practical."
  ],
  keyConcepts: [
    "Effective altruism (EA): a philosophical and social movement that advocates using evidence and reason to figure out how to benefit others as much as possible, and taking action on that basis.",
    "Cause prioritization: because we have limited resources, we need to prioritize between different ways to improve the world.",
    "Scout mindset: we’ll be better able to help others if we’re working together to find the truth, rather than trying to defend our own ideas.",
    "Cognitive biases: a systematic error in thinking that occurs when people are processing and interpreting information in the world around them and affects the decisions and judgments that they make.",
    "Scope insensitivity: a cognitive bias that occurs when the valuation of a problem is not valued with a multiplicative relationship to its size."
  ],
  sections
}

export default module;