import React from "react";

import ArticleListing from "./ArticleListing";

const ArticleList = () => {
  return (
    <section id="article" style={styles.content}>
      <ArticleListing
        title="Getting Started with React"
        subtitle="A beginner's guide"
        summary="Learn the basics of React, a popular JavaScript library for building user interfaces."
      />
      <ArticleListing
        title="JavaScript Best Practices"
        subtitle="Writing clean and maintainable code"
        summary="Discover best practices for writing high-quality JavaScript code that's easy to maintain and scale."
      />
      <ArticleListing
        title="Introduction to Node.js"
        subtitle="Server-side JavaScript"
        summary="Explore the fundamentals of Node.js, a runtime for executing JavaScript on the server side."
      />
    </section>
  );
};

const styles = {
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export default ArticleList;
