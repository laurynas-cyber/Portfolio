import React, { useEffect, useState } from "react";
import axios from "axios";
import useRegister from "../Validations/useRegister";

export default function ContactMe({ slideIndex, styles }) {
  const serverUrl = "http://localhost:5000/";
  const [form, setForm] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { errors, validate } = useRegister();
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(
    (_) => {
      if (responseMessage) {
        return;
      }
      setResponseMessage(errors.email);
      setButtonDisabled(false);
    },
    [errors]
  );

  const handleSubmit = async (e) => {
    setResponseMessage("");
    e.preventDefault();
    if (!validate(form)) {
      return;
    }

    setButtonDisabled(true);
    try {
      setResponseMessage("Waiting for network...");
      const response = await axios.post(
        "https://portfolio-po5b.onrender.com/send-email",
        form
      );
      setResponseMessage(response.data);
      setButtonDisabled(false);
    } catch (error) {
      setResponseMessage("Error sending message. Please try again.");
      setButtonDisabled(false);
    }
  };
  return (
    <div
      className={styles.portfolio_content}
      style={{ translate: `${-100 * slideIndex}%` }}
    >
      <div className={styles.contact_container}>
        <h2>Write me a message </h2>

        <div
          className={
            responseMessage
              ? styles.message_card + " " + styles.got_msg
              : styles.message_card
          }
        >
          {responseMessage}
        </div>

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
          <button
            disabled={buttonDisabled}
            type="submit"
            className={styles.submit_btn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
