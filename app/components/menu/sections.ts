export const menuSections: Record<
  string,
  {
    title: string;
    description?: string;
    href: string;
    isExternal?: boolean;
  }[]
> = {
  explore: [
    {
      title: 'All Features',
      href: '/features'
    },
    {
      title: 'Upgrade',
      href: 'features#upgrade'
    },
    {
      title: 'Trade',
      href: 'features#trade'
    },
    {
      title: 'Sky Token Rewards',
      href: 'features#rewards'
    },
    {
      title: 'Sky Savings Rate',
      href: 'features#savings'
    },
    {
      title: 'Seal Engine',
      href: 'features#seal'
    },
    {
      title: 'SkyLink',
      href: 'features#skylink'
    }
  ],
  participate: [
    // {
    //   title: 'Stars',
    //   href: '#stars'
    // },
    {
      title: 'Governance',
      href: 'https://vote.makerdao.com/',
      isExternal: true
    },
    {
      title: 'Community',
      href: 'https://forum.makerdao.com/',
      isExternal: true
    }
  ],
  build: [
    {
      title: 'Developer Documentation',
      href: 'https://developers.sky.money',
      isExternal: true
    }
  ]
};

export const internalLinks: Record<string, string> = {
  ['FAQs']: '/faq'
  // about: '/about'
};

export const sections = [...Object.keys(menuSections), ...Object.keys(internalLinks)];
export const sectionsTitle: Record<string, string> = {
  explore: 'Explore',
  participate: 'Participate',
  build: 'Build',
  FAQs: 'FAQs'
  // about: 'About'
};
