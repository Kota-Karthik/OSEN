import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OS.Devcommunity</h1>
      <h3 className={styles.subtitle}>--Grow together--</h3>
      <p className={styles.description}>
        This is a <span>community</span> which provides <span>free</span> hands-on training in various
        fields of<span>computer science </span> and have an inclusive <span>community focusing on a
        learn by doing approach.</span>
      </p>

      <label>
      <input type="text" placeholder="your email" className={styles.input} />
      <button>Join us</button>

      </label>

    </div>
    

  );
}

export default Home;
