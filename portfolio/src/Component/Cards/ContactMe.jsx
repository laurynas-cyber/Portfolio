import React, { useState } from "react";
import axios from "axios";

export default function ContactMe({ slideIndex, styles }) {
  const [form, setForm] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        form
      );
      setResponseMessage(response.data);
    } catch (error) {
      setResponseMessage("Error sending message. Please try again.");
    }
  };
  return (
    <div
      className={styles.portfolio_content}
      style={{ translate: `${-100 * slideIndex}%` }}
    >
      <div className={styles.contact_container}>
        <h2>Write me a message</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
}
