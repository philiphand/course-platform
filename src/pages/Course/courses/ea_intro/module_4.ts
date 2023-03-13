import { Module, Section } from "../types";

let sections: Section[] = [
  {
    type: "text",
    introduction: [
      "How can we decide who to help? Nobody knows for sure. A concept in ethics known as moral uncertainty refers to situations where we are uncertain about what the morally right course of action is, despite having relevant information or beliefs about the situation. In other words, moral uncertainty arises when there is reasonable disagreement about what the morally correct thing to do is.",
      "Dealing with moral uncertainty is hard, and we don't know the best way to go about tackling it. The following article explains how Open Philanthropy approaches the question of “Who deserves empathy and moral concern?”."
    ],
    title: "Radical empathy",
    person: "Holden Karnofsky",
    organization: "Open Philanthropy",
    linkTitle: "Radical Empathy",
    url: "https://www.openphilanthropy.org/research/radical-empathy/",
    minutes: 8
  },
  {
    type: "text",
    title: "Longtermism",
    person: "Max Roser",
    organization: "Our World in Data",
    linkTitle: "Longtermism: The future is vast – what does this mean for our own life?",
    url: "https://ourworldindata.org/longtermism",
    minutes: 15
  },
  {
    type: "text",
    title: "Arguments against longtermism",
    person: "Michelle Hutchinson",
    organization: "80.000 Hours",
    linkTitle: "Why I find longtermism hard, and what keeps me motivated",
    url: "https://80000hours.org/2021/02/why-i-find-longtermism-hard/",
    minutes: 10
  },
  {
    type: "video",
    title: "Animal ethics",
    url: "https://www.youtube.com/watch?v=y3-BX-jN_Ac"
  },
  {
    type: "text",
    title: "Animal welfare as a cause area",
    organization: "Founders Pledge",
    linkTitle: "Animal Welfare Cause Report",
    url: "https://founderspledge.com/stories/animal-welfare-cause-report",
    minutes: 15
  },
  {
    type: "text",
    title: "Population ethics",
    minutes: 10,
    organization: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Population_ethics",
    linkTitle: "Population Ethics",
    introduction: [
      "Population ethics is a branch of ethics that deals with ethical questions related to the size, composition, and distribution of human populations. It seeks to answer questions about how to allocate resources and distribute goods and services fairly among members of a population, how to weigh the interests of current and future generations, and how to balance competing ethical concerns such as individual liberty and the common good.",
      "One of the fundamental questions in population ethics is how to measure the value of different outcomes for different people or groups. Some theories focus on maximizing overall happiness or well-being (utilitarianism), while others emphasize the importance of individual rights and autonomy (deontology), or the importance of fairness and equality (egalitarianism).",
      "Population ethics also deals with questions like how to balance the interests of present and future generations. For example, some argue that we have an obligation to preserve the environment and natural resources for future generations, while others argue that our primary obligation is to maximize the well-being of the current generation.",
      "Overall, population ethics is a complex and controversial field, with different theories and approaches leading to very different policy recommendations and ethical conclusions."
    ]
  },
  {
    title: "Week 4 discussion questions",
    type: "reflection",
    questions: [
      "Do you think future generations are discriminated against?",
      "How good do you think the future will be? What do you expect to happen in the next 20, 100, or 300 years? What technologies do you think might be developed? What problems do you think we might be able to solve?",
      "What are you afraid that the future might bring? What bad things do you expect to happen in the next 100, 200, or 300 years? What new problems might we face?",
      "What do you think about the arguments about how it seems like the future could easily get very wild? For example, what are your thoughts about the discussion around digital minds, self-duplication, or galactic colonization?",
      "What do you think is the most tractable way in which we can influence the far future? How tractable is it?",
      "What are the best arguments against longtermism?",
      "Is ‘moral circle expansion’ a good description of what has happened in the past?",
      "Why have we historically failed to recognise the moral importance of others?",
      "How likely do you think it is that we currently do not show moral concern to beings that deserve it? Why?",
      "Do you think farmed animals matter morally?",
      "Do you think it could even make sense to donate to help farmed animals, instead of donating to help people in extreme poverty, say if the animals are much easier to help?",
      "Do you agree that we ought to be open to ‘strange’ arguments about which beings are of moral concern?"
    ],
    organization: "Centre for Effective Altruism",
    url: "https://centreforeffectivealtruism.notion.site/centreforeffectivealtruism/2875846af31449c58ea5969072692073?v=5da1eebe4c7e4568b0c99ae04df23606"
  }
]

let module: Module = {
  number: 4,
  title: "Moral philosophy",
  goals: [
  ],
  introduction: [
  ],
  keyConcepts: [
    "Moral uncertainty: the state of not being sure whether something is morally right or wrong, it can also refer to the belief that there is no morally right or wrong answer to a certain question.",
    "Impartiality: helping those that need it the most, only discounting people according to location, time, and species if those factors are in fact morally relevant.",
    "Speciesism: unjustified discrimination of individuals on the basis of their species membership. Speciesism is similar to racism and sexism, in that it involves discrimination against individuals on the basis of morally irrelevant characteristics.",
    "The importance (and difficulty) of considering unusual ideas: Society’s consensus has been wrong about many things over history (e.g. the sun circling the Earth, the morality of slavery). In order to avoid making similar mistakes, we need to be open to considering unusual ideas and moral positions, while still thinking critically about the issues and acting cooperatively with others."
  ],
  sections
}

export default module;