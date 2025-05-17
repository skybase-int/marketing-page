type Category =
  | 'All FAQs'
  | 'Seal Engine'
  | 'Crypto (General)'
  | 'Sky Protocol & Ecosystem'
  | 'Sky Tokens'
  | 'Upgrade & Trade'
  | 'Sky Savings Rate'
  | 'Sky Token Rewards'
  | 'SkyLink';

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

const skyEcosystem: FAQItem[] = [
  {
    question: 'Who is behind the Sky Protocol?',
    answer: `Sky Ecosystem Governance relies on a decentralized, multi-faceted, detailed and transparent system of decision-making that includes discussion in the [Sky Forum](https://forum.sky.money/]) and polling and onchain voting in the [Sky Governance Voting Portal](https://vote.sky.money/) to maintain the non-custodial Sky Protocol and the Sky Ecosystem. Governance is shared among a broad and diversified community, comprising individuals and entities from around the world.
For a deeper dive into the facets and checks and balances of governance, please refer to the [Sky Atlas](https://sky-atlas.powerhouse.io/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Sky.money web app, and what can I do with it?',
    answer: `The non-custodial Sky.money web app is one of many free-to-access frontend gateways to the Sky Protocol, which is designed around the USDS stablecoin. It provides eligible users with access to all Sky Protocol tokens (sUSDS, USDS, DAI, SKY and MKR) and features, including the Sky Savings Rate (SSR), Sky Token Rewards (STRs), the Staking Engine, SkyLink, more. 

Eligible Sky.money web app users can: 

* **Trade.** Sky Protocol tokens are available to trade on crypto exchanges that list them. Eligible users of the Sky.money web app can access the non-custodial Sky Protocol to trade some SKY on Ethereum Mainnet via an API integration with the third-party decentralized exchange (DEX) [CoW Swap](swap.cow.fi). Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services. 


* **Upgrade.** Upgrading enables you to take advantage of the many Sky Ecosystem features.
  * Upgrade DAI to USDS 1:1, and revert USDS back to DAI 1:1. Upgrading and reverting are optional, instant, and free; however, you will likely pay gas fees for using the Ethereum blockchain network. That fee is not controlled, imposed or received by Sky.money or the Sky Protocol
  * Upgrade MKR to the SKY token at a rate of 1:24,000 (1 MKR = 24,000 SKY). While MKR will continue to exist, reverting from SKY to MKR via the Sky Protocol is not possible. SKY is the technical and functional evolution of MKR and the sole governance token of the Sky Protocol. SKY inherited the governance functionalities previously held by MKR. For upgrade details and step-by-step upgrade instructions, please visit the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money).

* **Save.** Supply USDS to the Sky Savings Rate module of the Sky Protocol to access the Sky Savings Rate and accumulate additional USDS over time. No minimum supply amount is required; withdraw at any time.   
  * When you supply USDS to the Sky Savings Rate module, you receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the module and any value accrued to your position.   
  * The Sky Protocol dynamically adds USDS tokens to the pool every few seconds, in accordance with the Sky Savings Rate. As those tokens auto-accumulate in the pool over time, the value of the sUSDS you hold may gradually increase. So, when you choose to redeem your sUSDS for USDS—which you can do at any time—the total USDS you receive will equal the amount originally supplied, plus any rewards earned. 


* **Access Sky Token Rewards.** Supply USDS to the Sky Token Rewards module of the Sky Protocol to earn rewards over time. No minimum USDS supply amount is required; withdraw at any time.   
  * The amount of Sky Token Rewards you receive is calculated based on your share of the entire pool of USDS tokens supplied to the Sky Token Rewards module by all participants, not on the amount of tokens you supply. This share, and consequently the rate of Sky Token Reward, can fluctuate as the total pool size changes over time. Sky.money does not control the issuance, determination, or distribution of these rewards.  
  * The USDS stablecoin, as well as the rewards received, are supplied to a smart contract that represents the USDS pool of assets. This means that no intermediary takes custody over your assets.  


* **Access Staking Rewards.** Supply SKY tokens to the Staking Engine of the Sky Protocol to create a position, enabling SKY holder access to Staking Rewards, and more:
  * **Access Rewards.** Supply SKY tokens to access Staking Rewards, initially in the form of USDS. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.
  * **Borrow.** Borrow USDS against your supplied SKY. You can exit your borrow position at any time and draw or pay back USDS whenever you would like. The USDS Borrow Rate and Debt Ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.
  * **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own. Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions. 
  You may exit your position(s) at any time; no exit fee applies.


* **Connect with SkyLink.** SkyLink is the Sky system that provides the rails for Sky Ecosystem projects, such as [Spark](https://spark.fi/), to link assets between the Sky Protocol on Ethereum Mainnet and supported L2 networks. This enables end users on L2s, such as Base and Arbitrum for example, to tap into Sky Protocol features via the Sky Ecosystem projects’ rails.


With Sky.money, you always remain in control of your supplied assets.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Is the Sky.money web app affiliated with an exchange?',
    answer:
      'The [Sky.money web app](https://app.sky.money/) integrates via an API with the third-party decentralized exchange (DEX) [CoW Swap](https://swap.cow.fi) to facilitate trading. Eligible users of the Sky.money web app can trade USDC, USDT, ETH or SKY tokens for USDS, and USDC, USDT, ETH and USDS for SKY. These trades occur through autonomous, non-custodial smart contracts on the blockchain without relying on centralized entities. The exact trade route is determined by CoW Swap. and is not influenced by Sky.money or the Sky Protocol. Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.',
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Can I borrow assets using the Sky.money web app?',
    answer: `Eligible users of the [Sky.money web app](https://app.sky.money/) can supply SKY tokens to the Staking Engine of the Sky Protocol and choose to create one or more positions, including a position that enables them to generate and borrow USDS against supplied SKY.

If you create a borrow position, you can stake or un-stake your SKY collateral anytime, and withdraw or pay back USDS whenever you’d like. This means you are always able to actively manage your positions.

The Debt Ceiling and Borrow Rate are parameters determined by Sky Ecosystem Governance through a process of decentralized, community-driven onchain voting. The total debt increases each block according to the Borrow Rate.

USDS borrow positions are subject to liquidation risk if at any time the value of supplied collateral drops below the required threshold (liquidation price) and the position becomes undercollateralized. If this were to occur, the smart contract would automatically liquidate and auction the collateral, and any leftover collateral may be claimed through the [Unified Auctions portal](https://unified-auctions.makerdao.com/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is an eligible user?',
    answer: `Some functionalities of the Sky Protocol as accessed through the [Sky.money web app](https://app.sky.money/) frontend user interface are not available in selected jurisdictions. Please refer to the [Terms of Use](https://docs.sky.money/legal-terms) for more information.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Are there risks involved with using the Sky.money web app?',
    answer: `For details regarding potential risks using [Sky.money web app](https://app.sky.money/), please see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Is there a way to access Sky Protocol features without using the Sky.money web app?',
    answer: `The [Sky.money web app](https://app.sky.money/) is only one of the many gateways to the permissionless Sky Protocol. Some features may be restricted by the Sky.money frontend in certain jurisdictions based on regulatory considerations. Please refer to the [Terms of Use](https://docs.sky.money/legal-terms) for more information.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Does the Sky.money web app track my positions across multiple chains?',
    answer: `The Balances feature of the [Sky.money web app](https://app.sky.money/) displays all of your Sky-related assets on the network you are connected to at the moment. When you connect your crypto wallet to the Sky.money web app to access the decentralized Sky Protocol, only the tokens in the wallet that are relevant to the app are listed. With all of your Sky assets visible in one place, you can better self-manage your assets in line with your goals. Sky.money is non-custodial and permissionless.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: `Why can't I access Sky.money web app with a VPN?`,
    answer: `The [Sky.money web app](https://app.sky.money/) restricts user access from certain jurisdictions in compliance with the Terms of Use. As a result, VPNs are blocked to ensure adherence to these restrictions. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question:
      'I supplied assets on the Sky Protocol, but now I can’t access the Sky.money web app. Is my money gone? ',
    answer: `Not necessarily. You can use a block explorer to verify your assets are still on the blockchain. For details on the risks associated with cryptocurrencies, please review the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question:
      'I accidentally rejected the Terms of Use when attempting to access the Sky.money web app. Now it’s completely inaccessible. What can I do? ',
    answer: `Try deleting your cookies and reloading the page.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question:
      'I’m not in a banned country, but I see an access restricted message when trying to use Sky.money. Why?',
    answer: `Due to the modular design of the [Sky.money web app](https://app.sky.money/) for regulatory compliance purposes, you may not be able to access certain functionalities of the Sky Protocol in your jurisdiction. For more information, please refer to the [Terms of Use](https://docs.sky.money/legal-terms).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Protocol?',
    answer: `The Sky Protocol is a decentralized financial application (dApp) developed around its native USDS stablecoin. It is designed to enable the Sky Ecosystem to operate autonomously and allow users to engage with blockchain technology. 

The Sky Protocol is made up of software code deployed to the Ethereum blockchain. The code takes the form of smart contracts that are self-executing, trustless, decentralized and permissionless. These smart contracts contain the rules and agreements that constitute the framework of the Sky Protocol, and are what allow for the fast and efficient creation, transfer and validation of digital assets, as well as for Sky Ecosystem community governance.

Smart contracts work a lot like vending machines. A vending machine automatically provides a product once you feed it a coin and choose the product you want. The machine does not call someone at the vending machine company to get permission or further instructions. Similarly, a smart contract automatically provides a specific output (O) when prompted by a specific input (I). For example, a smart contract deployed to serve an ecosystem can send money to contractors (O) on the first of every month (I), without any help or interference from a payroll manager, bank or other financial institution.

The Sky Protocol features several tokens— USDS, DAI, sUSDS, SKY and MKR—plus the Sky Savings Rate, Sky Token Rewards, the Staking Engine, SkyLink, and more.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Why should I use the Sky Protocol?',
    answer: `Here are the top five reasons users choose to access the powerful features of the Sky Protocol:

1. The Sky Protocol is easy to access and explore via the [Sky.money web app](https://app.sky.money/), a non-custodial gateway to Sky Protocol features.   
2. The Sky Protocol was built from the core module of the Maker Protocol, the oldest and one of the largest and most popular decentralized finance (DeFi) protocols in the world.    
3. With Sky, you always remain in full control of your supplied assets.  
4. Transparent Sky Ecosystem Governance facilitates continual improvements of the Sky Protocol including regular independent security audits, and ongoing monitoring of the financial stability of its native stablecoin, USDS.
5. Fast-moving Sky Protocol innovation is driven in the ecosystem by Star Agents (Stars), such as [Spark](https://spark.fi/). Stars are independent decentralized projects within the larger Sky Ecosystem. They are designed to enable focused, fast-moving innovation and development. Each Star is free to have its own treasury, governance processes and community, and governance token.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'How many tokens does the Sky Protocol feature, and will others be added?',
    answer: `The Sky Protocol features four tokens: USDS, DAI, SKY and MKR. All Sky Protocol tokens are managed by Sky Ecosystem Governance through a system of decentralized onchain voting. The addition of new tokens, as well as any changes to current tokens, would need to be approved by Sky Ecosystem Governance.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'How does the Sky Protocol generate revenue for the Sky Ecosystem?',
    answer: `The Sky Protocol generates profits for the ecosystem in a few ways, including from the fees paid by users who engage directly with the Sky Protocol’s features, and from the credit lines extended to Star Agents (Stars)—independent decentralized projects within the Sky Ecosystem.
    
User fees include the following:
    
* **Borrow Rate.** The Borrow Rate applies to users who borrow USDS or DAI. For example, if a user supplies ETH as collateral to borrow 10,0000 USDS at an assumed annual rate of 9.25%, that user would pay 76 USDS [10,000 USDS × (0.0925 / 365) × 30 ≈ 76] USDS. Here is the formula: Total Fee = Loan Amount × (Borrow Rate/ 365) × Number of Days.
    
* **Liquidation Penalty.** The Liquidation Penalty is the fee a user pays when their loan becomes too risky and is liquidated (closed) automatically by the protocol. The Liquidation Penalty varies, but for ETH it is typically 13% of the loan total. The penalty exists to protect the system and encourage responsible borrowing.
    
The Borrow Rate and Liquidation Penalty are both risk parameters determined by Sky Ecosystem Governance.  
 
Profits are also generated when an end user borrows USDS via Spark Borrow. Spark is the very first Sky Star. Sky earns a fixed margin on the extended credit, and Spark earns a spread on the credit extended, meaning the end user pays slightly higher fees than Spark does. But Spark also earns a profit, helping to fuel the Sky Ecosystem. 

Additionally, SKY helps to maintain the stability of USDS. This is done through the Smart Burn Engine (SBE)—a smart contract that programmatically acquires SKY on the DeFi markets and deposits it into Sky Protocol-owned USDS/SKY liquidity pools using Sky Protocol surplus once the Surplus Buffer has hit a certain threshold set by Sky Ecosystem Governance. Depositing SKY into these pools improves token liquidity and also increases the capital buffers of the Sky Protocol. Note that the SBE no longer holds DAI and MKR. and it no longer buys MKR.

The Surplus Buffer is where all the USDS revenue earned by the Sky Protocol from fees collected by users are accrued. Using the excess USDS in this way balances its supply with its demand, which stabilizes its price.
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Explain Peg Stability Modules, how they work, and their advantages?',
    answer: `Peg Stability Modules (PSMs) are smart contracts that allow users to convert certain stablecoins directly with the Sky Protocol for USDS or DAI at a fixed rate and with relatively low fees. They are designed to maintain the stability of USDS and DAI. Unlike decentralized exchange (DEX) transactions, PSM operations do not involve trading between users. Instead, they are direct, non-custodial conversions (generate and burn) executed with the decentralized smart contracts of the Sky Protocol.

Through PSMs, USDS or DAI is obtained via predictable-rate conversion (typically a 1:1 ratio with certain stablecoins, or, in the case of sUSDS, for an amount reflecting its current price) rather than through borrowing. For example, given the existence of a USDC-backed PSM, a user could supply 100 USDC stablecoins to generate100 USDS or 100 DAI (minus fees), without taking on any debt. Given that PSM operations are facilitated on the Sky Protocol directly and not on a DEX, price slippage (i.e., the difference between the expected price of a token and the actual price when traded) is not a concern. Zero Sky protocol fees and no slippage are some of the benefits of using PSM, which adds liquidity to the assets backing the PSM. That liquidity helps to keep the value of USDS and DAI stable. 

**Introduction of PSMs**

PSMs, first introduced in the Maker Forum in late 2020, replaced the need for the low liquidation-ratio stablecoin vaults once used to borrow DAI. PSMs help keep DAI and USDS soft-pegged to the U.S. dollar when demand for either token outstrips supply by absorbing supply and demand shocks that might otherwise affect the peg and providing instant arbitrage opportunities.

**Other benefits of PSMs**

* **Liquidity.** PSMs provide reliable liquidity and stability.
* **Cost Efficiency.** The Maker stability mechanisms (e.g., stability and liquidation fees collected from users generating and borrowing DAI) were complex and costly to use. PSMs offer a simpler and more cost-effective way to maintain the pegs of both DAI and USDS.
* **Increased User Adoption.** PSMs increase DAI and USDS adoption by making the tokens easier to obtain and by maintaining stability.
* **Improved UX.** Because PSMs could continue to be a large benefit to users, they support the overall value proposition of the Sky Protocol.

**PSM considerations**

  * A PSM can only hold an asset that is pegged to the same asset as DAI or USDS because it offers 1-to-1 conversions. A PSM with a non-stable asset would become undercollateralized as soon as the market price of that non-stable asset decreased.
  * The amount of conversions a PSM can offer is limited by its Debt Ceiling and the total current amount of collateral tokens supplied to it.

For more information, review the [Peg Stability Modules section](https://sky-atlas.powerhouse.io/A.3.4.2.1.1_Peg_Stability_Module/1b2f2ff0-8d73-80b4-9ad5-c91127628179%7C57eaaad19a16975d) of the [Sky Atlas](https://sky-atlas.powerhouse.io/).
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Sky Core?',
    answer: `Sky Core is the core code and decentralized mechanisms behind the Sky Protocol’s key functions.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What are oracles?',
    answer: `The decentralized, non-custodial Sky Protocol relies on oracles, which are third-party services that provide offchain price feed data to the blockchain. Oracles support DeFi protocols in a number of ways, and offer users and end users the following:
* **Increased stability:** Reliable price data ensures efficient collateralization of stablecoins and minimizes the risk of under-collateralized borrowing, safeguarding pegs.
* **Transparency and decentralization:** The use of multiple independent oracle feeds reduces a protocol’s or decentralized exchange’s reliance on any single source, promoting transparency and trust in a system.
* **Flexibility and innovation:** The modular design of an oracle system allows for both integration of new data sources and feeds, and separation. In other words, oracles can be on- and off-boarded when needs arise.
Sky Core currently uses oracles provided by [Chronicle](https://chroniclelabs.org/). Please see the [Terms of Use](https://docs.sky.money/legal-terms) for more information on third-party services.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Who is the provider of oracles for the Sky Protocol?',
    answer: `Sky Core currently uses oracles provided by [Chronicle](https://chroniclelabs.org/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Has the Sky Protocol undergone security audits?',
    answer: `Yes. The code behind the Sky Protocol is open source and has undergone extensive [audits](https://developers.sky.money/security/security-measures/overview#audits) by highly regarded auditing firms within the industry, including ChainSecurity and Cantina . For more information, see the [User Risk Documentation](https://docs.sky.money/user-risks).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Where can I find all of the Sky Protocol’s smart contract addresses?',
    answer: `The Sky Protocol’s smart contract addresses are listed in the [Developer Documentation](https://developers.sky.money/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Where can I find information and data about Sky Protocol and its performance? ',
    answer: `Comprehensive information and data about the Sky Protocol and its performance is available through the [Sky Ecosystem Dashboard](https://info.sky.money/). This dashboard, designed by [Block Analitica](https://blockanalitica.com/), allows anyone to examine the health of the Sky Protocol in real time. You can view the total value locked (TVL) in the Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total collateral backing the system, an estimation of annual profits, and much more.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: `Where can I see the Sky Protocol’s total liquidity?`,
    answer: `The [Sky Ecosystem Dashboard](https://info.sky.money/), designed by [Block Analitica](https://blockanalitica.com/), enables anyone to examine the health of the Sky Protocol in real time. You can view the total value locked (TVL) in the Sky Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total amount of collateral backing the system, an estimation of annual rewards, and much more.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Ecosystem, and what does it offer users?',
    answer: `The Sky Ecosystem consists of the community and projects that support the Sky Protocol, a decentralized financial application (dApp) developed around its native USDS stablecoin and designed to enable the Sky Ecosystem to operate autonomously and enable users to engage with blockchain technology.

Governance of the Sky Ecosystem and Sky Protocol relies on a decentralized, multi-faceted, detailed and transparent system of decision-making that includes discussion, polling and onchain voting. The Sky Ecosystem Governance community is broad and diversified, comprising individuals and entities from around the world who hold SKY tokens.
The Sky Ecosystem also includes Star Agents (Stars). Stars are autonomous and independent decentralized projects within the larger Sky Ecosystem. They are designed to enable focused, fast-moving innovation and development.
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Is the Sky Ecosystem the same as the Sky Protocol?',
    answer: `No. The Sky Ecosystem consists of the community and projects that support the Sky Protocol, a decentralized financial application (dApp) developed around its native USDS stablecoin and designed to enable the Sky Ecosystem to operate autonomously and enable users to engage with blockchain technology.

The Sky Ecosystem also includes Star Agents (Stars). Stars are autonomous and independent decentralized projects within the larger Sky Ecosystem. They are designed to enable focused, fast-moving innovation and development.

The Sky Protocol is made up of software code deployed to the Ethereum blockchain. The code takes the form of smart contracts that are self-executing, trustless, decentralized and permissionless. These smart contracts contain the rules and agreements that constitute the framework of the Sky Protocol, and are what allow for the fast and efficient creation, transfer and validation of digital assets, as well as for Sky Ecosystem community governance.

Smart contracts work a lot like vending machines. A vending machine automatically provides a product once you feed it a coin and choose the product you want. The machine does not call someone at the vending machine company to get permission or further instructions. Similarly, a smart contract automatically provides a specific output (O) when prompted by a specific input (I). For example, a smart contract deployed to serve an ecosystem can send money to contractors (O) on the first of every month (I), without any help or interference from a payroll manager, bank or other financial institution.

The Sky Protocol features several tokens— USDS, DAI, sUSDS, SKY and MKR—plus the Sky Savings Rate, Sky Token Rewards, the Staking Engine, SkyLink, and more.
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Ecosystem Dashboard?',
    answer: `The [Sky Ecosystem Dashboard](https://info.sky.money/), designed by [Block Analitica](https://blockanalitica.com/), allows anyone to examine the health of the decentralized Sky Protocol in real time. Users can view the total value locked (TVL) in the Protocol, TVL in the Sky Savings Rate module, TVL in the Sky Token Rewards module, the total collateral backing the system, an estimation of annual profits, and much more. For more on the Dashboard, see this [blog post](https://blockanalitica.substack.com/p/the-sky-risk-and-analytics-dashboard) by Block Analitica.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Where can I make Sky Ecosystem Governance proposals? ',
    answer: `You can propose a change to the Sky Protocol or Sky Ecosystem Governance in the [Sky Forum](https://forum.sky.money/), where it can be reviewed by the community and debated. Depending on the results of community discussion in the Forum, your proposal may be placed in the [Sky Governance Voting portal](https://vote.sky.money/) and voted upon.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Forum, and how does it differ from other discussion platforms? ',
    answer: `The [Sky Forum](https://forum.sky.money/) (formerly the Maker Forum) is a public discussion platform group that includes conversation threads, tagging, categorization and active moderation. It is formally used for discussions focused mainly on Sky Ecosystem Governance and risk. Other platforms used by the Sky Ecosystem community, such as [Discord](https://discord.com/invite/skyecosystem) and X ([@SkyEcosystem](https://x.com/SkyEcosystem)), are much less formal, more ad hoc.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: ' How is the Sky Ecosystem designed for community-driven innovation?',
    answer: `In addition to being designed for security, scalability and governance, the Sky Protocol’s architecture is built to enhance interoperability within the larger decentralized finance (DeFi) ecosystem. 

The Sky Protocol’s native USDS stablecoin powers the open Sky Ecosystem and is designed to scale. Sky provides liquidity for various DeFi applications, promoting efficient trading and enhancing the overall liquidity of the DeFi ecosystem. The composability features of the Protocol empower developers to build a richer DeFi environment by leveraging the tokens and rewards of the Sky Ecosystem, leading to integrations that offer new functionalities and efficiencies.
Visit the [Sky.money website](https://sky.money/) or the [Developer Documentation](https://developers.sky.money/) for more info.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Why rebrand MakerDAO to the Sky Ecosystem?',
    answer: `Maker began in 2014, as a small community-governed project responsible for developing the Maker Protocol on the Ethereum blockchain. Maker quickly grew to find success with the development of its DAI stablecoin. DAI enabled the Maker Protocol to become the first decentralized finance (DeFi) liquidity protocol with a product-market fit. The Maker Protocol grew to such an extent that by 2021, effective governance by its monolithic community proved challenging. 

While the complexity of Maker had been necessary to pursue the best opportunities in the market, the community felt that there existed scaling issues that ultimately held the project back. The rebrand of Maker to the Sky Ecosystem, in 2024, took the former Maker Protocol to the next level with technology that focuses on resilience and simplicity while remaining decentralized and non-custodial. In short, the Sky Protocol features products and tools, organizational restructuring, and token upgrades — i.e., USDS, the upgraded version of DAI; and SKY, the upgraded version of MKR. 

These advancements have vastly improved user experiences and enhanced network resilience while creating more alignment between product users, governance participants and the ecosystem as a whole. 
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Are Sky and Maker the same?',
    answer: `The Sky Ecosystem is the rebrand of Maker. Maker became Sky in 2024, taking the Maker Protocol to the next level with new technology that focuses on resilience and simplicity while remaining decentralized and non-custodial. The Sky Protocol is maintained by Sky Ecosystem Governance and is easy to access and explore via the [Sky.money web app](https://sky.money/), a gateway to the Protocol. `,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What happens if I never upgrade my MKR?',
    answer: `All MKR holders are encouraged to upgrade to SKY promptly to maintain the ability to participate in key decisions shaping the Sky Protocol. Upgrading in a timely fashion ensures reduced governance complexity and a more effective, efficient and resilient ecosystem for all. Please note that while MKR will continue to exist, users will not be able to revert back to MKR from SKY via the Sky Protocol.

To facilitate a smooth and prompt transition, Sky Ecosystem Governance [voted to introduce a Delayed Upgrade Penalty](https://vote.makerdao.com/polling/QmTVd4iq). The penalty, which will [begin sometime in September 2025](https://upgrademkrtosky.sky.money), reduces the amount of SKY received per MKR upgraded at a rate of 1%, and increases by 1% every three months thereafter until it reaches 100% in 25 years. The penalty will not apply to anyone upgrading their MKR to SKY before it kicks in.

Here are some examples of how the Delayed Upgrade Penalty works:


  * If a user upgrades 1 MKR before the Delayed Upgrade Penalty takes effect, the user will not pay a penalty and will receive 24,000 SKY.

  * If a user upgrades 1 MKR three months after the Delayed Upgrade Penalty takes effect, the penalty applies at 1%. So, the amount the user will receive as a result of the upgrade will be 23,760 SKY (24,000 minus 1%).  

  * If a user upgrades 1 MKR six months after the Delayed Upgrade Penalty takes effect, the penalty applies at 2%, meaning the user will receive 23,520 SKY (24,000 minus 2%).

Please note that blockchain, or gas, fees for using the Ethereum network apply when upgrading. Blockchain transaction fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. 

For upgrade details and step-by-step upgrade instructions, please visit the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Will the MKR I hold lose its value if I never upgrade to SKY?',
    answer: `All MKR holders are encouraged to upgrade to SKY promptly to maintain the ability to participate in key decisions shaping the Sky Protocol. Upgrading in a timely fashion ensures reduced governance complexity and a more effective, efficient and resilient ecosystem for all. Please note that while MKR will continue to exist, users will not be able to revert back to MKR from SKY via the Sky Protocol.

To facilitate a smooth and prompt transition, Sky Ecosystem Governance [voted to introduce a Delayed Upgrade Penalty](https://vote.makerdao.com/polling/QmTVd4iq). The penalty, which will [begin sometime in September 2025](https://upgrademkrtosky.sky.money), reduces the amount of SKY received per MKR upgraded at a rate of 1%, and increases by 1% every three months thereafter until it reaches 100% in 25 years. The penalty will not apply to anyone upgrading their MKR to SKY before it kicks in.

Here are some examples of how the Delayed Upgrade Penalty works:


  * If a user upgrades 1 MKR before the Delayed Upgrade Penalty takes effect, the user will not pay a penalty and will receive 24,000 SKY.

  * If a user upgrades 1 MKR three months after the Delayed Upgrade Penalty takes effect, the penalty applies at 1%. So, the amount the user will receive as a result of the upgrade will be 23,760 SKY (24,000 minus 1%).  

  * If a user upgrades 1 MKR six months after the Delayed Upgrade Penalty takes effect, the penalty applies at 2%, meaning the user will receive 23,520 SKY (24,000 minus 2%).

Please note that blockchain, or gas, fees for using the Ethereum network apply when upgrading. Blockchain transaction fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. 

For upgrade details and step-by-step upgrade instructions, please visit the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Can I convert my SKY back to MKR?',
    answer: `While MKR will continue to exist, it is not possible to revert back to MKR from SKY via the Sky Protocol.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'How do I vote with SKY?',
    answer: `SKY token holders can use their SKY to participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting, and/or to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Voting with MKR is no longer possible.
 
**Direct Voting with SKY**
SKY holders participate directly in Sky Ecosystem Governance by supplying SKY to the Governance Contract of the Sky Protocol via the [Sky Governance Voting Portal](https://vote.sky.money/). Direct voting is weighted, meaning that voting power is proportional to the number of SKY tokens voters supply to that contract. For example, if 50 voters supply a total of 600 SKY in favor of proposal A, while 100 voters supply a total of 400 SKY in support of proposal B, then Proposal A would win with 60% of the vote. The number of people who voted for a proposal is irrelevant; rather, the combined power of SKY tokens behind a proposal decides the winner.

**Delegating with SKY**
SKY holders can use their tokens to entrust their voting power to one or more delegates via the Sky Governance Voting portal or the Staking Engine of the Sky Protocol. Sky Ecosystem Governance delegates are chosen and approved by governance vote. Creating a new delegate account can only be done via the Sky Governance Voting Portal.

Delegates in receipt of token voting power can never directly access any SKY tokens delegated to them. Throughout the delegation process, users always own and are in control of their SKY tokens, and can change their delegate(s) at any time (subject to the Sky Protocol’s rules that prevent double voting or misuse of delegated voting power). Delegating voting power may be a useful option for SKY token holders who have limited time to allocate to the process and who want to save on the cost of gas involved in voting on their own.
`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Does the MKR to SKY upgrade affect DAI and USDS?',
    answer: `No. DAI and USDS are not affected by the MKR to SKY upgrade. Eligible users of the [Sky.money web app](https://sky.money/) can continue to upgrade any amount of DAI to USDS (and revert USDS to DAI) at any time without a fee. Please note, however, that blockchain fees for using the Ethereum network apply when upgrading. Blockchain transaction fees are neither controlled, imposed nor received by Sky.money or the Sky Protocol. `,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Are DAI and MKR going away?',
    answer: `No. Sky Ecosystem Governance has not indicated that the DAI and MKR will go away. You can continue to hold DAI exactly as you have in the past, or you can upgrade it to USDS, which may enable more uses than DAI. 

SKY is the technical and functional evolution of MKR, inheriting and extending the governance rights and functionalities previously held by MKR. It reflects the community’s desire to streamline governance, increase voter participation, and support the ecosystem’s long-term growth and scalability. 

MKR holders can upgrade their tokens to SKY at the rate of 1:24,000 (1 MKR = 24,000 SKY). For upgrade details, see the [MKR to SKY Upgrade Hub](https://upgrademkrtosky.sky.money). For the most current information on all things Sky, join the community conversations in the [Sky Forum](https://forum.sky.money/), [Sky Discord](https://discord.com/invite/skyecosystem), and [Sky Builder Discord](https://discord.gg/skybuilder), where the Sky community dives deep into Sky Stars, the Star Agent Framework and Sky Ecosystem Governance.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Sky Ecosystem governance, and how does it work?',
    answer: `Sky Ecosystem Governance relies on a decentralized, multi-faceted, detailed and transparent system of decision-making that includes discussion, polling and onchain voting to maintain the Sky Protocol and the ecosystem. Governance is shared among a broad and diversified community comprising individuals and entities from around the world who hold Sky Ecosystem Governance tokens, SKY. 

Any Sky Ecosystem governance token holder can propose changes and additions to the Sky 
Protocol and ecosystem. Examples of changes and additions to the Sky Protocol and ecosystem may include, but are not limited to, the following:

  * Technical changes and additions to the Sky Protocol

  * Changes and additions to rules and processes outside the technical layer of the Sky Protocol, such as governance procedures or compensation amounts for delegates.

  * Adjustments to all risk parameters. 



**Voting with SKY**
SKY is the sole governance token of the Sky Ecosystem. SKY token holders can use their SKY to participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting, and/or to to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Voting with MKR is no longer possible.

**Direct Voting with SKY**
SKY holders participate directly in Sky Ecosystem Governance by supplying SKY to the Governance Contract of the Sky Protocol via the [Sky Governance Voting Portal](https://vote.sky.money/). Direct voting is weighted, meaning that voting power is proportional to the number of SKY tokens voters supply to that contract. For example, if 50 voters supply a total of 600 SKY in favor of proposal A, while 100 voters supply a total of 400 SKY in support of proposal B, then Proposal A would win with 60% of the vote. The number of people who voted for a proposal is irrelevant; rather, the combined power of SKY tokens behind a proposal decides the winner.

**Delegating with SKY**
SKY holders can use their tokens to entrust their voting power to a contract they own or one or more delegates via the Sky Governance Voting portal or the Staking Engine of the Sky Protocol (more on the Staking Engine below). Sky Ecosystem Governance delegates are chosen and approved by governance vote. Creating a new delegate account can only be done via the Sky Governance Voting Portal.

Delegates in receipt of token voting power can never directly access any SKY tokens delegated to them. Throughout the delegation process, users always own and are in control of their SKY tokens, and can change their delegate(s) at any time (subject to the Sky Protocol’s rules that prevent double voting or misuse of delegated voting power). 

Delegating voting power may be a useful option for SKY token holders who have limited time to allocate to the process and who want to save on the cost of gas involved in voting on their own.  

**Staking SKY to Delegate**
When you supply SKY tokens to the Staking Engine using the [Sky.money web app](https://sky.money/), you can access Staking Rewards and choose to create one or more positions, including positions that enable you to generate and borrow USDS against your supplied SKY and to delegate the voting power your SKY tokens provide. Here’s a brief overview:

  * **Access Rewards.** Supply SKY tokens to access Staking Rewards, initially in the form of USDS. Staking Reward rates are determined by Sky Ecosystem Governance through the process of decentralized onchain voting.

  * **Borrow.** Borrow USDS against your supplied SKY. You can exit your borrow position at any time and withdraw or pay back USDS whenever you would like. The USDS Borrow Rate and Debt Ceiling are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your total debt increases each block according to the Borrow Rate.

  * **Delegate.** Transfer the voting power of your supplied SKY tokens to a recognized delegate or a contract that you own. Your chosen delegate can then participate in the Sky Ecosystem Governance voting process on your behalf. You can choose one delegate per position, meaning if you want to entrust your SKY to two different delegates using the Staking Engine, you will need to create two separate positions.     

You may exit your Staking positions at any time; no exit fee applies. The Staking Reward rate and Borrow rate are determined by Sky Ecosystem Governance through the process of decentralized onchain voting. Your SKY, as well as any Staking Rewards that you accumulate, are supplied to a non-custodial smart contract, such that no intermediary ever takes custody of those tokens. With Sky, you always remain in control of your assets.

For a deeper dive into the facets and checks and balances of governance, please refer to the [Sky Forum](https://forum.sky.money/), the [Sky Governance Voting Portal](https://vote.sky.money/) and the [Sky Atlas](https://sky-atlas.powerhouse.io/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Can I participate in Sky Ecosystem Governance using both MKR and SKY?',
    answer: `No. SKY is the sole governance token of the Sky Ecosystem and the upgrade of MKR. Only SKY token holders can use their SKY to participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting, and/or to transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Voting with MKR is no longer possible.`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is Spark?',
    answer: `[Spark](https://spark.fi/) is the first Star Agent (Star) focused on decentralized finance (DeFi) innovation. It is a gateway to the decentralized, non-custodial Sky Protocol and, like all Stars, an independent decentralized project within the larger Sky Ecosystem. For detailed information on Spark’s offerings and governance, review its [documentation](https://docs.spark.fi/). `,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Spark Liquidity Layer',
    answer: `The Spark Liquidity Layer is a solution that utilizes smart contracts to deploy, withdraw and balance stablecoin liquidity across blockchains on demand. It distributes USDS, a native stablecoin of the decentralized Sky Protocol, and sUSDS, a native savings token for eligible users. 
When you supply USDS to the Sky Savings Rate module, you access the Sky Savings Rate and receive sUSDS tokens. These sUSDS tokens serve as a digital record of your USDS interaction with the module and any value accrued to your position. Note that some Sky Protocol features are not available in selected jurisdictions.
In short, the Spark Liquidity Layer dynamically balances the mix of a highly liquid stablecoin—USDC— with a savings generating stablecoin—sUSDS—across networks in real time. This ensures liquidity is provided precisely when users need it rather than being locked idly across networks. For more information, see [Spark Documentation](https://docs.spark.fi/user-guides/spark-liquidity-layer).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the Sky Atlas?',
    answer: `The [Sky Atlas](https://sky-atlas.powerhouse.io/) is the definitive rulebook of the Sky Ecosystem, as determined by Sky Ecosystem Governance.  It is a Sky artifact—a data structure encompassing Sky documents—which exists to stabilize and streamline the governance process to serve the evolving needs of the ecosystem. The Atlas is a partially immutable work in progress that will continue to be refined through an improvement proposal and decentralized voting framework until Sky Ecosystem Governance determines that modifications are no longer necessary. `,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is the difference between direct voting and delegating voting power?',
    answer: `With SKY tokens comes voting power. Every SKY holder can participate directly in Sky Ecosystem Governance through a system of decentralized onchain voting or  transfer the voting power of their SKY tokens to a recognized delegate or a contract that they own. Sky Ecosystem Governance delegates are chosen and approved by governance vote. Creating a new delegate account can only be done via the [Sky Governance Voting Portal](https://vote.sky.money/).

**Direct Voting with SKY**

SKY holders participate directly in Sky Ecosystem Governance by supplying SKY to the Governance Contract of the Sky Protocol via the Sky Governance Voting Portal. Direct voting is weighted, meaning that voting power is proportional to the number of SKY tokens voters supply to that contract. For example, if 50 voters supply a total of 600 SKY in favor of proposal A, while 100 voters supply a total of 400 SKY in support of proposal B, then Proposal A would win with 60% of the vote. The number of people who voted for a proposal is irrelevant; rather, the combined power of SKY tokens behind a proposal decides the winner.

**Delegating with SKY**

SKY holders can use their tokens to entrust their voting power to one or more delegates via the Sky Governance Voting portal or they can use the [Sky.money web app](https://app.sky.money/) to delegate via the Staking Engine of the Sky Protocol. 

Delegates in receipt of token voting power can never directly access any SKY tokens delegated to them. Throughout the delegation process, users always own and are in control of their SKY tokens, and can change their delegate(s) at any time (subject to the Sky Protocol’s rules that prevent double voting or misuse of delegated voting power). Delegating voting power may be a useful option for SKY token holders who have limited time to allocate to the process and who want to save on the cost of gas involved in voting on their own.  

For a deep dive into Sky Ecosystem Governance, please refer to the [Sky Atlas](https://sky-atlas.powerhouse.io/), the [Sky Governance Voting Portal](https://vote.sky.money/) and the [Sky Forum](https://forum.sky.money/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'What is onchain voting?',
    answer: `Onchain voting is a method used by some decentralized projects—Sky included—to facilitate decision-making and governance processes. This type of voting occurs directly on the blockchain, ensuring a transparent and secure democratic voting process. Onchain voting empowers SKY token holders to have a direct impact on the development and operation of the Sky Protocol.

For a deep dive into Sky Ecosystem Governance, please refer to the [Sky Atlas](https://sky-atlas.powerhouse.io/), the [Sky Governance Voting Portal](https://vote.sky.money/) and the [Sky Forum](https://forum.sky.money/).`,
    categories: ['Sky Protocol & Ecosystem']
  },
  {
    question: 'Where can I go for technical help or to ask questions that aren’t answered here?',
    answer: `For answers to technical questions about the Sky Protocol, please refer to the [Developer Documentation](https://developers.sky.money/). 

You may also reach out to community members with general questions on X ([@SkyEcosystem](https://x.com/SkyEcosystem)) and on [Sky Discord](https://discord.com/invite/skyecosystem).`,
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
    answer: `When you hold MKR or SKY tokens, you maintain the right to participate in the process of Sky ecosystem governance voting. That means that you have the ability to contribute to the community-driven, decentralised ecosystem decision-making process, which occurs through onchain voting.
      
The voting power delegation feature of the Seal Engine of the Sky Protocol enables you to entrust your voting power to a delegate of your choosing, who can then vote in the Sky ecosystem governance process on your behalf. You can choose one delegate per sealed MKR or SKY position. If you want to entrust your MKR or SKY to two delegates using the Seal Engine, you will need to create two separate positions.
      
Delegates in receipt of token voting power can never directly access any tokens delegated to them, including sealed tokens. Throughout the delegation process, you always own and are in control of your sealed tokens, and you can change your delegate at any time.Sealing to delegate your voting power may be a useful option for governance token holders who have limited time to allocate to the process, who want to save on the cost of gas involved in voting on their own, and who also want to earn Seal Rewards.`,
    categories: ['Seal Engine']
  },
  {
    question: 'Where can I learn about Sky ecosystem governance?',
    answer: `For a deep dive into the facets and checks and balances of Sky ecosystem governance, please refer to the [Sky Forum](https://forum.sky.money/), the [Sky Voting Portal](https://vote.makerdao.com/) and the [Sky Atlas](https://sky-atlas.powerhouse.io/)—the source of truth behind the Sky project, superseding and overriding all other competing rules or decisions.`,
    categories: ['Seal Engine']
  }
];

const skyLink: FAQItem[] = [
  {
    question: 'What is SkyLink, and how does it work?',
    answer: `SkyLink is the official Sky bridge system that enables users to move their Ethereum mainnet-based assets between supported L2 networks. Bridged assets are non-custodially locked in a smart contract of the Sky Protocol, and an equivalent amount of assets is generated on the destination chain.  

If you have shied away from the Ethereum blockchain due to the high price of gas, SkyLink introduces reduced fees and faster transaction speeds.`,
    categories: ['SkyLink']
  },
  {
    question: 'What can I do with my assets once they are bridged to an L2 network?',
    answer: `On many L2s, you can perform the same types of transactions on Ethereum L2s as on Ethereum Mainnet— i.e., trade tokens, use DeFi applications (dApps), buy NFTs, etc.— but with reduced  fees and faster transaction speeds. Many popular dapps have L2 versions, though not all are available on every L2. Please note that some features of Sky.money or the Sky Protocol will not be available on L2s.`,
    categories: ['SkyLink']
  },
  {
    question: 'What are Layer 2 networks, and how do they benefit users?',
    answer: `Layer 2 (L2) networks are blockchain scalability solutions built on top of existing blockchains (Layer 1 or L1 networks). While L2s exist across several blockchains, they are most commonly used with the Ethereum blockchain, where they are designed to solve two major problems: high transaction (gas) fees and slow transaction speeds.

L2 solutions usually work by processing transactions on their own blockchain, and then bundling those transactions and submitting them back to the underlying L1 as a single transaction for final validation, which drastically increases the throughput. 

Moving assets between L1 and L2 networks requires specialised protocols called bridges. While bridges can be designed to connect any two blockchain networks, L2 networks are specifically designed to inherit their security from their L1 while delivering improved efficiency. 

L2s used with Ethereum not only offer users much lower fees (often 95%+ cheaper than Mainnet) and much faster speeds (transactions can be near-instant), they can enable users to transact using the wallets and tools they are already familiar with. There is a tradeoff, however. Users bridging their assets between L1 and L2 networks generally must pay a transaction fee. For users making multiple transactions, the savings may  outweigh that cost. Also, L1 networks may  provide stronger security guarantees compared to L2s, which often rely on centralised components and actors, which could potentially introduce points of failure.
`,
    categories: ['SkyLink']
  },
  {
    question: 'How do USDS and DAI maintain stability to stay reliably close in value to $1?',
    answer: `Special types of smart contracts called Peg Stability Modules (PSMs) are designed to maintain the stability of Sky Protocol stablecoins, USDS and DAI. PSMs allow users to trade certain stablecoins directly with Sky stablecoins at a fixed rate and with relatively low fees. Unlike decentralised exchange (DEX) transactions, PSM trades do not involve trading between users. Instead, they are direct, non-custodial exchanges executed with the decentralised smart contracts of the Sky Protocol . 

Through PSMs, USDS or DAI is obtained via predictable-rate trades (typically a 1:1 ratio with certain stablecoins, or, in the case of sUSDS, for an amount reflecting its current price) rather than through borrowing. For example, given the existence of a USDC-backed PSM, a user could trade 100 USDC stablecoins for 100 USDS or 100 DAI (minus fees), without taking on any debt. Given that PSM trades are facilitated on the Sky Protocol directly and not on a DEX, price slippage (i.e., the difference between the expected price of a token and the actual price when traded) is not a concern. Low (or zero) fees and no slippage are some of the benefits of  PSM trading, which adds liquidity to the assets backing the PSM. That liquidity helps to keep the value of USDS and DAI stable.
`,
    categories: ['SkyLink']
  }
];

export const faqDataset: FAQItem[] = [
  ...cryptoGeneral,
  ...skyEcosystem,
  ...skyTokens,
  ...upgradeTrade,
  ...skySavingsRate,
  ...skyTokenRewards,
  ...seal,
  ...skyLink
];
