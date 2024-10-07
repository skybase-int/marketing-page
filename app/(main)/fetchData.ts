import { formatNumber, formatPercent } from '@/app/utils';

export interface FetchedData {
  users: string;
  totalTvl: string;
  rewardsApy: string;
  skyPrice: string;
  rewardsTvl: string;
  saveApy: string;
  saveTvl: string;
  usdsPrice: string;
  ethPrice: string;
  usdcPrice: string;
  usdtPrice: string;
}

export const fetchData = async (): Promise<FetchedData> => {
  try {
    if (!process.env.API_URL) throw new Error('API_URL is not defined');
    const response = await fetch(process.env.API_URL, {
      next: { revalidate: 300 } //5 minutes
    });
    const data = await response.json();

    // Flatten the array of objects into a single object
    const flattenedData = data.reduce(
      (acc: Record<string, string | number>, obj: Record<string, string | number>) => ({ ...acc, ...obj }),
      {}
    );

    return {
      users:
        flattenedData.sky_ecosystem_wallet_count !== undefined
          ? formatNumber(parseInt(flattenedData.sky_ecosystem_wallet_count))
          : '',
      totalTvl:
        flattenedData.sky_ecosystem_tvl !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.sky_ecosystem_tvl))
          : '',
      rewardsApy:
        flattenedData.sky_farm_apy !== undefined ? formatPercent(parseFloat(flattenedData.sky_farm_apy)) : '',
      skyPrice:
        flattenedData.sky_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.sky_price_usd))
          : '',
      rewardsTvl:
        flattenedData.total_reward_tvl !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.total_reward_tvl), { compact: true, maxDecimals: 0 })
          : '',
      saveApy:
        flattenedData.sky_savings_rate_apy !== undefined
          ? formatPercent(parseFloat(flattenedData.sky_savings_rate_apy), { maxDecimals: 18 })
          : '',
      saveTvl:
        flattenedData.sky_savings_rate_tvl !== undefined
          ? '$' +
            formatNumber(parseFloat(flattenedData.sky_savings_rate_tvl), { compact: true, maxDecimals: 0 })
          : '',
      usdsPrice:
        flattenedData.usds_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.usds_price_usd), { maxDecimals: 2 })
          : '',
      usdcPrice:
        flattenedData.usdc_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.usdc_price_usd), { maxDecimals: 2 })
          : '',
      ethPrice:
        flattenedData.weth_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.weth_price_usd), { maxDecimals: 0 })
          : '',
      usdtPrice:
        flattenedData.usdt_price_usd !== undefined
          ? '$' + formatNumber(parseFloat(flattenedData.usdt_price_usd), { maxDecimals: 2 })
          : ''
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      users: '',
      totalTvl: '',
      rewardsApy: '',
      skyPrice: '',
      rewardsTvl: '',
      saveApy: '',
      saveTvl: '',
      usdsPrice: '',
      ethPrice: '',
      usdcPrice: '',
      usdtPrice: ''
    };
  }
};