import { Module, Section } from "../types";

let sections: Section[] = [
  {
    title: "Is EA an ideology or not?",
    introduction: [
      `Effective Altruism (EA) is often seen as a set of principles or beliefs that guide altruistic actions. However, this article suggests that it is more accurately framed as a question: "How can I do the most good, with the resources available to me?"`,
      `By viewing EA in this light, we can better understand its purpose and implications. We will explore three key takeaways from this reframing: 1) Maybe we should avoid calling ourselves "effective altruists" as it may come across as a truth claim, 2) Recognize that our suggested actions and causes are best guesses, not core ideas, and 3) Embrace the opportunity to learn from others and be open to changing our minds.`,
      "By understanding EA as a question rather than a rigid set of beliefs, we can more effectively engage with others and remain open to new ideas that help us do the most good in the world."
    ],
    person: "Helen",
    linkTitle: "Effective Altruism is a Question (not an ideology)",
    type: "text",
    minutes: 4,
    url: "https://forum.effectivealtruism.org/posts/FpjQMYQmS3rWewZ83/effective-altruism-is-a-question-not-an-ideology"
  },
  {
    type: "text",
    title: "FAQ and common objections to EA",
    linkTitle: "Frequently Asked Questions and Common Objections",
    introduction: [
      "This article addresses common objections to effective altruism and provides comprehensive responses to each objection. It covers topics such as the relationship between effective altruism and earning to give, utilitarianism, systemic change, resource allocation, personal demands, charity effectiveness, and community diversity.",
      "The article emphasizes that effective altruism is about using reason and evidence to have the greatest impact possible, and it encourages open-mindedness and a willingness to change opinions based on new information.",
      "By engaging with these objections, the article aims to foster a more nuanced understanding of effective altruism and its goals."
    ],
    organization: "Centre for Effective Altruism",
    minutes: 16,
    url: "https://www.effectivealtruism.org/faqs-criticism-objections"
  },
  {
    type: "text",
    title: `Is "effective altruism" an appropriate name?`,
    linkTitle: `Some quick notes on "effective altruism"`,
    introduction: [
      `This article raises concerns about the branding of the "Effective Altruism" (EA) community, arguing that the name may be perceived as self-congratulatory and arrogant by some individuals. The author suggests that the term "altruism" can imply moral superiority, while "effective" may be seen as an arrogant claim among professionals in relevant areas.`,
      "Furthermore, the EA label is often perceived as a strong identity, which may discourage some people from engaging with the community. The author also mentions that the name is reminiscent of a social movement rather than a research or policy project and may not translate well into other languages.",
      "The article raises questions about potential implications of these concerns, such as de-emphasizing the EA brand or rebranding the community to focus more on the specific ideas and causes."
    ],
    person: "Jonas Vollmer",
    minutes: 4,
    url: "https://forum.effectivealtruism.org/posts/h566GT4ECfJAB38af/some-quick-notes-on-effective-altruism"
  },
  {
    type: "text",
    title: "Is maximizing impact the only goal of EA?",
    linkTitle: "EA is about maximization, and maximization is perilous",
    introduction: [
      `In this thought-provoking article, the author reflects on the core ideas of effective altruism (EA) and the potential perils of taking these ideas too far. While the central principle of EA, "do the most good possible," is an intriguing and powerful concept, it can be problematic when pursued to the extreme. The author argues that maximizing a single value (X) can lead to unintended consequences and issues, especially when the community doesn't have a clear or universally agreed-upon definition of what "good" is.`,
      "The article explores various potential pitfalls of embracing the core ideas of EA without limits, such as a divided community, low-integrity behavior, and potential harm to personal relationships. It acknowledges that while the EA community largely avoids these issues, it is crucial for EAs to maintain a sense of pluralism and moderation to ensure the movement's continued success.",
      "This nuanced perspective on effective altruism invites readers to reflect on the balance between maximizing good and maintaining a diverse, cooperative, and high-integrity community."
    ],
    minutes: 8,
    person: "Holden Karnofsky",
    url: "https://forum.effectivealtruism.org/posts/T975ydo3mx8onH3iS/ea-is-about-maximization-and-maximization-is-perilous"
  },
  {
    type: "text",
    title: "Doing harm for the greater good",
    linkTitle: "Is it ever OK to take a harmful job in order to do more good?",
    introduction: [
      `This article explores the ethical considerations surrounding career choices that involve significant negative impact, such as working in morally questionable sectors or taking actions that cause harm. 80,000 Hours, the organization behind the article, analyzes these situations using moral philosophy and applies the results to common options like finance, law, and the oil industry. The article assumes that the reader is capable of pursuing a harmful career and focuses on the question, "Is it right to take it?"`,
      "The authors argue that in most cases, it is a mistake to pursue a career with serious harmful effects, even if the overall benefits seem greater than the harms. They also caution against taking actions within a job that seem morally wrong, even if they appear to produce more good overall. The article outlines five reasons to avoid careers with significant negative impact, discusses when it might be justified to take such a job, and provides advice on how to assess individual cases."
    ],
    minutes: 29,
    organization: "80,000 Hours",
    url: "https://80000hours.org/articles/harmful-career/"
  },
  {
    type: "text",
    title: "List of potential priority cause areas",
    linkTitle: "What are the most pressing world problems?",
    organization: "80,000 Hours",
    introduction: [
      "In this article, the author outlines a comprehensive list of the world's most pressing problems, aiming to identify issues where each additional person can have the most significant positive impact. The focus is on neglected, solvable problems that are unusually large in scale, including existential risks.",
      "The article includes an extensive range of pressing problems, along with brief descriptions and links to learn more about each issue and ways to help tackle them.",
      "Please dive into some of the problem areas and reflect on which you believe to be the most pressing."
    ],
    url: "https://80000hours.org/problem-profiles/",
    minutes: 7
  }
];

let module: Module = {
  number: 6,
  title: "Critiques and implications of EA",
  goals: [
    "Understand the debate about whether Effective Altruism (EA) is an ideology or a question.",
    "Learn about common objections to EA and how the community responds to them.",
    "Reflect on the potential issues with the branding and name of the EA community.",
    "Consider the perils of maximizing impact as the only goal of EA.",
    "Explore ethical considerations surrounding career choices with harmful aspects.",
    "Gain insight into a list of potential priority cause areas for tackling pressing world problems."
  ],
  introduction: [
    "This module discusses critiques and implications of Effective Altruism (EA), offering different perspectives on the movement and its goals. We will examine the debate about whether EA is an ideology or a question and learn about common objections to the movement. The module also explores potential issues with the branding and name of the EA community, the perils of prioritizing impact maximization, ethical considerations of career choices with harmful aspects, and a list of potential priority cause areas."
  ],
  keyConcepts: [
    `The idea that Effective Altruism should be framed as the question: "how can I do the most good, with the resources available to me?" rather than as a set of rigid principles or beliefs.`,
    "Frequent criticisms or concerns about the EA movement: for example, its relationship to earning to give, utilitarianism, systemic change, resource allocation, and personal demands.",
    "Critiques about the name 'Effective Altruism': this name may be perceived as self-congratulatory or arrogant, and the implications of these concerns for the EA community.",
    "The potential negative consequences of prioritizing impact maximization as the only goal of EA: for example, divided communities, low-integrity behavior, and harm to personal relationships.",
    "Considerations surrounding career choices that involve significant negative impact or harm: and when it might be justified to pursue such careers.",
    "A list of the most pressing world problems: we will aim to identify issues where each additional person can have the most significant positive impact.",
  ],
  "sections": sections
  }

export default module;