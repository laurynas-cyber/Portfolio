import React from "react";

export default function ScrollDown({ styles }) {
  return (
    <div className={styles.scroll_container}>
      <div className={styles.field}>
        <div className={styles.mouse}></div>
      </div>
    </div>
  );
}
