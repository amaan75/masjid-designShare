import React from "react";

const Hadees = props => {
  return (
    <main role="main" className="inner cover">
      <h1 className="cover-heading">Hadees</h1>
      <blockquote className="blockquote text-center lead">
        <p className="mb-0">{props.translation}</p>
        <footer className="blockquote-footer text-right">
          Prophet Muhammad (ﷺ) in{" "}
          <a href={props.url} target="_blank">
            <cite title="Reference">{props.book}</cite>
          </a>
        </footer>
      </blockquote>

      <p className="lead">
        <a
          href="http://www.quran.com"
          target="_blank"
          className="btn btn-lg btn-secondary"
        >
          Learn more
        </a>
      </p>
    </main>
  );
};

export default Hadees;
