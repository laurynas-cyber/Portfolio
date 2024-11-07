import React from "react";

export default function ScrollDown({ styles }) {
  return (
    <span className={styles.scroll_container}>
      <span className={styles.field}>
        <span className={styles.mouse}></span>
      </span>
    </span>
  );
}
