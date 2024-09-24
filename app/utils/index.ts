//avoid using 3 decimals (because 1.000 looks like 1 or 1000 depending on language)
const DEFAULT_DECIMALS = 2;
const SMALL_NUM_DECIMALS = 4;
const LARGE_NUM_DECIMALS = 0;
const COMPACT_LARGE_NUM_DECIMALS = 2;

const SMALL_NUM_CUTOFF = 10;
const LARGE_NUM_CUTOFF = 1000;

type FormatOptions = {
  compact?: boolean;
  amount?: number;
  maxDecimals?: number;
};

function createNumberFormatter(options?: FormatOptions) {
  const locale = 'en-US';
  const amount = options?.amount ? Math.abs(options?.amount) : undefined;
  const maxDecimals =
    options?.maxDecimals !== undefined
      ? options.maxDecimals
      : amount === undefined
      ? DEFAULT_DECIMALS
      : amount < SMALL_NUM_CUTOFF
      ? SMALL_NUM_DECIMALS
      : amount < LARGE_NUM_CUTOFF
      ? DEFAULT_DECIMALS
      : options?.compact
      ? COMPACT_LARGE_NUM_DECIMALS
      : LARGE_NUM_DECIMALS;
  return new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDecimals,
    notation: options?.compact ? 'compact' : undefined,
    compactDisplay: options?.compact ? 'short' : undefined
  });
}

function createPercentFormatter(options?: FormatOptions) {
  const locale = 'en-US';
  const maxDecimals = options?.maxDecimals ?? 2;
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: maxDecimals
  });
}

export function formatNumber(amount: number, options?: FormatOptions): string {
  const absAmount = Math.abs(amount);
  const smallestNumber = 1 / Math.pow(10, SMALL_NUM_DECIMALS); //0.0001 if SMALL_NUM_DECIMALS is 4
  const lessThanSmallest = absAmount > 0 && absAmount < smallestNumber / 2;
  const amountToFormat = lessThanSmallest ? smallestNumber : amount;
  const result = createNumberFormatter({ ...options, amount: amountToFormat }).format(
    amountToFormat
  ) as `${number}`;
  const formattedResult = lessThanSmallest ? '<' + result : result;
  return formattedResult.toLowerCase();
}

export function formatPercent(amount: number, options?: FormatOptions): `${number}` {
  return createPercentFormatter({ ...options }).format(amount) as `${number}`;
}
