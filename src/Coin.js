import React from "react";

function Coin({
  name,
  image,
  symbol,
  current_price,
  market_cap,
  price_change_percentage_24h,
  total_volume,
}) {
  return (
    <tr>
      <td className="coin">
        <img src={image} alt={name} />
        <h2>{name}</h2>
      </td>
      <td className="symbol">
        <span>{symbol}</span>
      </td>
      <td>
        <span>${current_price}</span>
      </td>
      {price_change_percentage_24h < 0 ? (
        <td className="red">${price_change_percentage_24h.toFixed(2)}%</td>
      ) : (
        <td className="green">${price_change_percentage_24h.toFixed(2)}%</td>
      )}
      <td>{total_volume}</td>
      <td>
        <span>{market_cap}</span>
      </td>
    </tr>
  );
}

export default Coin;
