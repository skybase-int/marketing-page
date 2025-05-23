import { FAQItem } from './faqData';

export const cryptoGeneral: FAQItem[] = [
  {
    question: 'What is cryptocurrency?',
    answer: `Cryptocurrency, also referred to as “crypto,” is a type of digital currency that uses cryptography to help improve the security and overall user control of associated transactions. Cryptography is like a secret code that embraces user pseudonymity while ensuring authentic and irreversible transactions.

There are thousands of cryptocurrencies in circulation, and they vary in purpose, functionality and value. In fact, many experience price volatility over very short periods of time. However, certain cryptocurrencies called stablecoins generally fluctuate to lesser degrees, as they are designed to attempt to maintain a stable value. 

Stablecoins are typically pegged or soft-pegged to the value of a fiat, or government-issued, currency, such as the U.S. dollar or the euro, and are backed either by fiat currencies, commodities (real-world assets) or other cryptocurrencies held in reserves, the presence of which is intended to make them more stable mediums of exchange.

For more details on this and other risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are the benefits of cryptocurrency?',
    answer: `There are thousands of cryptocurrencies in circulation, and they vary in purpose, functionality and value. Some of the benefits crypto can offer are:

- **Inclusivity**. People in many regions of the world, regardless of their economic standing, can use crypto to transact freely and to access decentralized financial (DeFi) services that let them retain complete control of their assets. 

- **Availability**. Many cryptocurrencies are easily exchanged on an expanding variety of both decentralized exchanges (DEXs) and centralized exchanges (CEXs).

- **Speed and affordability**. Users can transfer crypto across the globe within seconds and at a fraction of the cost of traditional wire services. 

- **Transparency**. On public blockchains, such as Ethereum, all transactions and smart contracts are publicly viewable. This helps promote trust and accountability.

- **Privacy without secrecy**. While public blockchains are transparent, they don’t reveal your real-world identity in a straightforward manner unless you choose to expose that information. Instead, they reveal your wallet address(es) and transaction history. Please note, however, that your identity can be tied to your wallet address using IP addresses or other information you may not "choose" to disclose.  

- **Immutability**. Once a transaction is recorded on a blockchain, it cannot be altered, which reinforces the integrity of the transaction data.

- **Security**. The code behind DeFi protocols is often open source, allowing for public visibility and analysis. This transparency may enable vulnerabilities to be identified and addressed by a global community of open source contributors. Over time, publicly available and largely unchanged code could provide additional security assurances. Additionally, some DeFi protocols may undergo audits by reputable firms within the industry, which can contribute to enhanced security, though the extent and effectiveness of such measures may vary.

- **Round-the-clock accessibility**. Blockchains operate 24/7.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How do I get cryptocurrency?',
    answer: `Start your cryptocurrency journey by learning about the various types of crypto and how they work, the underlying technology, associated risks, and any regulations regarding crypto in your region. Taking time to understand these fundamentals and the basics of crypto exchanges will help you make more informed decisions about cryptocurrency. 

There are two main types of crypto exchanges—decentralized exchanges (DEXs) and centralized exchanges (CEXs). A DEX is a peer-to-peer marketplace where users can buy, sell and trade cryptocurrencies directly from their own crypto wallets without having to share identifying information. No financial institution or other third party is needed to facilitate DEX transactions. A CEX is also a marketplace where users buy, sell and trade cryptocurrencies, but the CEX or a third party often facilitates trades, meaning it often acts as a middleman between buyers and sellers. CEXs often require users to create an account and verify their identity.

For risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks). `,
    categories: ['Crypto (General)']
  },
  {
    question: 'How is cryptocurrency used?',
    answer: `There are thousands of cryptocurrencies in circulation, and they vary in purpose, functionality and value. Here are some ways in which they are used:

- **Trading**. Users can buy, sell and trade crypto using a centralized exchange (CEX), which acts as a trusted middleman and requires users to verify their identity, or a decentralized exchange (DEX), which allows users to trade directly from their own crypto wallets without sharing personal information. 

Sky Protocol tokens are available to trade on crypto exchanges that list them. Eligible users of the Sky.money web app can access the non-custodial Sky Protocol to trade some SKY on Ethereum Mainnet via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi/#/1/swap/WETH). Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.

- **Peer-to-peer, cross-border transfers**. Users can send crypto directly to anyone, anywhere, using networks powered by blockchain technology.

- **Gaming**. Stablecoins are sometimes used in crypto’s video game ecosystem to transact and as rewards, enabling user adoption to grow organically with engagement.

- **Accessing Stability**. Cryptocurrencies called stablecoins generally fluctuate to lesser degrees than other types of crypto, as they are designed to attempt to maintain a stable value. Stablecoins are typically pegged or soft-pegged to the value of a fiat, or government-issued, currency, such as the U.S. dollar or the euro, and are backed either by fiat currencies, commodities (real-world assets) or other cryptocurrencies held in reserves, the presence of which is intended to make them more stable mediums of exchange.

- **Saving**. Some people use crypto as a way to save. For example, eligible users of Sky.money web app can access the decentralized Sky Protocol to supply USDS stablecoins to the Sky Savings Rate module to access the Sky Savings Rate and accumulate additional USDS over time. The Sky.money web app (i.e., the frontend user interface) is a non-custodial gateway to the Sky Protocol. It is free to access. With the Sky.money web app, you always remain in control of your assets. Non-custodial refers to the fact that the Sky.money web app does not take custody of users’ private keys or assets at any time. Users are responsible for managing their own private keys and digital wallet access. 

- **Accessing Rewards**. Some people use crypto to access rewards without giving up control of their assets. For example, eligible Sky.money web app users can tap into the Sky Protocol to access Sky Tokens Rewards when they supply USDS to the Sky Token Rewards module. When eligible users supply SKY tokens to the Staking Engine of the Protocol, they can access rewards in the form of USDS. 

- **Borrowing**. Some DeFi protocols allow users to borrow stablecoins using their crypto as collateral. Eligible users of the Sky.money web app can borrow USDS against the SKY tokens that they supply to the Staking Engine of the Sky Protocol. Additionally, [Spark](https://spark.fi/), a gateway to the Sky Protocol and the first Star Agent (Star) in the Sky Ecosystem, enables users to generate and borrow USDS when supplying certain types of crypto assets to its Borrow module. Spark, like all Stars, is an independent decentralized project within the larger Sky Ecosystem. For more information regarding Spark, see its [detailed documentation](https://docs.spark.fi/).

- **Lending**. Some DeFi protocols enable users to supply crypto to a smart contract that acts as a pool from which others can borrow. Those suppliers become liquidity providers, who earn rewards in the form of liquidity pool tokens (LPTs). The LPTs they receive represent their share of assets in the pool or a percentage of fees charged to those accessing the pool tokens.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is the relationship between TVL and token price?',
    answer: `TVL (Total Value Locked) generally represents the total value of cryptocurrency assets that are supplied to a protocol or reported as the total value locked in a contract representing a protocol’s features (e.g., a lending contract or a savings contract).
TVL is commonly measured in fiat currency, typically US dollars, not in a protocol’s native token. For example, If a protocol has 100 ETH locked, and ETH is worth $4,000, then the calculated TVL is $400,000. If the price of ETH falls or rises, the TVL fluctuates accordingly.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How is cryptography used with cryptocurrency?',
    answer: `Cryptography is the practice of encrypting information in an effort to keep it safe and hidden from prying eyes. Without cryptography there would be no cryptocurrency. 

Crypto wallets work using a pair of cryptographic keys—one public, the other private. Public and private keys are long, unique series of alphanumeric characters used together to encrypt data to help to ensure the authenticity and verifiability of crypto transactions. 

The public key, which can be compared to a traditional bank account number, is used to receive assets. Note the distinction between a public key and a public address (explained below). The private key, a long string of randomly generated letters and numbers, can be compared to a traditional bank account password, is unique to a single address, and is used to sign transactions and prove ownership of a digital wallet. A private key should be stored safely and kept secret to avoid the inadvertent loss of, or access to, one’s digital assets, which may result from someone else gaining access to the private key and thus controlling those assets as a result. 

Typically, when initializing a new wallet for a user, the wallet software generates a “seed phrase,” which is a sequence of 12, 18, or 24 seemingly random words used as a mnemonic device to access the underlying private key(s) related to that wallet. The seed phrase can be used to recover the public and private keys if the public or private keys are lost or forgotten. Importantly, anyone who has access to a user’s seed phrase or private keys can easily gain access to that user’s crypto assets.

Because a public key is made up of a long, unique series of alphanumeric characters, it is usually compressed into a public address. Your public address is the shortened version of the public key, which can be freely shared with others so they can send crypto to that address. 
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'Is cryptocurrency risky?',
    answer: `For risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a decentralized exchange?',
    answer: `A decentralized exchange (DEX) is a peer-to-peer marketplace made up of smart contracts where users can buy, sell and trade cryptocurrencies without having to share any personal information. No financial institution or third party is needed to facilitate DEX transactions. An example of a DEX is CoW Swap.   

DEX users interact directly with smart contracts using crypto wallets that are secured by private keys. Because DEXs are non-custodial, users are fully responsible for their own assets. That means if you lose access to your private keys, your assets are irrecuperable. Additionally, because no bank or financial institution is involved in facilitating DEX transactions, a DEX can’t be used to trade fiat currency for cryptocurrency (or vice versa).

Not all DEXs operate in the same way. To buy crypto on a specific DEX may require knowledge of that DEXs functions and/or underlying code base. 

Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a centralized exchange?',
    answer: `A centralized exchange (CEX) is a marketplace where users create an account by providing identifying information and documentation to a centralized entity in order to buy, sell and trade cryptocurrencies. Importantly, a CEX facilitates exchanges, meaning it acts as an intermediary between buyers and sellers. Some CEXs also require users to opt-in to one or more custodial wallets rather than use a private, non-custodial wallet. With a custodial wallet, the centralized entity, not the user, is in control of safeguarding assets and the wallet’s private keys. In that sense, when using a CEX, users trade privacy for simplicity. Users can, however, transfer their assets from a custodial wallet to their own non-custodial wallet if they wish to do so. 

Centralized exchanges typically offer customer support through their websites, and may offer some fund recovery options in specific situations. For example, if you lose access to your CEX account but can verify your identity, a process might be employed to help you regain access.

Generally, CEXs operate in similar ways, but to learn how to use a specific CEX, obtain information from the exchange directly. Your use of any centralized exchange will likely be subject to that exchange's terms of service and applicable regulatory requirements.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are stablecoins, and how do they differ from other types of cryptocurrencies?',
    answer: `Stablecoins are cryptocurrencies that implement various mechanisms in an attempt to maintain a stable value. They are typically pegged or soft-pegged to the value of a fiat (government-issued) currency, such as the U.S. dollar or the euro. Different types of stablecoins may be backed either by fiat currencies, commodities (real-world assets) or other cryptocurrencies held in reserves, though the specific backing mechanisms and their effectiveness can vary significantly. The presence of these backing mechanisms is intended to support price stability, but does not guarantee it.

For details on the risks associated with stablecoins, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What role do stablecoins play in the DeFI ecosystem?',
    answer: `Stablecoins provide the foundation on which much of decentralized finance (DeFi) functions, and are essential to increasing DeFi adoption worldwide.They are typically pegged to the value of a fiat (government-issued) currency, such as the U.S. dollar or the euro.

Stablecoins are commonly used for:

- **Peer-to-peer, cross-border transfers**. Stablecoin (and other crypto) holders can send their tokens directly to anyone, anywhere, using networks powered by blockchain technology.

- **Trading**. Users can buy, sell and trade crypto using a centralized exchange (CEX), which acts as a trusted middleman and requires users to verify their identity, or a decentralized exchange (DEX), which allows users to trade directly from their own crypto wallets without sharing personal information. 

Sky Protocol tokens are available to trade on crypto exchanges that list them. Eligible users of the [Sky.money web app](https://app.sky.money/) can access the non-custodial Sky Protocol to trade some SKY on Ethereum Mainnet via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi/#/1/swap/WETH). Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.

- **Saving**. Some people use crypto as a way to save. For example, eligible users of the Sky.money web app can access the Sky Protocol to supply USDS to the Sky Savings Rate module to access the Sky Savings Rate and accumulate additional USDS over time.

- **Borrowing**. Some DeFi protocols allow users to borrow stablecoins using their crypto as collateral. Eligible users of the Sky.money web app can borrow USDS against SKY that they supply to the Staking Engine of the Sky Protocol. Additionally, [Spark](https://spark.fi/), a gateway to the Sky Protocol and the first Star Agent (Star) in the Sky Ecosystem, enables users to generate and borrow USDS when supplying certain types of crypto assets to its Borrow module. Spark, like all Stars, is an independent decentralized project within the larger Sky Ecosystem. For more information regarding Spark, see its [detailed documentation](https://docs.spark.fi/).

- **Lending**. Some DeFi protocols enable users to supply crypto to a smart contract that acts as a pool from which others can borrow. Those crypto suppliers become liquidity providers, who earn rewards in the form of liquidity pool tokens (LPTs). The LPTs they receive represent their share of assets in the pool or a percentage of fees charged to those accessing the pool tokens.

- **Accessing Rewards**. Some people use crypto to access rewards without giving up control of their assets. For example, eligible Sky.money web app users can tap into the Sky Protocol to access Sky Tokens Rewards when they supply USDS to the Sky Token Rewards module. When eligible users supply SKY to the Staking Engine of the Protocol, they can access rewards in the form of USDS.

- **Risk management**. Stablecoins may offer a safe haven during market turbulence, allowing traders to quickly exit volatile positions without leaving the crypto ecosystem.

- **Cross-project integration**. Stablecoins enable seamless value transfer between different DeFi protocols and applications, creating interoperability across the ecosystem.

Stablecoins typically enable DeFi growth by:

- **Reducing barriers to entry for Traditional Finance (TradFi) users**: The fact that decentralized stablecoins are soft-pegged to the U. S. dollar makes it easier for newcomers to understand and use DeFi without first mastering cryptocurrency price dynamics.

- **Enabling complex financial products and strategies**: The stable value of stablecoins allows for the creation of predictable derivatives, synthetic assets and structured products.

- **Supporting the growth of decentralized lending markets**: Stablecoins provide the stable foundation needed for lending protocols to perhaps offer reliable savings rates and borrowing terms.

- **Facilitating price stability in exchanges**: Stablecoins reduce overall market volatility and improve price discovery mechanisms in exchanges.

- **Creating bridges between TradFi and DeFi**: Stablecoins can serve as a familiar entry and exit point between the traditional financial system and decentralized applications.

With the [Sky.money web app](https://app.sky.money/), you always remain in control of your assets. You alone are responsible for managing your private keys and digital wallet access.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is the difference between a centralized and decentralized stablecoin?',
    answer:
      "A centralized stablecoin, like USDC, is one that is issued and managed by a centralized entity, such as a bank or FinTech company. A decentralized stablecoin, such as USDS, is not issued or controlled by a centralized entity. Instead, a community of users participate in a transparent, decentralized system of governance that can influence how the underlying protocol is generated and managed, subject to the protocol's technical parameters and limitations.",
    categories: ['Crypto (General)']
  },
  {
    question: 'What are crypto-collateralized stablecoins, and how do they achieve stability?',
    answer:
      'A crypto-collateralized stablecoin is a type of decentralized digital currency that is typically soft-pegged to the value of a fiat currency, such as the U.S. dollar, and backed (collateralized) by other cryptocurrencies locked in a reserve or in a smart contract sometimes called a cryptocurrency vault. The stability mechanisms behind crypto-collateralized stablecoins generally include overcollateralization and algorithmic methods, though these mechanisms do not guarantee a stable value. Three examples of crypto collateral that back USDS are ETH, wBTC and USDC.',
    categories: ['Crypto (General)']
  },
  {
    question: 'What is an example of a crypto-collateralized stablecoin?',
    answer: `A crypto-collateralized stablecoin is a type of decentralized digital currency that is typically soft-pegged to the value of a fiat currency, such as the U.S. dollar, and backed (collateralized) by other cryptocurrencies locked in a reserve or in a smart contract, which may sometimes be referred to as a cryptocurrency vault. 

To maintain stability of crypto-collateralized stablecoins, algorithms and overcollateralization are probably the most widely used mechanisms. Examples of crypto-collateralized stablecoins are USDS and DAI. USDS powers the Sky Ecosystem.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a blockchain?',
    answer: `Crypto transactions occur on networks (blockchains) powered by blockchain technology, which transcend borders. A permissionless blockchain is a distributed ledger ( list of transactions) that anyone can view and verify. In contrast, permissioned or private blockchains exist where transactions are not publicly visible to everyone. These blockchains are typically used by enterprises, governments, and organizations that require privacy. There are also privacy-enhanced blockchains, whereby transactions are encrypted or use advanced cryptographic techniques to hide details. 

Generally, blockchain transactions are immutable, meaning that once executed, they are typically irreversible. While Bitcoin and Ethereum are among the most well known blockchain networks, there are many others.

There are generally two types of blockchains—public and private. Private blockchains, also called “trusted” or "permissioned” blockchains, are typically designed to meet the specific needs of a project or organization; therefore, they are closed to all but authorized users. Public blockchains are just that—open and accessible by all.

Like traditional accounting ledgers, blockchain networks keep a record of transactions; unlike traditional ledgers, permissionless blockchain networks are open, meaning that anyone, anywhere can view blockchain public transactions at any time by using a blockchain explorer. Blockchain explorers are pieces of software that allow anyone to see blockchain data and activity that is public. Etherscan is the public blockchain explorer for the Ethereum network.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is blockchain data verification?',
    answer: `Data verification is crucial to a blockchain network, as it confirms that all transactions added to the blockchain are valid. Verification prevents double-spending, helping to ensure the integrity of a chain.

Blockchain data is verified using a network of stakeholders called nodes, miners or validators. At the risk of oversimplifying a complicated process, nodes make sure that if you want to send $5 worth of a specific cryptocurrency to someone, you actually have $5 worth of that crypto in your possession. They also make sure that you follow the rules of the blockchain and don’t attempt to spend that $5 more than once (i.e., the prevention of a concept referred to as “double-spend”). In addition to making sure all transaction data is processed properly, nodes all have exact copies of the blockchain, which enables them to maintain all blockchain data synchronously (at the same time).

Note that both public and private blockchain networks use nodes to verify transactions; however, with private blockchains, the nodes are permissioned nodes that are authorized/pre-approved by the entity running the permissioned chain to participate in verifying the transactions.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a blockchain transaction (gas) fee?',
    answer: `Every time you engage in transactions with your digital assets (e.g., buy, sell, trade or transfer them) you will likely pay a transaction fee—called a gas fee—for using the blockchain network. That fee is neither controlled, imposed nor received by the [Sky.money web app](https://app.sky.money/) or the Sky Protocol; it is calculated based on current network demand and the amount of gas (i.e., units of compute resources) required to process your transaction. On the Ethereum blockchain, gas fees are paid in ETH, the native currency of the blockchain. So, be sure to have ETH in your wallet anytime you transact using the Sky Protocol.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a blockchain bridge?',
    answer: `A blockchain bridge is a protocol or platform that allows users to transact data and digital assets between different blockchains.

For example, if you have USDS, a native stablecoin of the Sky Protocol, which is built on the Ethereum blockchain, and you want to use it on another blockchain, you might use a bridge to make that transfer. The bridge infrastructure connects the two blockchains, handling the ‘messaging’ that tells the destination chain that the USDS tokens are locked in a smart contract on Ethereum, and it’s safe to generate the equivalent amount. Importantly, whether you receive a native version of USDS on the destination chain or an equivalent amount of a wrapped version depends on the destination chain’s implementation. 
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are the characteristics of public blockchain networks?',
    answer: `Blockchain networks are decentralized accounting ledgers, of which there are two types—public and private. Private blockchains, also called “trusted” or "permissioned” blockchains, are designed to meet the specific needs of a project or organization, therefore they are closed to all but authorized users. Public blockchains are just that—open and accessible by all, meaning that anyone, anywhere can view the blockchain transactions at any time by using a blockchain explorer. Etherscan is the blockchain explorer for the Ethereum network.

The unique characteristics of public blockchains are as follows: 
- **Accessibility**. Anyone with internet access can participate in a public blockchain network, 24-7.

- **Decentralization**. Public blockchains are decentralized. No single entity controls public networks, which helps to reduce—not eliminate—the risk of fraud or manipulation.

- **Speed and affordability**. The lack of an intermediary in public blockchains increases transaction speed and reduces cost.

- **Mechanization**. Smart contracts—programmed functionalities written in computer code—self-execute, enabling the automation of complex financial transactions and operations.

- **Security**. Data is stored across a network of computers, making information difficult to tamper with.

- **Transparency**. All transactions on permissionless blockchains are visible to the public; therefore, anyone in any region with an internet connection can track blockchain activity.

- **Trustlessness**. decentralized blockchain technology ensures that all transactions are accurate, without having to put trust in a centralized third party to verify their accuracy.

- **Immutability**. Generally, blockchain transactions are immutable, meaning that once executed, they are irreversible. 

- **Ingenuity**. In the same way blockchain networks have opened the door to decentralized finance (DeFi) they can open the door to apps and services not yet conceived.

Due to the characteristics listed above, blockchain networks may allow for worldwide coordination and collaboration without intermediaries. They add an ownership layer to the internet, which not only enables peer-to-peer finance, but also allows for communities to coordinate and self-manage through ecosystem governance processes using smart contracts and onchain incentives.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are smart contracts?',
    answer: `Smart contracts are agreements written in computer code and deployed to a blockchain, where they self-execute automatically when called upon. No centralized entity or intermediary is needed to complete the steps laid out in those agreements. Smart contacts are used in various sectors, but they are key to the decentralized finance (DeFi) sector, as they are used to execute everything from simple transfers and trades to the governance of decentralized ecosystems in a peer-to-peer or peer-to-contract manner.

Smart contracts work a lot like vending machines. A vending machine automatically provides a product once you feed it a coin and choose the product you want. The machine does not call someone at the vending machine company to get permission or further instructions. Similarly, a smart contract automatically provides a specific output (O) when prompted by a specific input (I). For example, a smart contract deployed to serve an ecosystem can send money to contractors (O) on the first of every month (I), without any help or interference from a payroll manager, bank or other financial institution. 

While most smart contracts are open source (transparent), most are immutable in theory, meaning no one can change them once they’re deployed. In DeFi ecosystems, including the Sky Ecosystem, smart contract changes can only be made through a system of decentralized community governance and onchain voting processes.

The importance of smart contracts to decentralized governance can’t be overstated, as the contracts related to voting enable more efficient and effective technical, economic and administrative decision-making by a global community of ecosystem participants.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'Are smart contracts secure?',
    answer: `Smart contracts are agreements written in computer code and deployed to a blockchain, where they self-execute automatically when called upon. No centralized entity or intermediary is needed to complete the steps laid out in those agreements. Smart contacts must be written correctly in order to work as expected. If there's a coding error in a smart contract, it might not perform as it should. Any vulnerabilities in a smart contract could cause security issues. Even meticulously written smart contracts can have vulnerabilities, which can manifest through complex interactions and economic attack vectors. For example, hackers might find errors and use them to their advantage, causing harm to users. Smart contract audits can help mitigate risks caused by developer error. 

For details on the risks associated with smart contracts, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are the differences between centralized and decentralized bridges?',
    answer: `There are several differences between centralized and decentralized bridges.

**Centralized Bridges:**

- Rely on a trusted intermediary/entity to custody assets and manage transfers

- Use centralized validators or a single entity to verify transactions

- Are more vulnerable to single points of failure (custodial risk)

- Typically require Know Your Customer (KYC) and Anti-Money Laundering (AML) verifications

- Trade security for speed and lower costs 

**Decentralized Bridges:**

- Use smart contracts and decentralized validator networks

- Lock assets in smart contracts 

- Ensure the user is always in control of their assets (assets are non-custodial)

- Prioritize security and trustlessnes

- Typically do not require KYC/AML if they are permissionless

- Typically more expensive due to consensus requirements

Both types of bridges have associated risks. See the [User Risk Documentation](https://docs.sky.money/user-risks). `,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a DeFi primitive?',
    answer: `A DeFi (decentralized finance) primitive generally refers to a core function within a DeFi ecosystem that can be used as a building block for more complex financial products. Common examples include lending protocols, savings products and decentralized exchanges (DEXs).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is decentralized finance?',
    answer: `Decentralized finance (DeFi) refers to a sector of the cryptocurrency economy that aims to provide open and permissionless financial applications, products and services built on and accessed via blockchains. The term ‘permissionless’ in this context generally means that users do not need permission to join an open blockchain network, and are in complete and direct control of their assets and financial activities. ‘Open’ speaks to the complete transparency of public blockchains. 

DeFi applications typically aim to enable fast, borderless transactions, via self-executing, autonomous smart contracts, often at a fraction of the cost of traditional wire services, as a result of being disintermediated (in direct control of their activities). 

Finally, DeFi offerings are often managed by decentralized ecosystems that operate with the help of rules and agreements embedded in the smart contracts. Smart contracts are programs written in computer code and deployed to a blockchain. Ecosystem projects are controlled not by one person or entity, but by a global community of ecosystem participants, subject to their specific terms and technical limitations.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is a crypto wallet, and how do I get one?',
    answer: `A crypto wallet is a tool, typically in the form of software, that enables you to easily view a list of your digital assets, manage them, and help safeguard them. Note that with crypto wallets, your assets are recorded on a blockchain and only visible in the wallet—not stored there. 

Your non-custodial wallet holds the private keys needed to sign crypto transactions, and gives you full control over those private keys, which are essential for accessing and managing your crypto. Unlike custodial wallets, where a third party holds the private keys, non-custodial wallets allow users to be the sole custodian of their keys. This means that only the user has the ability to sign transactions, making it more secure and private; however, it also means that if a user loses their private key or recovery phrase, they may permanently lose access to their assets. Because all crypto assets exist on a public or private blockchain, access to them depends on control of the corresponding private keys.

Non-custodial wallets can be software-based, like mobile apps, or hardware devices designed for enhanced security. There are several types of crypto wallets and no limit to the number of wallets you can own. Two popular software-based wallets are Metamask and Rainbow.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What is the difference between a digital wallet and a crypto wallet?',
    answer: `In the context of decentralized finance (DeFi), there is no difference; the terms are used interchangeably.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How do crypto wallets work?',
    answer: `Typical crypto wallets operate using a pair of cryptographic keys—one public, the other private. These keys are essential components of what is known as “public key cryptography,” the core concept underlying wallet security and actions. 

Typically, when setting up a new non-custodial digital wallet, the wallet software generates a “seed phrase,” which is a sequence of 12, 18, or 24 seemingly random words used as a mnemonic device to access the underlying private key(s) related to that wallet. The seed phrase can be used to recover the public and private keys, and should therefore be stored somewhere safe and never shared with anyone. 

A private key is a randomly generated string of letters and numbers which acts as a sort of password that gives anyone that knows it the capability to control the wallet assets. It is known only to the user and should be kept secure and confidential to ensure that only the user has access to and can control any associated assets. The private key is used to sign transactions. For example, when a user wants to send crypto or access their assets on the blockchain, they would use the private key to authorize the transaction. 

A public key is usually derived from the private key using a mathematical algorithm. It is a string of characters that can be shared openly without compromising a wallet’s inherent security. The public key is used to generate wallet addresses and to encrypt data. For example, when someone wants to send digital assets to a user, they would use the user’s public key or the associated wallet address.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'How do I use a non-custodial digital wallet to make a transaction?',
    answer: `Once you’ve set up your non-custodial digital wallet, and have your public and private keys, you can use it to manage (send and receive) your digital assets on the blockchain. Every time you transact, your wallet requires you to digitally sign the transaction with your private key. Signing when prompted is a simple but critical part of the process, demonstrating that you acknowledge your action, and ensuring that only you have control of your crypto.
Some onchain actions might require multiple wallet signatures to authorize them. For example, to complete a trade on the decentralized, non-custodial Sky Protocol using the [Sky.money web app](https://app.sky.money/), you would first need to confirm that you allow the app to access the token you want to trade in your wallet (one signature), and then authorize the actual trade (another signature).`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are dApps?',
    answer: `Decentralized financial applications (dApps) are typically made up of software code deployed to a blockchain. This code usually takes the form of smart contracts that run automatically and independently. The smart contracts contain the rules and agreements that constitute the framework of the applications, and are what allow for the fast and efficient creation, transfer and validation of digital assets, as well as for decentralized community governance. The decentralized Sky Protocol is a dApp.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What does non-custodial mean?',
    answer: `Non-custodial means that no third-party entity manages or takes control of your digital assets or your digital wallet keys. You alone are responsible for managing your crypto.`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are governance tokens?',
    answer: `Governance tokens are cryptocurrencies that may represent voting power within a decentralized autonomous organizations (DAOs) or ecosystem. Typically, anyone holding the governance tokens of a DeFi organization or community can vote on proposed changes affecting a project’s protocol or ecosystem, including but not limited to, protocol upgrades, fee structures, risk management and treasury allocations. Governance tokens enable decentralized decision-making by providing the community of token holders with control over a project’s future while fostering decentralization and user-driven development.

Governance of the decentralized, non-custodial Sky Protocol and ecosystem is shared among a broad and diversified community comprising individuals and entities from around the world who hold SKY tokens, the native governance token of the Sky Ecosystem.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are crypto tokenomics?',
    answer: `Crypto tokenomics refers to the rules and mechanics that control how a cryptocurrency token works within its ecosystem. 


Key factors of tokenomics
- **Total Supply and Circulating Supply**
  - **Total Supply**. This is  the maximum number of tokens that will ever exist. Note, however, that while some tokens have fixed limits, others can expand over time.
  - **Circulating Supply**. This is the number of tokens available in the market at a given time. 

- **Token Distribution** (i.e., how tokens are typically allocated at launch)
  - Some tokens may be distributed to a project’s team, including but not limited to developers and governance facilitators.
  - Some tokens may be distributed to early supporters, including backers and advisors.
  - Some tokens may be distributed to the community as rewards or user incentives.

- **Utility**
  - **Payments**. Some tokens, such as stablecoins, are used for payments.
  - **Access**. Some tokens provide access to special features.
  - **Fees**. Some tokens are used to pay blockchain (gas) and other fees.
  - **Rewards**. Sometimes users are able to supply and/or lock-up tokens to access more tokens.
  - **Community Governance**. Governance tokens are used by holders to vote on a wide variety of decisions pertaining to a protocol or ecosystem.

- **Supply Mechanics**
  - **Inflationary Tokens**. Inflationary Tokens employ a mechanism where new tokens are created consistently or periodically and added to circulation. For example, new ETH tokens are created and issued to Ethereum network validators as rewards.
  - **Deflationary Tokens**. Deflationary Tokens employ a mechanism where some tokens are either burned (destroyed and removed from circulation) directly or bought on the market and then burned to reduce supply.
  - **Net-deflationary Tokens**.  With net-deflationary tokens, the total supply shrinks over time, instead of increasing. This does not mean new tokens aren’t being created. Rather, it means that the rate of token burning outpaces the rate of creation, leading to a net decrease in supply.

- **Liquidity and Market Impact**
  - Tokens need high liquidity in order for users to easily trade them without experiencing big price swings.
  - Some projects use liquidity pools and/or market makers to ensure smooth trading.

- **Vesting**
  - Typically, vested tokens are those that are locked for a predetermined period of time, promoting long-term commitment.
`,
    categories: ['Crypto (General)']
  },
  {
    question: 'What are wrapped tokens?',
    answer: `Most tokens are created on a specific blockchain and are originally designed to function only within that chain’s ecosystem. Wrapped tokens are 1:1 representations of those original tokens that can be used on other blockchains. Importantly, wrapping is what allows tokens to gain cross-chain functionality, making them usable in different networks without changing their value.

Wrapped tokens follow the token standard of the chain they’re on. For example, ERC-20 is the standard for fungible tokens on Ethereum, while SPL Token is the standard on the Solana chain. This means that even though you might choose to hold wETH (wrapped ETH) on both Ethereum and Solana, they are not the same token.

- wETH on Ethereum is an ERC-20 token used in apps like Uniswap and Aave.

- wETH on Solana is an SPL token, often created via a bridge like Wormhole, and used in Solana-based apps.

These versions of wETH are not interchangeable without bridging, because they live on different chains, follow different rules, and are only equivalent in value, not structure.
`,
    categories: ['Crypto (General)']
  },
  {
    question:
      "What is the difference between a stablecoin that's pegged to the U.S. dollar and one that's soft-pegged to the U.S. dollar?",
    answer: `The difference between a stablecoin that is pegged to the U.S. dollar and one that is soft-pegged to the U.S. dollar lies primarily in the degree of adherence to the peg and the mechanisms used to maintain that peg.

A stablecoin that is pegged, or ‘hard-pegged,’ to the U.S. dollar maintains a strict 1:1 value ratio with the dollar. This means that for every 1 stablecoin in circulation, there is 1 actual U.S. dollar (or equivalent) held in reserve by the stablecoin creator. For example, if there are 10 million stablecoins issued, 10 million U.S. dollars are held in a bank or in short-term treasuries. The reserve is what gives the stablecoin its value and what enables users to redeem it for actual dollars at any time.

A stablecoin that is soft-pegged to the U.S. dollar aims to stay close to $1 in value, but doesn’t guarantee a strict 1:1 value ratio with the dollar. Instead of being backed by dollars in reserve, the stablecoin is backed by collateral, such as crypto assets, or depends on other mechanisms to maintain its price. The value of a soft-pegged stablecoin can fluctuate based on market conditions. For example, a soft-pegged stablecoin might trade at +/-$1, depending on supply and demand. 

Both types of stablecoins strive to offer stability, but the degree of price stability and the mechanisms employed to achieve it can differ significantly. Importantly, some stablecoins are pegged or soft-pegged not to the U.S. dollar, but to other fiat (government-issued) currency.
`,
    categories: ['Crypto (General)']
  }
];
