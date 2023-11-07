import React from "react";

import { PIXELS } from "../../utils/styles/dimensions";

const ArticleListing = ({ title, subtitle, summary }) => {
  return (
    <div style={styles.article}>
      <h2 style={styles.title}>{title}</h2>
      <h3 style={styles.subtitle}>{subtitle}</h3>
      <p style={styles.summary}>{summary}</p>
    </div>
  );
};

const styles = {
  article: {
    minHeight: 200,
    margin: 20,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#d3e1f0",
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    margin: "0",
    marginBottom: PIXELS*2,
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "#555",
  },
  summary: {
    fontSize: "1rem",
    margin: "10px 0",
  },
};

export default ArticleListing;