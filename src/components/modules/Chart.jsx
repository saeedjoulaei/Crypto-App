import styles from "../modules/Chart.module.css";

function Chart({ chart, setChart }) {
  return (
    <div className={styles.container}>
      <span
        onClick={() => {
          setChart(null);
        }}
        className={styles.cross}
      >
        x
      </span>
      <div className={styles.chart}>chart</div>
    </div>
  );
}

export default Chart;
