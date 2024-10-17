import React from "react";

export default function ContactMe({ slideIndex, styles }) {
  return (
    <div
      className={styles.portfolio_content}
      style={{ translate: `${-100 * slideIndex}%` }}
    >
      Bye
    </div>
  );
}
