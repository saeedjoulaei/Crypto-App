import { useState } from "react";
import { useEffect } from "react";
import TableCoin from "../modules/Tablecoin";
import { getCoinList } from "../../../services/cryptoApi";

function HomePage() {
  const [coins, setcoins] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setcoins(json);
    };
    getData();
  }, []);
  return <TableCoin coins={coins} />;
}

export default HomePage;
