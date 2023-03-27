import { Module, Section } from "../types";

let sections: Section[] = [
  {
    type: "text",
    introduction: [
      "Who should we care about? The moral circle is the boundary drawn around those entities in the world deemed worthy of moral consideration Most people's moral circles are relatively small, typically including only their family and friends.",
      "Moral circle expansion is the idea that we should care about a larger group of beings than just those inside of our current moral circle. For example, we might expand our moral circle to include all humans or all sentient beings capable of feeling pain and pleasure.",
      "It is ultimately up to each individual to decide who they should care about. However, many ethicists believe that we should care about a larger group of beings than just those inside of our current moral circle. One reason for this is that our current moral circle is often based on arbitrary factors, such as whether or not a being is a member of our species. If we only care about beings that are members of our species, then we are excluding a large number of sentient beings who are capable of suffering."
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
    title: "Moral progress and cause X",
    person: "William MacAskill",
    organization: "",
    linkTitle: "Moral Progress and Cause X",
    url: "https://www.effectivealtruism.org/articles/moral-progress-and-cause-x",
    minutes: 3
  },
  {
    type: "video",
    title: "The future of humanity",
    url: "https://www.youtube.com/watch?v=LEENEFaVUzU"
  },
  {
    type: "text",
    title: "Longtermism",
    person: "William MacAskill",
    organization: "BBC",
    linkTitle: "What is longtermism?",
    url: "https://www.bbc.com/future/article/20220805-what-is-longtermism-and-why-does-it-matter",
    minutes: 11
  },
  {
    type: "text",
    title: "Arguments against longtermism",
    person: "Michelle Hutchinson",
    organization: "80,000 Hours",
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
    title: "How can we help animals?",
    person: "Kelsey Piper",
    organization: "Vox",
    linkTitle: "Want to help animals? Focus on corporate decisions, not people’s plates.",
    url: "https://www.vox.com/future-perfect/2018/10/31/18026418/vegan-vegetarian-animal-welfare-corporate-advocacy",
    minutes: 9
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
  title: "Moral circle expansion",
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