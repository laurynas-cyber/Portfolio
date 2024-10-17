import React from "react";

export default function ContactMe({ slideIndex, styles }) {
  return (
    <div
      className={styles.portfolio_content}
      style={{ translate: `${-100 * slideIndex}%` }}
    >
      <div className={styles.contact_container}>
        <h2>Write me a message</h2>
        <form action="">
          <div className={styles.contact_wrap}>
            <span className={styles.sub}>Subject</span>
            <input type="text" name="subject" />
          </div>
          <div className={styles.contact_wrap}>
            <span>Email</span>
            <input type="text" name="email" />
          </div>
          <div className={styles.contact_wrap}>
            <span>Message</span>
            <textarea name="message" id=""></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
