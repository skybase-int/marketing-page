type Category =
  | 'All FAQs'
  | 'Seal Engine'
  | 'Crypto (General)'
  | 'Sky Protocol & Ecosystem'
  | 'Sky Tokens'
  | 'Upgrade & Trade'
  | 'Sky Savings Rate'
  | 'Sky Token Rewards';

type FAQItem = {
  question: string;
  answer: string;
  categories: Category[];
};

const cryptoGeneral: FAQItem[] = [
  {
    question: 'What is cryptocurrency?',
    answer: `Cryptocurrency, also referred to as “crypto,” is a type of digital currency that uses cryptography to help improve the security and overall user control of associated transactions. Cryptography is like a secret code that embraces user pseudonymity while ensuring authentic and irreversible transactions.

There are thousands of cryptocurrencies in circulation, and they vary in purpose, functionality and value. In fact, many experience price volatility over very short periods of time. However, certain cryptocurrencies called stablecoins generally fluctuate to lesser degrees, as they are designed to attempt to maintain a stable value. 

Stablecoins are typically pegged to the value of a fiat, or government-issued, currency, such as the U.S, dollar or the euro, and are backed either by fiat currencies, commodities (real-world assets) or other cryptocurrencies held in reserves, the presence of which is intended to make them more stable mediums of exchange

For more details on this and other risks associated with cryptocurrencies, please review the User Risk Documentation. `,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are stablecoins, and how do they differ from other types of cryptocurrencies?',
    answer: `Stablecoins are cryptocurrencies designed to attempt to maintain a stable value. They are typically pegged to the value of a fiat (government-issued) currency, such as the U.S. dollar or the euro. Stablecoins are backed either by fiat currencies, commodities (real-world assets) or other cryptocurrencies held in reserves, the presence of which is intended to make them more stable mediums of exchange. 

For details on the risks associated with soft-pegged stablecoins, please review the User Risk Documentation.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a blockchain?',
    answer: `Crypto transactions occur on networks (blockchains) powered by blockchain technology, which transcend borders. Generally, blockchain transactions are immutable, meaning that once executed, they are irreversible. While Bitcoin and Ethereum are the most well known blockchain networks, there are many others.

Blockchains are decentralised accounting ledgers, of which there are two types—public and private. Private blockchains, also called “trusted” or "permissioned” blockchains, are designed to meet the specific needs of a project or organisation, therefore they are closed to all but authorised users. Public blockchains are just that—open and accessible by all.

Like traditional accounting ledgers, blockchain networks keep a record of transactions; unlike traditional ledgers, blockchain networks are open, meaning that anyone, anywhere can view blockchain public transactions anytime by using a blockchain explorer. Blockchain explorers are pieces of software that allow anyone to see blockchain data and activity that is public.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a blockchain transaction (gas) fee?',
    answer: `Every time you engage in transactions with your digital funds (*e.g.*, buy, sell, trade or transfer them) you will likely pay a transaction fee— called a gas fee—for using the blockchain network. That fee is not controlled, imposed, or received by Sky.money; it is calculated based on current network demand and the amount of gas (*i.e.*, units of compute resources) required to process your transaction. On the Ethereum blockchain, gas fees are paid in ETH, the native currency of the blockchain. So, be sure to have ETH in your wallet anytime you transact using the Sky Protocol.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are smart contracts?',
    answer: `Smart contracts are agreements written in computer code and deployed to a blockchain, where they self-execute automatically and programmatically when called upon. No centralised entity or intermediary is needed to complete the steps laid out in those agreements. Smart contacts are used in various sectors, but they are key to the decentralised finance (DeFi) sector, as they are used to execute everything from simple transfers and trades to the governance of decentralised ecosystems in a peer-to-peer or peer-to-contract manner.

Smart contracts work a lot like vending machines. A vending machine automatically provides a product once you feed it a coin and choose the product you want. The machine does not call someone at the vending machine company to get permission or further instructions. Similarly, a smart contract automatically provides a specific output (X) when prompted by a specific input (Y). For example, a smart contract deployed to serve an ecosystem can send money to contractors (X) on the first of every month (Y), without any help or interference from a payroll manager, bank or any financial institution. 

While most smart contracts are open-source (transparent), most are immutable in theory, meaning no one can change them once they're deployed. In DeFi ecosystems, including the Sky ecosystem, changes and upgrades to a project's smart contracts can only be made through a system of decentralised community governance and onchain voting processes.

The importance of smart contracts to decentralised governance can't be understated, as the contracts related to voting enable more efficient and more effective technical, economic and administrative decision-making by a global community of ecosystem participants.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is decentralised finance?',
    answer: `Decentralised finance (DeFi) is a sector of the cryptocurrency economy that consists of open and permissionless financial applications, products, and services built on and accessed via blockchains. The term "permissionless" is used in DeFi to mean that users do not need permission to join an open blockchain network, and are in complete and direct control of their financial activities. Open speaks to the complete transparency of public blockchains. 

DeFi offers users fast, low-cost and borderless transactions as a result of being disintermediated (in direct control of their activities). 

Finally, DeFi offerings are typically managed by decentralised ecosystems that operate with the help of rules and agreements embedded in the smart contracts. Smart contracts are written in computer code and deployed to a blockchain. Ecosystem projects are controlled not by one person or entity, but by a global community of ecosystem participants.`,
    categories: ['Crypto (General)']
  },
  // TODO: THIS ONE MAY NEED REVISION
  {
    question: 'What is a crypto wallet, and how do I get one?',
    answer: `A crypto wallet is software that enables you to easily view a list of your digital funds, manage them, and help safeguard them. Note that in the case of non-custodial wallets, your funds are only *visible* in the wallet—not stored there. Your non-custodial wallet holds the private keys needed to sign crypto transactions, and gives you full control over these private keys, which are essential for accessing and managing your crypto. Unlike custodial wallets where a third party holds the private keys, non-custodial wallets allow users to be the sole custodian of their keys. This means that only the user has the ability to sign transactions, making it more secure and private; however, it also means that if a user loses their private key or recovery phrase, they may permanently lose access to their funds. All crypto funds are stored on a public blockchain and can be accessed via your private keys. 

Non-custodial wallets can be software-based, like mobile apps, or hardware devices designed for enhanced security. There are several types of crypto wallets and no limit to the number of wallets you can own. Two popular software-based wallets are [Metamask](https://metamask.io/) and [Rainbow](https://rainbow.me/). 

Sky Balances is not a crypto wallet, but rather a non-custodial tool that displays your Sky-related asset balances by receiving information from the non-custodial crypto wallet that you connect to Sky.money to access the Sky Protocol.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How do crypto wallets work?',
    answer: `Crypto wallets use a pair of cryptographic keys—one public, the other private. These are essential components of cryptography used in crypto wallets for security and managing digital funds. They work together as a key pair known as public-key cryptography. 

A private key is a randomly generated string of letters and numbers which acts as a password or secret code. It is known only to the user and should be kept secure and confidential to ensure that only the user has access to and can control any associated funds. The private key is used to sign transactions. For example, when a user wants to send crypto or access their funds, they will use the private key to authorise the transaction. 

A public key is derived from the private key using a mathematical algorithm. It is a string of characters that can be shared openly without compromising security. The public key is used to generate wallet addresses and to encrypt data. For example, when someone wants to send digital funds to a user, they will use the user's public key (or the associated wallet address). 

Typically, when initialising a new non-custodial digital wallet, the wallet software generates a “seed phrase,” which is a sequence of 12 or 24 seemingly random words used to generate the public and private keys associated with them. The seed phrase can be used to recover the public and private keys, and should therefore be stored somewhere safe and never shared with anyone.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How do I use a non-custodial digital wallet to make a transaction?',
    answer: `Once you've set up your non-custodial digital wallet and have your public and private keys, you can use it to manage (send and receive) your digital funds on the blockchain. Every time you transact, your wallet requires you to digitally sign the transaction with your private key. Signing when prompted demonstrates that you acknowledge your action.

Signing is a simple but critical part of the process, as your digital signature approves the transaction, ensuring that only you have control of your crypto. Some actions might require multiple wallet signatures to authorise the activity in question. For example, to complete a trade on the Sky Protocol, you would first need to confirm that you allow the app to access the token you want to trade in your wallet (one signature), and then authorise the actual trade (another signature).`,
    categories: ['Crypto (General)']
  }
];

const skyEcosystem: FAQItem[] = [
  {
    question: 'What is Sky.money, and what can I do with it?',
    answer: `Sky.money is one of the many non-custodial gateways to the permissionless Sky Protocol, a decentralised protocol developed around the USDS stablecoin. Sky.money is a front end that provides access to the app without holding your funds or acting as an intermediary. It provides eligible users with access to Sky Protocol features, including Sky tokens (USDS, SKY, DAI, MKR), the Sky Savings Rate (SSR), Sky Token Rewards (STRs), and eventually Activation Token Rewards and SkyLink. With the Sky Protocol, you can save and access rewards without giving up control of your supplied funds. 

Eligible Sky.money users can access the Sky Protocol to do the following: 

* **Trade.** Directly trade popular tokens for Sky ecosystem tokens using permissionless and non-custodial pools.  
  * Trade USDC, USDT, ETH and SKY for USDS, and vice versa. With USDS, you can access Sky Token Rewards and access the Sky Savings Rate to accumulate more USDS.  
  * Trade USDC, USDT, ETH and USDS for SKY, and vice versa. Eventually, SKY will be used to get Activation Token Rewards and to vote on changes and additions to the Protocol. 


* **Upgrade.** Upgrade DAI to USDS 1:1, and MKR to the SKY governance token at a rate of 1:24,000. USDS and SKY can also be converted back to DAI and MKR. While upgrading is optional, doing so enables you to take advantage of the many new Sky ecosystem features.    
    
* **Access Rewards.** Use USDS to access Sky Token Rewards (STRs) over time. No minimum USDS supply amount is required.   
  * The amount of STRs you receive is calculated based on your share of the entire pool of USDS tokens supplied to the Sky Token Rewards module by all participants, not on the amount of tokens you supply. This share, and consequently the rate of STR rewards, can fluctuate as the total pool size changes over time. Sky.money does not control the issuance, determination, or distribution of these rewards.  
  * The USDS stablecoin, as well as the rewards received, are supplied to a non-custodial smart contract that represents the USDS pool of funds. This means that no intermediary takes custody over your funds. 


* **Save.** Place USDS into the Sky Savings Rate (SSR) module to access the SSR and accumulate additional USDS over time. No minimum supply amount is required.   
  * When you supply USDS to the SSR module, you receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the SSR module and any value accrued to your position.   
  * The Sky Protocol dynamically adds USDS tokens to the pool every few seconds, in accordance with the SSR. As those tokens auto-accumulate in the pool over time, the value of the sUSDS you hold may gradually increase. So, when you choose to redeem your sUSDS for USDS—which you can do anytime—the total USDS you receive will equal the amount originally supplied, plus any rewards earned. 

With Sky.money, you always remain in control of your supplied funds.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Protocol?',
    answer: `The Sky Protocol is a decentralised protocol developed around the USDS stablecoin. It is managed by Sky ecosystem governance. The Sky Protocol features Sky tokens (USDS, SKY, DAI, MKR), the Sky Savings Rate, Sky Token Rewards and, soon, Activation Token Rewards and SkyLink.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Why use the Sky Protocol?',
    answer: `Here are the top five reasons users choose the powerful features of the decentralised Sky Protocol:

1. The Sky Protocol is easy to access and explore via Sky.money, a non-custodial gateway to the Sky Protocol.   
2. The Sky Protocol was built from the core module of the Maker Protocol, one of the largest and most popular decentralised finance protocols in the world.   
3. Transparent governance of the Sky ecosystem aims to facilitate continual improvements of the Sky Protocol, regular independent security audits, and ongoing monitoring of the financial stability of USDS.  
4. You remain in full control of your supplied funds.  
5. Fast-moving protocol innovation is driven in the ecosystem by independent Sky Stars, such as Spark.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Has the Sky Protocol undergone a security audit?',
    answer: `The decentralised Sky Protocol code is open source and has undergone extensive audits by highly regarded auditing firms within the industry. For more information, see the User Risk Documentation.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky ecosystem?',
    answer: `The Sky ecosystem consists of the community and projects that support the decentralised Sky Protocol. The ecosystem's community participates in a transparent system of governance that uses a decentralised onchain voting process supported by two governance tokens, SKY and MKR. The Sky ecosystem also includes Sky Stars—independent decentralised projects designed to enable focused, fast-moving innovation and growth.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Why rebrand Maker to the Sky ecosystem?',
    answer: `MakerDAO began in 2014, as a small community-governed project responsible for developing the Maker Protocol on the Ethereum blockchain. Maker quickly grew to find success with the development of its DAI stablecoin. DAI enabled the Maker Protocol to become the first decentralised finance (DeFi) liquidity protocol with a product-market fit. Maker Protocol grew to such an extent that by 2021, effective governance by its monolithic community proved challenging. Maker's decentralised governance processes, especially, had become difficult to manage. 

While the complexity of Maker had been necessary to pursue the best opportunities in the market, the community felt that there existed scaling issues that ultimately held the project back. The new decentralised Sky ecosystem, launched in 2024, has taken the former Maker decentralised protocol to the next level with new technology that focuses on resilience and simplicity while remaining non-custodial. In short, the Sky Protocol presents token upgrades, tools and organisational restructuring, including but not limited to:

* The introduction of new products, tools and powerful token upgrades, including the USDS stablecoin, that enable users to save and access rewards without giving up control through non-custodial savings. USDS is the upgraded version of DAI.  
* A DeFi front end website called Sky.money, which provides a user interface that enables eligible users to access the decentralised Sky Protocol. Sky.money is a non-custodial gateway to the Sky Protocol. What results is a clearly defined relationship between the Sky ecosystem, the Sky Protocol, and Sky.money.  
* Sky Stars—independent, decentralised projects within the larger Sky ecosystem.

Sky aims to create more alignment between product users, governance participants, and the ecosystem as a whole.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'How does the rebrand affect the Maker community and ecosystem?',
    answer: `The rebrand of MakerDAO to the Sky ecosystem has no direct and immediate effect on those who've built on the Maker Protocol or those who hold or use the Maker Protocol's legacy tokens, DAI and MKR. The decentralised Sky ecosystem still maintains, and will continue to maintain (unless the governance community decides otherwise) DAI and MKR. Users can continue to hold DAI, use DAI, maintain existing DAI Vaults and benefit from the DAI Savings Rate (DSR) as they always have, and projects that have integrated DAI can continue to operate their frontends. Importantly, it also means that those who used MKR to vote on MakerDAO proposals can continue to use their MKR to vote on all Sky ecosystem decentralised governance proposals. Eventually, users will be able to also use SKY to vote. While both tokens have upgraded Sky versions—the USDS stablecoin and the SKY governance token, respectively—a user's decision to upgrade their tokens is optional. 

The Sky ecosystem has much to offer users, including but not limited to:

* The introduction of new products, tools and powerful token upgrades, including the USDS stablecoin, that enable users to save and access rewards without giving up control through non-custodial savings. USDS is the upgraded version of DAI.  
* A DeFi front end website app called Sky.money, which provides a user interface that enables eligible users to access the decentralised Sky Protocol. Sky.money is a non-custodial gateway to the Sky Protocol. What results is a A clearly defined relationship between the Sky ecosystem, the Sky Protocol, and Sky.money.  
* Sky Stars—independent, smaller decentralised projects within the larger Sky ecosystem.

The Sky ecosystem aims to create more alignment between product users, governance participants, and the ecosystem as a whole.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Sky ecosystem governance, and how does it work?',
    answer: `*Sky ecosystem decentralised governance relies on a multi-faceted, detailed and transparent process of decision-making regarding the Sky Protocol and the ecosystem. What follows is a high-level explanation of how Sky ecosystem governance works and general information regarding voting. For a deeper dive into the facets and checks and balances of governance, please refer to the Sky Forum, theSky Voting Portal, and the Sky Atlas—the source of truth behind the Sky project, superseding and overriding all other competing rules or decisions.*

Governance of the Sky ecosystem and the decentralised Sky Protocol is shared among a broad and diversified community comprising individuals and entities from around the world. Sky ecosystem governance token holders support the project by participating in a system of polling and decentralised onchain voting. Any holder can propose changes and additions to the Sky Protocol and ecosystem. Any holder can also vote for proposals onchain or assign their voting power to recognized delegates. Examples of changes and additions to the Sky Protocol and ecosystem may include, but are not limited to, the following:

* Technical changes and additions to the Sky Protocol  
* Changes and additions to rules and processes outside the technical layer of the Sky Protocol, such as governance procedures or compensation amounts for delegates and other workforce members  
* Adjustments to the Sky Savings Rate
* Adjustments to the collateralization rate and stability fee rates  
* Onboarding and offboarding of new collateral asset types to the Sky Protocol  
* Amendments to the risk parameters of existing collateral asset types   
* Onboarding and offboarding of new real-world asset (RWA) types to the Sky Protocol, and adjustments to the associated fees

   
The Sky ecosystem governance community can browse through the Active Polls in the Sky Governance Portal, to read the current proposals, and then connect their digital wallet to cast a yes or no poll vote. 

The onchain voting system requires that voters supply governance tokens to the Governance Smart Contract when in support of a proposal. Voting is weighted, meaning that voting power is proportional to the number of tokens voters supply For example, if 50 voters supply a total of 600 MKR in favour of proposal A, while 100 voters supply a total of 400 MKR in support of for proposal B, then Proposal A would win with 60% of the vote. The number of people who voted for a proposal is irrelevant; rather, the combined power of MKR tokens behind a proposal decides the winner.

When voting ends, voters can either receive their governance tokens back or choose to store them in the governance contract. If they choose the latter, they may save on gas fees associated with the next voting cycle, and may help protect the Sky Protocol, by increasing the difficulty of executing a governance attack, as more tokens remain locked and unavailable for potential malicious actors to acquire.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What are Sky Stars?',
    answer: `Sky Stars are independent decentralised projects within the Sky ecosystem. They are designed to enable focused, fast-moving innovation and expansion, and serve as gateways to the Sky Protocol. Each Star can opt to have its own governance token, which users of the non-custodial Sky.money app may receive as Sky Token Rewards; its own treasury; and its own governance processes and community. All Stars shall be aligned with the overarching framework and goals of Sky.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Spark?',
    answer: `[Spark](https://spark.fi/) is the first Sky Star focused on DeFi innovation. It is a gateway to the decentralised Sky Protocol and, like all Sky Stars, an independent decentralised project within the larger Sky ecosystem. Spark Protocol has undergone [multiple security audits](https://devs.spark.fi/security/security-and-audits).   
   
For detailed information on Spark's offerings and governance, review its [documentation](https://docs.spark.fi/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Atlas?',
    answer: `The Sky Atlas is the unique and comprehensive set of rules behind Sky ecosystem governance. It is a work in progress that will continue to be refined through an improvement proposal and decentralized voting framework until Sky ecosystem governance determines that modifications are no longer necessary. The Sky Atlas will eventually exist as a nested tree of enduring documents that serve the evolving needs of the ecosystem.

The Sky Atlas is the source of truth behind the decentralized Sky ecosystem, superseding and overriding all other competing rules or decisions. It uses a framework that serves to consolidate a range of data and sources into a single authority. The Sky Atlas rules aim to stabilize and streamline the governance process, ensuring the focus consistently remains on what's critically important. The approach of explicitly documenting all rules and processes in the Sky Atlas also lays the foundation for ultimately transferring most of the complexity behind governance to Sky Stars—independent, decentralized projects within the larger Sky ecosystem. 

Finally, at the root of the Sky Atlas data structure sit the Sky documents, which exist to empower minority governance token holders, help prevent misaligned actors from attempting to centralize the Sky ecosystem or harming it in other ways, and reduce the risk that AI-assisted governance will deviate from its intended purpose. These documents are entrenched and designed to sustain the Sky ecosystem , keeping it safely in a decentralized equilibrium.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: `Where can I go for technical help or to ask questions that are't answered here?`,
    answer: `For answers to questions about the decentralized Sky Protocol, please refer to the Technical Documentation and Developer Documentation. 

You may also reach out to community members with general questions on X: [@SkyEcosystem](https://x.com/SkyEcosystem).`,
    categories: ['Sky Protocol & Ecosystem']
  }
];

const skyTokens: FAQItem[] = [
  {
    question: 'What is USDS?',
    answer: `USDS is the stablecoin of the decentralized Sky Protocol. It can be used in several ways, including to participate in the Sky Savings Rate and access Sky Token Rewards without giving up control. It is the upgraded version of DAI, backed by a surplus of collateral and soft-pegged to the value of the U.S. dollar, meaning it is designed to maintain a value equal to or close to a dollar. USDS powers the permissionless, non-custodial Sky Protocol. 

Unlike cryptocurrencies that can fluctuate widely in value, USDS is designed to maintain a soft peg to the U.S. dollar and to be a reliable store of value and medium of exchange. USDS is governed by a community of broad and diversified individuals and entities from around the world, who hold Sky governance tokens and support the Sky ecosystem by participating in a system of decentralized onchain voting. USDS powers the open Sky ecosystem.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'How do I get USDS?',
    answer: `You can use Sky.money as a gateway to the Sky Protocol and to then access the permissionless liquidity pools, or similar onchain solutions, to trade USDC, USDT, ETH or SKY for USDS. You can also upgrade your DAI to USDS subject to any applicable gas fees for using the Ethereum blockchain network, which powers the Sky Protocol. That fee is not controlled, imposed, or received by Sky.money or the Sky Protocol. You might be able to obtain USDS on various crypto exchanges that decide to make it available on their platforms.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'How can I use USDS?',
    answer: `Like other decentralized stablecoins, USDS is freely transferable and can be used in connection with any software protocol or platform that supports it. Unlike other stablecoins, you can use USDS to access the Sky Savings Rate to accumulate additional USDS over time, and to access Sky Token Rewards without giving up control of your digital funds. With Sky Token Rewards, you can participate—if you choose to do so— in the governance of the Sky ecosystem.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What is SKY, and how can I get it and use it?',
    answer: `SKY is a native governance token of the decentralized Sky ecosystem and the upgraded version of Maker's legacy governance token, MKR. You can upgrade your MKR to SKY at the rate of 1:24,000 via the Sky Protocol. 

You can trade SKY for USDS and, soon, use it to accumulate Activation Token Rewards and participate in Sky ecosystem governance through a system of decentralized onchain voting. 

Sky.money is a non-custodial gateway to the Sky Protocol. You always remain in control of your funds.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What is DAI?',
    answer: `DAI is a widely used decentralized stablecoin generated by users through the Maker Protocol. It is backed by a surplus of collateral, soft-pegged to the value of the U.S. dollar, and easily user-generated and accessed. Eligible users holding DAI can upgrade it to the USDS stablecoin, which powers the open Sky ecosystem. 

As a Maker legacy token, DAI is maintained by, and will continue to be maintained by (unless the Sky ecosystem governance community decides otherwise) the Sky ecosystem. Users can continue to hold DAI, use DAI, maintain existing DAI Vaults and benefit from DAI Savings Rate (DSR) as they always have, and projects that have integrated DAI can continue to operate their frontends.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'What is MKR?',
    answer: `MKR is the native governance token of the Maker Protocol. MKR is now a governance token of the Sky Protocol, formerly the Maker Protocol. MKR holders use the token to vote on proposed changes and additions to the Sky Protocol, such as adjusting risk parameters, adding new collateral types, and more. 

As a Maker Protocol legacy token, MKR is maintained by, and will continue to be maintained by (unless the Sky ecosystem governance community decides otherwise) the Sky ecosystem.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Are DAI and MKR going away?',
    answer: `Sky governance has not indicated that DAI and MKR are going away. Accordingly, they are expected to remain unaltered in their original forms for the foreseeable future, unless Sky governance decides otherwise. In the meantime, you can continue to hold and use both tokens exactly as you have in the past. While each token now has an upgraded version, the decision to upgrade your tokens is optional. 

Note that decisions regarding the decentralized Sky Protocol, its tokens, and features are made by Sky ecosystem governance token holders through a system of decentralized on-chain voting.`,
    categories: ['Sky Tokens']
  },
  {
    question: `What happens to the DAI I've supplied to the DAI Savings Rate (DSR) contract?`,
    answer: `The DAI Savings Rate (DSR) contract remains unchanged for now, so you don't need to immediately do anything to your DAI in the DSR module. Eligible users can, however, withdraw their DSR position, upgrade their DAI to USDS, and then use their USDS to access the Sky Savings Rate.

When you supply USDS to the Sky Savings Rate module, you receive sUSDS savings tokens. When you choose to redeem your sUSDS for USDS—which you can do anytime—the total USDS you will receive will equal the amount you originally supplied, plus any rewards accumulated. No minimum supply amount is required to access the SSR, and you always maintain full control of your supplied funds, as this feature is non-custodial.`,
    categories: ['Sky Tokens']
  },
  {
    question: 'Can I borrow USDS like I borrowed DAI?',
    answer: `[Spark](http://Spark.fi), the very first Sky Star and already a top DeFi liquidity protocol, offers Easy Borrow, a feature that enables you to borrow USDS in a way that is similar to how DAI was supplied.`,
    categories: ['Sky Tokens']
  }
];

const upgradeTrade: FAQItem[] = [
  {
    question: 'How much does it cost to upgrade?',
    answer: `Upgrading is free and instant; however, you will likely pay gas fees for using the Ethereum blockchain network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol. It is calculated based on current Ethereum network demand and the amount of gas required to process the upgrade transaction. So, be sure to have ETH in your wallet anytime you transact using the Sky Protocol.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Do I have to upgrade my DAI to USDS, and my MKR to SKY?',
    answer: `No. DAI and MKR will remain unaltered in their original forms for the foreseeable future. You can continue to hold and use both tokens exactly as you have in the past. While each has an upgraded Sky version, upgrading is optional. But only by holding USDS and SKY can you utilize the Sky Protocol functionalities available in your region.

Note that decisions regarding the Sky Protocol, its tokens and features are made by Sky ecosystem governance token holders through a system of decentralized on-chain voting.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Why did the governance community choose to upgrade MKR to create SKY?',
    answer: `By upgrading MKR to SKY at a rate of 1:24,000, far more people are provided with access to the Sky ecosystem. The larger supply of SKY improves the experience for those who want to purchase more than just a fraction of the token, as well as for those who want to trade USDS for SKY and get whole amounts of SKY as token rewards, instead of fractional amounts. 

Additionally, the SKY token will eventually be used to get Activation Token Rewards and to vote on changes and additions to the Sky Protocol.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'What is the Atlas Risk Dashboard?',
    answer: `The Atlas Risk Dashboard allows you to examine the health of the decentralized Sky Protocol in real time. You can view the total value locked (“TVL”) in the Sky Protocol, TVL in the Sky Token Rewards module, TVL in the Sky Savings Rate module, the total amount of collateral backing the system, an estimation of annual rewards, and much more.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'What is a trade?',
    answer: `A trade is the direct exchange of one cryptocurrency token for another at current market prices. Sky Protocol users can trade tokens via an API integration with the third-party decentralized exchange. These trades occur through smart contracts on the blockchain without relying on centralized entities. The exact trade route is determined by the third party decentralized exchange and is not influenced by Sky.money or the Sky Protocol. 

Note that price slippage—a change in price between the time of the trade order and its execution on the blockchain—can occur due to market volatility. When you trade via the Sky Protocol, you can set your slippage tolerance level.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Why would I trade tokens?',
    answer: `The following statements are provided for informational purposes only and are not intended to be construed as financial advice or recommendations on trading strategies. Your use of the Sky Protocol is at your own risk. Please see our User Risk Documentation and Terms of Use for further information. 

When you trade USDC, USDT, ETH or SKY for USDS via the Sky Protocol, you can use your USDS to access the Sky Savings Rate to get additional USDS over time, and to access Sky Token Rewards in the form of SKY governance tokens.

When you trade USDC, USDT, ETH and USDS for SKY, you'll soon be able to use SKY to accumulate Activation Token Rewards and to participate in Sky ecosystem governance through a system of decentralized onchain voting.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Is trading using Sky.money free?',
    answer: `Trading generally involves a fee imposed by the third-party decentralized exchange integrated with the Sky Protocol that is used to make the trade. In addition, you will likely pay a blockchain network transaction fee called a gas fee. This fee is calculated based on current Ethereum network demand and the amount of gas required to process your transaction. Neither fee is controlled, imposed or received by Sky.money or the Sky Protocol.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Can I trade USDS on the open market?',
    answer: `Yes. you can trade USDS, as well as USDC, USDT and ETH, for SKY via the Sky Protocol. USDS is freely transferable and can be used in connection with any software protocol or platform that supports it.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'What is an exchange rate?',
    answer: `Exchange rate refers to the price of one cryptocurrency relative to another cryptocurrency or fiat currency at any given moment. Cryptocurrency exchange rates may be subject to price volatility and may fluctuate based on various factors.`,
    categories: ['Upgrade & Trade']
  },
  {
    question: 'Is trading risky?',
    answer: `Your use of the Sky Protocol is at your own risk. Please see our User Risk Documentation and Terms of Use for further information.`,
    categories: ['Upgrade & Trade']
  }
];

const skySavingsRate: FAQItem[] = [
  {
    question: 'What is the Sky Savings Rate, and how does it work?',
    answer: `The Sky Savings Rate (SSR) is an automated token-accumulation mechanism of the decentralized Sky Protocol that takes into account the effect of accumulated USDS compounded in real time. In other words, the USDS you supply to the Sky Savings Rate module enables you to receive sUSDS. The SSR is variable, determined not by market factors but by Sky ecosystem governance through a process of decentralized onchain voting. 

When you supply USDS to the Sky Savings Rate module, you access the SSR and may receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the SSR module and any value accrued to your position. 

The decentralized Sky Protocol dynamically adds USDS tokens to the pool every few seconds, in accordance with the Sky Savings Rate. As those tokens auto-accumulate in the pool over time, the value of the sUSDS you hold may gradually increase. 

So, when you choose to redeem your sUSDS for USDS—which you can do anytime—the total USDS you will receive will equal the amount you originally supplied, plus any additional USDS accumulated.   
With the Sky Protocol, you're always in full control of your supplied funds, as this feature is non-custodial.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'Does it cost anything to access the Sky Savings Rate?',
    answer: `Accessing the Sky Savings Rate via the Sky Protocol is free. However, any time you supply or withdraw funds to/from the Sky Savings Rate module, you will incur a transaction fee— called a gas fee—for using the Ethereum blockchain network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol.`,
    categories: ['Sky Savings Rate']
  },
  {
    question: 'Can I withdraw my USDS from the Sky Savings Rate module anytime?',
    answer: `You can withdraw your original supply of USDS and any accumulated sUSDS from the Sky Savings Rate module anytime. While no withdrawal fee is imposed, you will pay a blockchain transaction fee— called a gas fee—for using the network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol.`,
    categories: ['Sky Savings Rate']
  }
];

const skyTokenRewards: FAQItem[] = [
  {
    question: 'What are Sky Token Rewards, and how do they work?',
    answer: `When you supply USDS to the Sky Token Rewards module through the Sky Protocol, you receive Sky Token Rewards over time in the form of SKY governance tokens. 

The USDS, as well as the rewards received, are supplied to a non-custodial smart contract that represents the USDS pool of funds. That means no intermediary has custody of your supplied funds.

Soon, you'll be able to use SKY to access Activation Token Rewards, and to participate in Sky ecosystem governance through a system of decentralized onchain voting.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How much USDS do I have to supply to accumulate Sky Token Rewards?',
    answer: `Eligible users can supply any amount of USDS to the Sky Token Rewards module to begin getting Sky Token Rewards. There is no minimum amount required. Eligible users can also withdraw their USDS anytime. With the Sky Protocol, you can receive rewards without giving up control of your supplied funds, as this feature is non-custodial.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How is the Sky Token Rewards Rate calculated?',
    answer: `The Sky Token Rewards rate is different for each type of token rewarded, and always fluctuates, determined by the following factors:

* The issuance rate of the token rewarded, which is determined by Sky ecosystem governance  
* The market price of the token rewarded  
* The user's share of the total pool of funds earning the token rewarded

Sky.money does not control the issuance, determination, or distribution of these rewards.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'How much does it cost to participate in Sky Token Rewards?',
    answer: `There is no fee to participate in Sky Token Rewards; however, with each transaction, you may pay a gas fee for using the Ethereum blockchain network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'What is Chronicle?',
    answer: `Chronicle is the original oracle on Ethereum built within MakerDAO for the creation of DAI. Today, [Chronicle’s decentralised oracle network](https://docs.chroniclelabs.org/Intro/network) secures Sky, Spark, and many other DeFi and RWA protocols.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'What are Chronicle Points, and how do they work?',
    answer: `Use the Sky.money app to access [Chronicle Points](https://www.youtube.com/watch?v=CYsC7Nrm2Vs), which might later be claimable for Chronicle tokens at a rate of 10 points = 1 CLE token. The total supply of CLE tokens will be 10 billion. Chronicle Points are being emitted at a rate of 3.75 billion per year. Any future opportunities to convert Chronicle Points into CLE tokens, if offered, would be managed independently by Chronicle’s own applications.`,
    categories: ['Sky Token Rewards']
  },
  {
    question:
      'Is there a minimum requirement of USDS I need to supply to the Sky Protocol to start collecting Chronicle Points?',
    answer: `No minimum supply of USDS is required.`,
    categories: ['Sky Token Rewards']
  },
  {
    question: 'Where can I see the current total distribution of Chronicle Points?',
    answer: `Users can see the current distribution of Chronicle Points on the [Sky Ecosystem dashboard](https://info.sky.money/rewards/0x10ab606b067c9c461d8893c47c7512472e19e2ce).`,
    categories: ['Sky Token Rewards']
  }
];

const seal: FAQItem[] = [
  {
    question: 'What are Seal Rewards?',
    answer: `Seal Rewards are accessed when you supply MKR to the Seal Engine of the decentralised Sky Protocol. Currently, all Seal Rewards take the form of USDS. Eventually, subject to Sky ecosystem governance approval, Seal Rewards may also be available in the form of Sky Star tokens, including SPK, the governance token of the Spark decentralised community. Choose the reward you’d like to receive!

Your supplied MKR tokens, as well as any rewards accumulated, automatically enter a non-custodial smart contract, which allows you to always remain in control of your supplied funds.

Seal reward rates are determined by Sky ecosystem governance.
`,
    categories: ['Seal Engine']
  },
  {
    question: 'How are Seal Rewards rates determined?',
    answer: `Seal reward rates are determined by Sky ecosystem governance through a process of decentralised onchain voting.`,
    categories: ['Seal Engine']
  },
  {
    question: 'How does the Seal Engine enable borrowing?',
    answer: `Sealing MKR into the Seal Engine enables you to access Seal Rewards by creating a position through which you generate and borrow USDS against those tokens. You can seal and unseal your collateral anytime, and draw or pay back additional USDS whenever you’d like. This means you are always able to actively manage your position. 

The debt ceiling and borrow rate are determined by Sky ecosystem governance through a process of decentralised, community-driven onchain voting. Borrow rate fees accumulate automatically per block and get added to the total debt. 

Opening a USDS borrow position is subject to liquidation risk in the following scenario: If at any time the value of your sealed collateral drops below the required threshold and your position becomes undercollateralised, the smart contract automatically liquidates it and auctions your collateral. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).`,
    categories: ['Seal Engine']
  },
  {
    question: 'How is the borrow rate determined?',
    answer: `The debt ceiling and borrow rate are parameters determined by Sky ecosystem governance through a process of decentralised onchain voting. Borrow rate fees accumulate automatically per block and get added to the total debt.`,
    categories: ['Seal Engine']
  },
  {
    question: 'What happens if my borrow position is liquidated?',
    answer: `Opening a USDS borrow position is subject to liquidation risk in the following scenario: If at any time the value of your sealed collateral drops below the required threshold and your position becomes undercollateralised, the smart contract automatically liquidates it and auctions your collateral. Any leftover collateral can be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).`,
    categories: ['Seal Engine']
  },
  {
    question: 'What’s the difference between Sky Token Rewards and Seal Rewards?',
    answer: `Sky Tokens Rewards are what you access when you supply USDS to the Sky Token Rewards module of the decentralised Sky Protocol. Sky Token Rewards are in the form of SKY governance tokens. 

Seal Rewards are what you access when you supply and seal MKR to the Seal Engine of the Protocol. Seal Rewards are currently in the form of USDS. Eventually, upon approval by Sky ecosystem governance, Seal Rewards will also be available in the form of  Sky Star tokens.`,
    categories: ['Seal Engine']
  },
  {
    question: 'How does unsealing work?',
    answer: `When you supply MKR to the Seal Engine, a position is created and those tokens are sealed behind an exit fee. You can seal and unseal your tokens anytime. 

Unsealing requires payment of an exit fee—a percentage of the total amount of tokens you’ve sealed in that position. The fee is automatically subtracted from that total amount, and then burnt, removing the tokens from circulation. Your accumulated rewards are not affected.  

The exit fee is a risk parameter managed and determined (regardless of position duration) by Sky ecosystem governance. The moment the Seal Engine launched, the exit fee rate was set to 5%, with a 1% increase every 6 months thereafter until it reaches the long-term fee rate of 15%.
`,
    categories: ['Seal Engine']
  },
  {
    question: 'What does it mean to delegate my voting power?',
    answer: `When you hold MKR or SKY tokens, you maintain the right to participate in the process of Sky ecosystem governance voting. That means that you have the ability to contribute to the community-driven, decentralised ecosystem decision-making process, which occurs through onchain voting. MKR holders can vote directly through the [Sky Governance Voting portal.](https://vote.makerdao.com/) SKY holders cannot—they must delegate their voting power.
      
The voting power delegation feature of the Seal Engine of the Sky Protocol enables SKY or MKR holders to entrust their voting power to a delegate of their choosing, who can then vote in the Sky ecosystem governance process on their behalf. Users can choose one delegate per sealed MKR or SKY position. If users want to entrust their MKR or SKY to two delegates using the Seal Engine, they will need to create two separate positions.
      
Delegates in receipt of token voting power can never directly access any tokens delegated to them, including sealed tokens. Throughout the delegation process, you always own and are in control of your sealed tokens, and you can change your delegate at any time.Sealing to delegate your voting power may be a useful option for governance token holders who have limited time to allocate to the process, who want to save on the cost of gas involved in voting on their own, and who also want to earn Seal Rewards.`,
    categories: ['Seal Engine']
  },
  {
    question: 'Where can I learn about Sky ecosystem governance?',
    answer: `For a deep dive into the facets and checks and balances of Sky ecosystem governance, please refer to the [Sky Forum](https://forum.sky.money/), the [Sky Voting Portal](https://vote.makerdao.com/) and the [Sky Atlas](https://sky-atlas.powerhouse.io/)—the source of truth behind the Sky project, superseding and overriding all other competing rules or decisions.`,
    categories: ['Seal Engine']
  }
];

export const faqDataset: FAQItem[] = [
  ...cryptoGeneral,
  ...skyEcosystem,
  ...skyTokens,
  ...upgradeTrade,
  ...skySavingsRate,
  ...skyTokenRewards,
  ...seal
];
