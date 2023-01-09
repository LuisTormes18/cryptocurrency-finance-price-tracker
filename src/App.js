import { useState } from "react";
import { useCoins } from "./hooks/useCoins";
import Coin from "./Coin";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const { coins, isLoading } = useCoins();

  function filteredCoins() {
    if (search.length === 0) {
      return coins?.slice(currentPage, currentPage + 10);
    }
    const filtered = coins?.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.slice(currentPage, currentPage + 10);
  }

  function previousPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 10);
    }
  }
  function nextPage() {
    if (
      coins?.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase())).length >
      currentPage + 10
    ) {
      setCurrentPage(currentPage + 10);
    }
  }
  const handleSearch = (e) => {
    setCurrentPage(0);
    setSearch(e.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            {filteredCoins().map((coin) => (
              <Coin key={coin.id} {...coin} />
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={previousPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
