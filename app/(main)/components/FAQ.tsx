import * as React from 'react';
import { Heading, Text } from '@/app/components/Typography';
import { EmphasisHeading } from '@/app/components/EmphasisHeading';
import { ButtonArrow } from '@/app/components/ui/button';
import { useRef, useState } from 'react';
import { Plus } from '@/app/components/icons';
import { motion } from 'framer-motion';
import { useHeaderInView } from '@/app/hooks/useHeaderInView';
import { FAQMarkdownRenderer } from '@/app/components/markdown/FAQMarkdownRenderer';
import { InternalLink } from '@/app/components/InternalLink';

type Question = {
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    question: 'What is the Sky ecosystem?',
    answer:
      'The Sky ecosystem consists of the community and projects that support the decentralised Sky Protocol. The ecosystem’s community participates in a transparent system of governance that uses a decentralised onchain voting process supported by two governance tokens, SKY and MKR. The Sky ecosystem also includes Sky Stars—independent decentralised projects designed to enable focused, fast-moving innovation and growth.'
  },
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

With Sky.money, you always remain in control of your supplied funds.`
  },
  {
    question: 'How do I get USDS?',
    answer:
      'You can use Sky.money as a gateway to the Sky Protocol and to then access the permissionless liquidity pools, or similar onchain solutions, to trade USDC, USDT, ETH or SKY for USDS. You can also upgrade your DAI to USDS subject to any applicable gas fees for using the Ethereum blockchain network, which powers the Sky Protocol. That fee is not controlled, imposed, or received by Sky.money or the Sky Protocol. You might be able to obtain USDS on various crypto exchanges that decide to make it available on their platforms.'
  },
  {
    question: 'Do I have to upgrade my DAI and MKR?',
    answer: `No. DAI and MKR will remain unaltered in their original forms for the foreseeable future. You can continue to hold and use both tokens exactly as you have in the past. While each has an upgraded Sky version, upgrading is optional. But only by holding USDS and SKY can you utilise the Sky Protocol functionalities available in your region.

Note that decisions regarding the Sky Protocol, its tokens and features are made by Sky ecosystem governance token holders through a system of decentralised on-chain voting.`
  },
  {
    question: 'Why rebrand Maker to the Sky ecosystem?',
    answer: `MakerDAO began in 2014, as a small community-governed project responsible for developing the Maker Protocol on the Ethereum blockchain. Maker quickly grew to find success with the development of its DAI stablecoin. DAI enabled the Maker Protocol to become the first decentralised finance (DeFi) liquidity protocol with a product-market fit. Maker Protocol grew to such an extent that by 2021, effective governance by its monolithic community proved challenging. Maker's decentralised governance processes, especially, had become difficult to manage. 

While the complexity of Maker had been necessary to pursue the best opportunities in the market, the community felt that there existed scaling issues that ultimately held the project back. The new decentralised Sky ecosystem, launched in 2024, has taken the former Maker decentralised protocol to the next level with new technology that focuses on resilience and simplicity while remaining non-custodial. In short, the Sky Protocol presents token upgrades, tools and organisational restructuring, including but not limited to:

* The introduction of new products, tools and powerful token upgrades, including the USDS stablecoin, that enable users to save and access rewards without giving up control through non-custodial savings. USDS is the upgraded version of DAI.  
* A DeFi front end website called Sky.money, which provides a user interface that enables eligible users to access the decentralised Sky Protocol. Sky.money is a non-custodial gateway to the Sky Protocol. What results is a clearly defined relationship between the Sky ecosystem, the Sky Protocol, and Sky.money.  
* Sky Stars—independent, decentralised projects within the larger Sky ecosystem.

Sky aims to create more alignment between product users, governance participants, and the ecosystem as a whole.`
  }
];

function FAQItem({ question, isLast }: { question: Question; isLast: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full cursor-pointer py-7 ${isLast ? '' : 'border-b border-gray-300'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <Text variant="p1">{question.question}</Text>
        <Plus isOpen={isOpen} size={15} grayOnClose={true} />
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-5">
          <FAQMarkdownRenderer pVariant="p3" ulVariant="unorderedSmall" markdown={question.answer} />
        </div>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  const targetRef = useRef(null);
  useHeaderInView(targetRef, 'light');

  return (
    <div ref={targetRef} className="px-3 pb-8 pt-16 tablet:px-5 desktop:px-10">
      <div className="flex flex-wrap justify-between gap-5 desktop:flex-nowrap">
        <div className="flex w-full flex-wrap items-center justify-between gap-8 border-t border-gray-300 pt-5 tablet:pt-6 desktop:w-1/2 desktop:flex-col desktop:items-stretch">
          <div className="mb-10 w-full">
            <Heading tag="h2">Got questions?</Heading>
            <EmphasisHeading text="" emphasisText="Find answers here." tag="h2" />
            <Text variant="p3" className="mb-7 mt-5">
              Crypto is hard. Sky.money makes it easier.
            </Text>
            <InternalLink href="/faq">
              <ButtonArrow variant="aurora-3">View all FAQs</ButtonArrow>
            </InternalLink>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between border-t border-black desktop:w-1/2 desktop:flex-col desktop:items-stretch">
          {questions.map((question, index) => (
            <FAQItem key={index} question={question} isLast={index === questions.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
