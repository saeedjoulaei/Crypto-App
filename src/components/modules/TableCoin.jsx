import chartUp from "../../assets/chart-up.svg";
import chartdown from "../../assets/chart-down.svg";
import { RotatingLines } from "react-loader-spinner";

function TableCoin({ coins, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <RotatingLines
          // visible={true}
          // height="96"
          // width="96"
          strokeColor="red"
          strokeWidth="5"
          // animationDuration="0.75"
          // ariaLabel="rotating-lines-loading"
          // wrapperStyle={{}}
          // wrapperClass=""
        />
      ) : (
        <table>
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
              <CoinRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

function CoinRow({
  coin: {
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
}) {
  return (
    <tr>
      <td>
        <div>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()} </td>
      <td>{price_change.toFixed(2)}% </td>
      <td> {total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartdown} alt={name} />
      </td>
    </tr>
  );
}
