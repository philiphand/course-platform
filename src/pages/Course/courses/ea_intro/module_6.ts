import { Module, Section } from "../types";

let sections: Section[] = [
  {
    type: "text",
    introduction: [
      "A core principle in effective altruism is using rational thinking to best achieve our goals. However, no human truly acts or thinks rationally, we all suffer from errors in thinking, such as cognitive biases, emotional biases and logical fallacies. To think and act more rationally, we should be aware of these biases and fallacies, and take steps to correct them. We especially want to avoid groupthink in the effective altruism community, where members of a group start to think alike, and become more resistant to outside perspectives. There are a few ways to avoid groupthink and think more rationally.",
      "1) Be aware of your own biases and fallacies. We all have them, and if we’re not aware of them, they can lead us astray.",
      "2) Be open-minded. Be willing to consider new ideas, even if they’re outside your comfort zone.",
      "3) Be critical. Question your own beliefs and assumptions, and examine them dispassionately.",
      "4) Be humble. Recognize that you might not have all the answers, and that others might have valuable insights.",
      "5) Seek out diverse perspectives. When you’re making a decision, try to get input from people with different backgrounds and viewpoints."
    ],
    title: "Independent impressions",
    linkTitle: "Independent impressions",
    person: "Michael Aird",
    url: "https://forum.effectivealtruism.org/posts/2WS3i7eY4CdLH99eg/independent-impressions",
    minutes: 2
  },
  {
    type: "video",
    title: "Epistemology",
    url: "https://www.youtube.com/watch?v=lInyN-WD9u4"
  },
  {
    type: "text",
    title: "Effective altruism FAQ",
    linkTitle: "Frequently Asked Questions and Common Objections",
    organization: "Centre for Effective Altruism",
    url: "https://www.effectivealtruism.org/faqs-criticism-objections",
    minutes: 16
  },
  {
    type: "text",
    title: "Notes on effective altruism",
    person: "Michael Nielsen",
    linkTitle: "Notes on effective altruism",
    url: "https://michaelnotebook.com/eanotes/",
    minutes: 21
  },
  {
    type: "text",
    title: "Disagreements about effectiveness",
    linkTitle: "Disagreeing about what’s effective isn’t disagreeing with effective altruism",
    organization: "80,000 Hours",
    url: "https://80000hours.org/2015/07/disagreeing-about-whats-effective-isnt-disagreeing-with-effective-altruism/",
    minutes: 4
  },
  {
    type: "text",
    title: "The repugnant conclusion",
    linkTitle: "The repugnant conclusion",
    introduction: [
      "Just like there are disagreements in the EA community about the effectiveness of different interventions, there are also philosophical disagreements about what is actually intrinsically valuable. One example of such a disagreement is the repugnant conclusion in the field of population ethics, also known as the mere addition paradox.",
      "The repugnant conclusion is a thought experiment in population ethics that shows that there can be cases where the total amount of happiness in the world is greater if there are more people with lives that are barely worth living, rather than fewer people with much better lives. This is counterintuitive to many people, and so it has caused a lot of debate.",
      "There are a few different ways to resolve the repugnant conclusion. One is to reject the idea that the total amount of happiness is all that matters. Instead, some people believe that what matters is the average amount of happiness. This would mean that it is better to have fewer people with lives that are barely worth living, even if it means that the total amount of happiness is lower."
    ],
    organization: "1000-Word Philosophy",
    url: "https://1000wordphilosophy.com/2014/08/04/the-repugnant-conclusion/",
    minutes: 5
  },
  {
    type: "text",
    title: "EA Survey 2020: Cause Prioritization",
    linkTitle: "EA Survey 2020: Cause Prioritization",
    organization: "Rethink Priorities",
    url: "https://rethinkpriorities.org/publications/eas2020-cause-prioritization",
    minutes: 5
  },
  {
    type: "text",
    title: "List of potential cause areas",
    linkTitle: "Our current list of pressing world problems",
    organization: "80,000 Hours",
    url: "https://80000hours.org/problem-profiles/",
    minutes: 15
  },
  {
    title: "Week 5 discussion questions",
    type: "reflection",
    questions: [
      "What are your biggest questions, concerns, and criticisms based on what we’ve discussed so far? These can be about the EA framework/community, specific ideas or causes, or anything you’d like!",
      "What topics or ideas from the program do you most feel like you don’t understand?",
      "What seems most confusing to you about each idea?",
      "Go back to that topic/idea and see if there are any further readings you can do that would help you address your uncertainties and explore any concerns. Do those readings.",
      "Think of one idea from the program that you found surprising at first, and which you now think more or less makes sense and is important? How could this idea be wrong? What’s the strongest case against it?",
      "Think of one idea from the program that you found surprising at first, and think probably isn’t right, or have reservations about. What’s the strongest case for this idea? What are your key hesitations about that case?"
    ],
    organization: "Centre for Effective Altruism",
    url: "https://centreforeffectivealtruism.notion.site/centreforeffectivealtruism/2875846af31449c58ea5969072692073?v=5da1eebe4c7e4568b0c99ae04df23606"
  }
];

let module: Module = {
  number: 5,
  title: "Coming soon",
  goals: [
  ],
  introduction: [
  ],
  keyConcepts: [
    "Groupthink: a psycological phenomenon that can result in faulty decision-making. Groupthink is a type of thought process that can occur when a group of people make decisions as a collective unit, without critically examining their individual ideas.",
    "Confirmation bias: a type of cognitive bias that involves favoring information that confirms one's preexisting beliefs or hypotheses, which can lead to inaccurate judgments or irrational decisions.",
    "Epistemic humility: the acknowledgement of the limits of one's knowledge and the acceptance that one may be wrong about one's beliefs. It requires a critical self-awareness and a willingness to change one's mind in the face of evidence.",
    "The repugnant conclusion: the idea that the existence of a very large number of individuals with a very low quality of life may be preferable to a much smaller number of individuals with a higher quality of life. It is a common objection to total utilitarianism, which states that the best possible outcome is the one that results in the greatest amount of happiness for the greatest number of people."
  ],
  sections
}

export default module;