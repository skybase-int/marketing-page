import type { FAQItem } from './types';

export const skyStars: FAQItem[] = [
  {
    question: 'What are Sky Stars?',
    answer: `Sky Stars are autonomous and independent decentralized projects within the Sky Ecosystem, designed to enable focused, fast-moving innovation and development. They are created by their founders, who define the strategy and operating processes of the Star while also specifying the business logic and innovation goals for the Star. The Sky Ecosystem acts as a decentralized platform that provides the governance tools and infrastructure for Star growth and operation.

Each Star has access to Sky Primitives, the modular building blocks behind all Star interactions with Sky and the [Sky Atlas](https://sky-atlas.powerhouse.io/), and is free to have its own governance processes, treasury, community and governance token. The operations of each Star is governed through its Star Artifact—a document that contains all rules, processes, parameters, and information relevant to the Star. The system is similar to the overall governance framework of Sky, which is based on the Sky Atlas (also an Artifact, but much larger). All Star Artifacts live inside the Sky Atlas as subcomponents.`,
    categories: ['Sky Stars']
  },
  {
    question: 'How does Star governance work?',
    answer:
      'Each Star operates through its own governance system based on its Star Artifact. This system is similar to the overall governance framework of Sky, which is based on the [Sky Atlas](https://sky-atlas.powerhouse.io/). All Star Artifacts live inside the Sky Atlas as subcomponents. See the [Spark Artifact](https://sky-atlas.powerhouse.io/A.AG1_Spark/1c1f2ff0-8d73-8157-a4b8-f568e2f09fe3%7C7896ed332638) as an example.',
    categories: ['Sky Stars']
  },
  {
    question: 'What is a Star Artifact?',
    answer: `A Star's Artifact is the document that contains all rules, processes, parameters, and information relevant to that Star. The Star Artifact system is similar to the overall governance framework of Sky, which is based on the [Sky Atlas](https://sky-atlas.powerhouse.io/) (also an Artifact, but much larger). All Star Artifacts live inside the Sky Atlas as subcomponents. See the [Spark Artifact](https://sky-atlas.powerhouse.io/A.AG1_Spark/1c1f2ff0-8d73-8157-a4b8-f568e2f09fe3%7C7896ed332638) as an example.

Some Star Artifact documents are high-level, focusing on vision, principles and community culture, while others are extremely detailed, focusing on management of specific ongoing tasks or relationships.`,
    categories: ['Sky Stars']
  },
  {
    question: 'What are Star tokens?',
    answer:
      'A Star might opt to have its own governance processes, governance token, treasury and community as defined in its Artifact. Based on the rules enforced by the Sky Atlas, any Star governance tokens would have strong security practices, economic safeguards and guardrails placed through their tokenomics and enforced by their own Artifacts and the [Sky Atlas](https://sky-atlas.powerhouse.io/).',
    categories: ['Sky Stars']
  },
  {
    question: 'How do Stars benefit the Sky Ecosystem?',
    answer:
      'Sky Stars are autonomous and independent decentralized projects within the Sky Ecosystem. They operate within the Sky Agent Framework, which is designed to help grow the Sky Ecosystem.',
    categories: ['Sky Stars']
  },
  {
    question: 'What is Spark?',
    answer:
      '[Spark.fi](https://spark.fi/), the very first Star in the Sky Ecosystem, is focused on building on USDS in the Ethereum and adjacent DeFi ecosystem. It is a gateway to the non-custodial Sky Protocol and, like all Sky Stars, an independent decentralized project. Spark offers users—especially USDS holders—products around saving, borrowing and liquidity provision. More than just another DeFi app, it is the core liquidity and yield infrastructure layer for onchain finance.',
    categories: ['Sky Stars']
  },
  {
    question: 'What is the SPK token?',
    answer:
      'SPK is the native governance and staking token of [Spark.fi](https://spark.fi/). Designed with a long-term vision for sustainability, decentralization and ecosystem alignment, SPK enables protocol governance, protocol security via staking, and reward access to participants. For more information on Spark Governance, please see the [Spark Artifact](https://sky-atlas.powerhouse.io/A.AG1_Spark/1c1f2ff0-8d73-8157-a4b8-f568e2f09fe3%7C7896ed332638).',
    categories: ['Sky Stars']
  },
  {
    question: 'What is the Spark Liquidity Layer',
    answer: `The Spark Liquidity Layer directly and automatically provides USDS, sUSDS and USDC liquidity across networks and DeFi markets. This enables users to access the Sky Savings Rate on their preferred network using sUSDS. Additionally, it allows Spark to automate liquidity provision into DeFi markets to optimize yield. Please see the [Spark Liquidity Layer documentation](https://docs.spark.fi/user-guides/spark-liquidity-layer) for more information.

For more information, see [Spark Documentation](https://docs.spark.fi/user-guides/spark-liquidity-layer).`,
    categories: ['Sky Stars']
  },
  {
    question: 'Where can find the Spark Analytics Dashboard?',
    answer:
      'View the most comprehensive information and data about Spark on the [Spark Analytics Dashboard](https://spark.blockanalitica.com/).',
    categories: ['Sky Stars']
  }
];
