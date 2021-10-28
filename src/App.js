import { useEffect, useState } from "react";
import Coin from "./Coin";

function App() {
    const apiUrl =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins?.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    useEffect(() => {
        const getData = () => {
            fetch(apiUrl)
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    setCoins(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getData();
    }, []);
    return (
        <div className="coin-app">
            <div className="coin-search">
                <div>
                    <h1>Search a Currency</h1>
                    <form>
                        <input
                            type="text"
                            name="search"
                            value={search}
                            placeholder="search"
                            onChange={handleSearch}
                        />
                    </form>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th></th>
                            <th>Price</th>
                            <th>{"24h"}</th>
                            <th>{"Volume"}</th>
                            <th>Mkt Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCoins?.map((coin) => (
                            <Coin key={coin.id} {...coin} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
