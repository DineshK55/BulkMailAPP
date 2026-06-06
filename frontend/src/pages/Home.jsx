import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emails, setEmails] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject,
            body: message,
            recipients: emails
              .split(",")
              .map((email) => email.trim()),
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
  toast.success("Emails sent successfully!");

  setSubject("");
  setMessage("");
  setEmails("");
} else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <Navbar />

      <div className="home-container">
        <h1 className="home-title">
          Bulk Mail Dashboard
        </h1>

        <p className="home-subtitle">
          Send emails to multiple recipients instantly.
        </p>

        <form onSubmit={handleSendEmail}>
          <div className="form-group">
            <label className="form-label">
              Email Subject
            </label>

            <input
              type="text"
              className="form-input"
              placeholder="Enter email subject"
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Recipient Emails
            </label>

            <textarea
              rows="5"
              className="form-textarea"
              placeholder="abc@gmail.com, xyz@gmail.com"
              value={emails}
              onChange={(e) =>
                setEmails(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Email Message
            </label>

            <textarea
              rows="8"
              className="form-textarea"
              placeholder="Type your email content..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="send-btn"
          >
            {loading
              ? "Sending..."
              : "Send Bulk Email"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;