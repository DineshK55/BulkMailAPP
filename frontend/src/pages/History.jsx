import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/History.css";

function History() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/email/history"
      );

      const data = await response.json();

      if (data.success) {
        setEmails(data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="history-page">
      <Navbar />

      <div className="history-container">
        <h1 className="history-title">
          Email History
        </h1>

        {loading ? (
          <div className="loading">
            Loading Email History...
          </div>
        ) : emails.length === 0 ? (
          <div className="empty">
            No Emails Found
          </div>
        ) : (
          <div className="history-grid">
            {emails.map((email) => (
              <div
                key={email._id}
                className="email-card"
              >
                <div className="card-header">
                  <div className="subject">
                    {email.subject}
                  </div>

                  <span className="status">
                    {email.status}
                  </span>
                </div>

                <p className="label">
                  Recipients:
                </p>

                <p className="value">
                  {email.recipients.join(", ")}
                </p>

                <p className="label">
                  Message:
                </p>

                <p className="message">
                  {email.body}
                </p>

                <p className="date">
                  {new Date(
                    email.createdAt
                  ).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default History;