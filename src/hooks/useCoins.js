import { useEffect, useState } from "react";
import { getCoins } from "./../api";

export const useCoins = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCoins().then((data) => {
      setCoins(data);
      setIsLoading(false);
    });
  }, []);

  // useEffect(() => {

  //   setFilteredCoins(filtered);
  // }, [search]);

  return { coins, isLoading };
};
