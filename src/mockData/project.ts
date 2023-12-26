export type ProjectType = {
  title: string;
  subTitle: string;
  summary: {
    client: string;
    industry: string;
    enterpriseTech: string;
    solution: string;
    indicators: Array<{ value: string; name: string }>;
    image: string;
  };
  aboutCompany: string[];
  companyProblem: string[];
  solution: {
    image: string;
    description: string[];
  };
  results: string[];
};

export type ProjectInfoType = {
  projectName: string;
  projectDescription: ProjectType;
};

export const projectsInfo: ProjectInfoType[] = [
  {
    projectName: "sakara",
    projectDescription: {
      title: "Growing a $150m Subscription Business",
      subTitle: "Building Sakara’s Sophisticated Subscription Model",
      summary: {
        client: "Sakara",
        industry: "Food & Beverage, Fitness & Nutrition",
        enterpriseTech:
          "Shopify, Shopify Subscriptions, AVI Kitchen Management",
        solution: "Subscriptions",
        indicators: [
          { value: "233%", name: "Increase in Subscribers" },
          { value: "14,000+", name: "Active Subscribers" },
          { value: "26x", name: "Revenue Growth" },
        ],
        image:
          "https://assets-global.website-files.com/64c170b0cefbfac908efdbde/65369674d4edb735e3f64709_Sakara-lifestyle1.jpg",
      },
      aboutCompany: [
        "Ask anyone chic and health-conscious for their fountain of youth - they’ll answer Sakara.",
        "Founded in 2012 in a New York studio apartment, the meal subscription program was created to make eating healthy easy. Twice a week 100% plant-based, organic meals are delivered to households across America. A-listers swear by the life-changing nutrition plans; Gwyneth Paltrow, Chrisy Teigan, and Kate Hudson to name a few.",
      ],
      companyProblem: [
        "As the company grew so did the subscribers expectations.",
        "New product lines were being developed - a single weekly menu could no longer suffice. Users were asking to pause or modify their plans to accommodate busy travel schedules. Their subscription app couldn’t accommodate substitutions, schedule changes or allow add-on products in the checkout.",
        "This left the customer service team inundated with special requests.",
      ],
      solution: {
        image:
          "https://assets-global.website-files.com/64c170b0cefbfac908efdbde/64c2d228987eb95da0c7e573_Sakara-Screens.jpg",
        description: [
          "Sakara Life came to Diff on the heels of a $4.8 million seed round to expand nationally.",
          "At the time Shopify did not support recurring billing. Diff merged Chargbee’s backend with Shopify’s checkout in 2015. This allowed subscriptions to remain in Chargebee while non-subscription items were bypassed and sent through Shopify.",
          "On the front-end, the user had full control over their program with new account management tools: a scheduling calendar, substitutions, and add-on options.",
          "In 2020, Diff leveraged Shopify’s new subscription API to build the model natively.",
          "As each new commercial kitchen was opened, Diff created back-end integrations to connect to the SMS customer service provider and kitchen management solutions.",
          "Users coast-to-coast can now adapt and substitute the plan to their schedule and dietary needs, while Sakara Life has unlimited flexibility in the front-end and operationally to suit the fast growing business.",
        ],
      },
      results: [
        "The sophisticated self-service subscription model enabled Sakara Life to achieve explosive growth The last three years alone saw 60% year-over-year growth in subscribers, mostly from new users.",
        "Integrating new commercial kitchens on both coasts allows Sakara Life to ship overnight anywhere in America, contributing to their 233% increase in subscribers in the last seven years.",
      ],
    },
  },
];
