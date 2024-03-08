import { RotatingLines } from "react-loader-spinner";

import { marketChart } from "../../services/cryptoApi";
import chartUp from "../../assets/chart-up.svg";
import chartdown from "../../assets/chart-down.svg";

import styles from "../modules/TableCoin.module.css";

function TableCoin({ coins, isLoading, setChart }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="red" strokeWidth="5" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <CoinRow coin={coin} key={coin.id} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

function CoinRow({
  coin,

  setChart,
}) {
  const {
    id,
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      // console.log(json);
      setChart({ ...json, coin });
    } catch (error) {
      setChart(null);
    }
  };

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()} </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%{" "}
      </td>
      <td> {total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartdown} alt={name} />
      </td>
    </tr>
  );
}
