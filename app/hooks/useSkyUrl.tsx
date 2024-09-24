export const useSkyUrl = (path?: `/${string}`) => {
  // TODO: Get baseUrl dynamicaly based on the environment the app is running in
  const baseUrl = process.env.NEXT_PUBLIC_WEBAPP_URL || 'https://app.sky.money';
  const url = path ? `${baseUrl}${path}` : baseUrl;

  return { baseUrl, url };
};
