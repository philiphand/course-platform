import { Module, Section } from "../types";

let sections: Section[] = [
  {
    type: "text",
    title: "Global catastrophic risks",
    introduction: [
      "A global catastrophic risk is an event that could cause serious damage to human well-being on a global scale. Some examples of global catastrophic risks are a large-scale nuclear war, a pandemic, or a devastating asteroid impact.",
      "The potential risks posed by global catastrophic events are difficult to quantify, as they could cause a wide range of damage depending on the event itself and the context in which it occurs. The probability of such an event happening is also difficult to estimate. However, it is clear that the potential consequences of a global catastrophic event could be severe, and it is important to be aware of these risks and plan for them accordingly.",
      "Some ways to reduce the risk of a global catastrophic event include increasing public awareness of these risks, investing in research to better understand them, and preparing for potential consequences. For example, governments could stockpile food and medical supplies in the event of a pandemic, or develop plans for responding to future pandemics."
    ],
    organization: "Probably Good",
    linkTitle: "Global Catastrophic Risks",
    url: "https://www.probablygood.org/global-catastrophic-risks",
    minutes: 8
  },
  {
    type: "video",
    introduction: [
      "Existential risks are a subcategory of global catastrophic risks and are risks that could cause devastating long-term consequences for the future of modern civilization. Existential risks are distinguished from other global catastrophic risks in that they have the potential to cause not only a lot of human suffering but also the extinction of humanity or permanent and drastic destruction of human civilization.",
      "The probability that an existential risk will occur in the next century is higher than many people think, with some estimates as high as a 1 in 6 chance. Experts from various fields have warned that humanity faces a range of existential risks, with some potential causes being nuclear war, biotechnology, and artificial intelligence.",
      "There are a number of potential ways to reduce the risk of existential risks, including developing better biotechnology safeguards, increasing public awareness of the risks, and investing in research and development for existential risk reduction. To date, however, very little funding has been allocated to existential risk reduction."
    ],
    title: "Existential risk",
    linkTitle: "Existential Risk: Managing Extreme Technological Risk",
    url: "https://www.youtube.com/embed/ZZl32AtvGtw",
    minutes: 13
  },
  {
    type: "text",
    title: "Preventing catastrophic pandemics",
    introduction: [
      "There are many different ways to reduce the risk of catastrophic pandemics. Some ways to reduce the risk of catastrophic pandemics are to improve surveillance and detection capabilities, to improve global health security, to improve public health infrastructure, and to improve vaccine and drug development.",
      "Improved surveillance and detection capabilities can help to identify potential outbreaks early and allow for a faster and more effective response.",
      "Improved global health security can help to prevent outbreaks from spreading and becoming a global pandemic.", 
      "Improved public health infrastructure can help to ensure that necessary resources are available in the event of an outbreak.",
      "Improved vaccine and drug development can help to create more effective and more available vaccines and drugs to help combat potential pandemics.",
    ],
    organization: "80,000 Hours",
    linkTitle: "Preventing catastrophic pandemics",
    url: "https://80000hours.org/problem-profiles/preventing-catastrophic-pandemics/",
    minutes: 8
  },
  {
    type: "text",
    title: "Extreme climate change",
    introduction: [
      "Extreme climate change could lead to a catastrophe on a global scale. Climate change is expected to cause a range of global issues in the next decades, but there is uncertainty about the extent and potential consequences of climate change. As a result, it is difficult to say with certainty whether climate change should be classified as an existential risk threatening the long-term future of humanity.",
      "Some of the potential risks associated with climate change include:",
      "- The potential for large-scale, irreversible changes in the climate system, such as the melting of the Greenland and Antarctic ice sheets, that could lead to significant sea level rise.",
      "- The potential for increased frequency and intensity of extreme weather events, such as hurricanes, droughts, and floods, that could cause significant damage and loss of life.",
      "- The potential for large-scale displacement of people and loss of property as a result of climate-related disasters.",
      "- The potential for significant reductions in crop yields and increases in food prices as a result of climate change.",
      "- The potential for increased spread of diseases as a result of changes in climate and weather patterns.",
    ],
    organization: "Founders Pledge",
    linkTitle: "Climate Change Executive Summary",
    url: "https://founderspledge.com/stories/climate-change-executive-summary",
    minutes: 12
  },
  {
    type: "text",
    title: "Nuclear threats",
    introduction: [
      "A global nuclear conflict could cause large-scale loss of life, mass destruction, and long-term environmental damage. The probability of a nuclear war is uncertain and has been the subject of much debate. The main factors contributing to the risk of a nuclear war are the presence of nuclear weapons, the political situation, and the state of relations between countries.",
      "The probability of a nuclear conflict is particularly high during times of tension and conflict, such as during a war or a period of political instability. There is also a risk of a nuclear war happening by accident, for example, if a nuclear weapon is mishandled or if there is a misunderstanding between countries.",
      "The consequences of a nuclear conflict would be devastating. A large-scale nuclear conflict could cause millions deaths from the blast, heat, and radiation from nuclear weapons. The environment could also be damaged by nuclear fallout, which could cause long-term health problems and disrupt the food supply. There is also a chance of extinction"
    ],
    organization: "80,000 Hours",
    linkTitle: "Risk of nuclear war",
    url: "https://80000hours.org/problem-profiles/nuclear-security/",
    minutes: 9
  },
  {
    type: "text",
    title: "Risks from artificial intelligence",
    introduction: [
      "Artificial intelligence poses many catastrophic risks, but the potential benefits are also massive. AI could boost economic growth, make life easier for people, and help us solve some of the world’s most pressing problems.",
      "AI can help us make better decisions by providing us with information that is relevant to our situation and by analyzing data to identify patterns and trends. Another benefit of AI is the automation of repetitive tasks, which can free up time for us to focus on other things.  AI can also help us solve complex problems by finding solutions that would be impossible for the human brain to solve.",
      "Aligning AI with human values and goals is a difficult task, and it’s not clear how it can be achieved. This is known as the AI alignment problem, and it’s one of the biggest challenges facing the development of artificial intelligence. Professor Stephen Hawking has warned that AI has the potential to be “either the best, or the worst thing, ever to happen to humanity.” Experts in the field are divided on how to solve the AI alignment problem or if it is even possible, but many agree that it is one of the most important global priorities of our time."
    ],
    person: "Max Tegmark",
    organization: "Future of Life Institute",
    linkTitle: "Benefits & risks of artificial intelligence",
    url: "https://futureoflife.org/background/benefits-risks-of-artificial-intelligence/",
    minutes: 11
  },
  {
    title: "Week 3 discussion questions",
    type: "reflection",
    questions: [
      "With all these risks we are facing and the rapid technological development of our time, do you believe we are currently living in a “hinge of history” where our actions have an unprecedented potential to influence the future direction of humanity?",
      "Do you believe global catastrophic risks are neglected by society?",
      "What are the best arguments that we shouldn’t be too worried about global catastrophic risks?",
      "Do you think there are other global catastrophic risks that we haven’t discussed?",
      "Is it wrong to focus on global catastrophic risk reduction (which has a relatively low chance of making a difference) when we know that we can help people in need today with a higher certainty of making a positive difference?",
      "From the standpoint of catastrophic risks, what factors might make biological weapons more concerning than nuclear and chemical weapons? What factors might make them less concerning?",
      "Were there any readings or arguments within the readings that felt like they presented the case for taking AI safety really clearly? Could you summarize the argument(s)?"
    ],
    organization: "Centre for Effective Altruism",
    url: "https://centreforeffectivealtruism.notion.site/centreforeffectivealtruism/2875846af31449c58ea5969072692073?v=5da1eebe4c7e4568b0c99ae04df23606"
  }
];

let module: Module = {
  number: 3,
  title: "Global catastrophic risks",
  goals: [
  ],
  introduction: [
  ],
  keyConcepts: [
  ],
  sections
}

export default module;