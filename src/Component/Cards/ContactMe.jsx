import React, { useState } from "react";

export default function ContactMe({ slideIndex, styles }) {
  const [form, setForm] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
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
            <input
              value={form.subject}
              type="text"
              name="subject"
              onChange={handleForm}
            />
          </div>
          <div className={styles.contact_wrap}>
            <span>Email</span>
            <input
              value={form.email}
              type="text"
              name="email"
              onChange={handleForm}
            />
          </div>
          <div className={styles.contact_wrap}>
            <span>Message</span>
            <textarea
              value={form.message}
              name="message"
              onChange={handleForm}
              id=""
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
