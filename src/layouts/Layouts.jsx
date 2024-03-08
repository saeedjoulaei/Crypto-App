import styles from "../layouts/Layouts.module.css";

function Layouts({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h3>Crypto App</h3>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Saeed Joulaei With ❤️</p>
      </footer>
    </>
  );
}

export default Layouts;
