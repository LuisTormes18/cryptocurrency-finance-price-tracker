const apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
export const getCoins = async () => {
  const resp = await fetch(apiUrl);
  const data = await resp.json();
  return data;
};
