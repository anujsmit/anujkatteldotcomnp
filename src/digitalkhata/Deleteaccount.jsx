import React from "react";

export default function DeleteAccount() {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1>Digital Khata Account Deletion</h1>

      <p>
        At Digital Khata, we respect your privacy and provide users with the
        ability to request deletion of their account and associated data.
      </p>

      <h2>How to Delete Your Account</h2>
      <ol>
        <li>Open the Digital Khata application.</li>
        <li>Go to <strong>Profile</strong>.</li>
        <li>Select <strong>Delete Account</strong>.</li>
        <li>Confirm your request.</li>
      </ol>

      <h2>Alternative Request Method</h2>
      <p>
        If you cannot access the application, send an email to:
      </p>

      <p>
        <a href="mailto:anujkattel6@gmail.com">
          anujkattel6@gmail.com
        </a>
      </p>

      <h2>Data That Will Be Deleted</h2>
      <ul>
        <li>User account information</li>
        <li>Business profile information</li>
        <li>Customer records</li>
        <li>Transaction history</li>
        <li>Application preferences and settings</li>
      </ul>

      <h2>Data Retention</h2>
      <p>
        After a deletion request is confirmed, your account and associated data
        will be permanently deleted within 30 days unless retention is required
        by applicable laws or regulations.
      </p>

      <h2>Contact Us</h2>
      <p>
        For questions regarding account deletion, please contact:
      </p>

      <p>
        <a href="mailto:anujkattel6@gmail.com">
          anujkattel6@gmail.com
        </a>
      </p>

      <hr />

      <p>
        © {new Date().getFullYear()} Digital Khata. All rights reserved.
      </p>
    </div>
  );
}