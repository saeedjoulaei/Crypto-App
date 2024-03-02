function Search({ currency, setCurrency }) {
  return (
    <div>
      <input type="text" />
      <select onChange={(e) => setCurrency(e.target.value)} value={currency}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}

export default Search;
