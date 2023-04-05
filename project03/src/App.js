import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10").then((response) =>
      response.json().then((json) => setCoins(json))
    );
    setLoding(false);
  }, []);

  return (
    <div>
      <h1>The Coin !({coins.length})</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select>
          {coins.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default App;
