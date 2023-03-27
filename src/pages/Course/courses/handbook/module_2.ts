import { Module, Section } from "../types";

let sections: Section[] = [
  {
    title: "Poverty & Our Response to It",
    introduction: [
      "Millions of people still live in poverty and suffer from the consequences of it. Do we have an obligation to them?",
      "Peter Singer, an Australian philosopher, believes that we do have an obligation to help those who are living in poverty. He argues that because we are able to help, and because poverty causes so much suffering, we have a moral obligation to do so. Other people may disagree, arguing that we do not have an obligation to help those who are living in poverty, or that we should only help those who are not able to help themselves.",
      "Ultimately, this is a question that each person has to answer for themselves. But what we know for certain is that there exist many highly cost-effective ways that we can help those who are living in poverty, and that doing so can make a real difference in their lives."
    ],
    person: "Hank Green",
    organization: "CrashCourse",
    linkTitle: "Poverty & Our Response to It",
    type: "video",
    url: "https://www.youtube.com/embed/D5sknLy7Smo",
    minutes: 9
  },
  {
    type: "text",
    title: "Global health",
    introduction: [
      "Global health is the health of populations in the global context; it can be defined as “the area of study, research and practice that prioritizes improving health and achieving equity in health for all people worldwide”. Global health is not merely the absence of disease but a state of complete physical, mental and social well-being. The concept of global health encompasses a wide range of issues, from communicable diseases such as HIV/AIDS and malaria to non-communicable diseases such as obesity and heart disease, and from health care access and quality to environmental health.",
      "There are many ways to measure the health of populations. A common metric is the DALY, or disability-adjusted life year, which quantifies the number of years of life lost to premature death or disability. Other metrics include life expectancy, infant mortality, and maternal mortality. The burden of disease is not evenly distributed across the globe. In general, low- and middle-income countries shoulder a greater burden than high-income countries.",
      "The following article explores the current state of global health and provides an overview of some of the most pressing health challenges facing the world today. It also highlights some of the progress that has been made in recent years in terms of improving health outcomes, as well as the distribution of disease burden across the globe."
    ],
    person: "Esteban Ortiz-Ospina",
    organization: "Our World in Data",
    linkTitle: "Global Health",
    url: "https://ourworldindata.org/health-meta",
    minutes: 19
  },
  {
    type: "text",
    title: "Expected value",
    introduction: [
      "Expected value is equal to the probability of an event multiplied by the value of the event if it occurs.",
      "For cost-effectiveness analyses of different interventions to make a positive difference, expected value calculations are useful for estimating the value of different outcomes. In general, the higher the expected value of an outcome, the more valuable that outcome is. However, expected value calculations has its downsides as well. For example, when dealing with events with extremely low probabilities"
    ],
    organization: "Conceptually",
    linkTitle: "Expected value",
    url: "https://conceptually.org/concepts/expected-value",
    minutes: 6
  },
  {
    type: "text",
    title: "GiveWell's criteria for charities",
    introduction: [
      "GiveWell is a charity evaluator that ranks charities on their effectiveness in doing good.",
      "They use a rigorous process to score and rank charities, which includes looking at how much good a charity is doing with its resources, how well it is run, and how much evidence there is that the charity is effective.",
      "Top charities that have been recommended by GiveWell include the Against Malaria Foundation, the Deworm the World Initiative, and the Schistosomiasis Control Initiative."
    ],
    organization: "GiveWell",
    linkTitle: "Our Criteria",
    url: "https://www.givewell.org/how-we-work/criteria",
    minutes: 9
  },
  {
    type: "text",
    person: "Holden Karnofsky",
    introduction: [
    ],
    organization: "Open Philanthropy",
    title: "Open Philanthropy and risk tolerance",
    linkTitle: "Hits-based Giving",
    url: "https://www.openphilanthropy.org/research/hits-based-giving/",
    minutes: 12
  },
  {
    type: "video",
    title: "Differences in cost-effectiveness",
    introduction: [
      "There are large variations in the cost-effectiveness of different charities. For donors wanting to maximize their impact, this variation in cost-effectiveness means that it is important for donors to carefully consider which charities they donate to in order to ensure that their donations are having the greatest possible impact.",
      "Some charities are much more effective than others in terms of the amount of good they do per dollar donated. For example, some of the top charities recommended by GiveWell are estimated to be about 100 times more effective than the average charity.",
      "There are also arguments for not using cost-effectiveness when picking charities. For example, it is difficult to accurately estimate and compare different charities' impacts. Additionally, some donors may prefer to donate to charities that they have a personal connection to, even if those charities are not as cost-effective as others."
    ],
    person: "Luke Freeman",
    organization: "Giving What We Can",
    linkTitle: "How to find the highest impact charities",
    url: "https://www.youtube.com/embed/rgZssMf18eM",
    minutes: 13
  },
  {
    title: "Fermi estimates",
    introduction: [
      "Fermi estimates are useful for making rough guesses about quantities that are difficult to measure.",
      "Some common examples of quantities that are difficult to measure include the number of people in a city, the number of stars in the sky, or the amount of time it takes for a light bulb to go from full brightness to complete darkness. In all of these cases, it would be very difficult, if not impossible, to come up with an exact number. However, by using a few basic assumptions and some simple math, it is often possible to come up with a reasonable estimate of the quantity in question. This is what is known as a Fermi estimate.",
    ],
    person: "Nagesh Belludi",
    organization: "Right Attitudes",
    type: "text",
    linkTitle: "The Fermi Rule: Better be Approximately Right than Precisely Wrong",
    url: "https://www.rightattitudes.com/2017/08/28/the-fermi-rule-guesstimation/",
    minutes: 5
  },
  {
    type: "text",
    person: "Robert Wiblin",
    introduction: [
      "There is a wide range of diseases causing vast amounts of suffering in the world, some of them are more easily treatable than others. Spending resources on helping people with easily treatable diseases may be a highly cost-effective way to improve global health.",
      "One such easily treatable disease is malaria. Malaria is a parasitic infection that is spread by mosquitoes. It is a major killer of children in Africa and Southeast Asia. However, it can be easily treated with drugs such as chloroquine. Another easily treatable disease is tuberculosis. Tuberculosis is a bacterial infection that mainly affects the lungs, and can be treated relatively cost-effectively using antibiotics.",
      "A more difficult disease to treat is HIV/AIDS. HIV is a virus that attacks the immune system and can lead to AIDS. There is no cure for HIV/AIDS, but there are treatments available that can prolong a person's life."
    ],
    organization: "80,000 Hours",
    title: "Easily preventable or treatable diseases",
    linkTitle: "Easily preventable or treatable diseases",
    url: "https://80000hours.org/problem-profiles/health-in-poor-countries/",
    minutes: 10
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
  title: "Differences in impact",
  goals: [
  ],
  introduction: [
    "Around 700 million people still live in poverty, mostly in low-income countries. Efforts to help them - by policy reform, cash transfers, or provision of health services - can be incredibly effective.",
    "Alongside investigating this issue, we also discuss how much more effective some interventions are than others, and we introduce a simple tool for estimating important figures."
  ],
  keyConcepts: [
    "Differences in impact: it appears that some of our options to help do many times more good than others. People generally don’t appreciate this, and so miss out on significant opportunities to help.",
    "Quality-adjusted life year (QALY): a generic measure of disease burden, including both the quality and the quantity of life lived. It is used in economic evaluation to assess the value of medical interventions.",
    "Expected value: we’re often uncertain about how much something will help. In such circumstances, it may make sense to weigh each of the outcomes by the likelihood that they occur and pick the action that looks best in expectation.",
    "Thinking on the margin: if we’re investing $1, it makes sense to focus on which problem most needs an extra $1, rather than which problem is most important in an absolute sense. Because of diminishing returns, important problems that are very “crowded” may not be the best places to help.",
    "Fermi estimates: when you’re trying to make a decision, it can be useful to make a rough calculation for which option is best. Even if there’s a lot of uncertainty, this can give you a rough answer, and can tell you which things are most important to estimate next."
  ],
  sections
}

export default module;