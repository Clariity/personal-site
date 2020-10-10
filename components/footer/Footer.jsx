import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fill-width is-blue-bg is-black-always">
      <div className="max-1400 row pad-3-tb">
        <div className="col-xs-12 col-md-6 text-align-left pad-5-lr ">
          <div className="col-xs-12 pad-3">
            <b>Pages</b>
          </div>
          <div className="col-xs-12">
            <Link href="/">
              <a className="footer-link">Homepage</a>
            </Link>
            <Link href="/about">
              <a className="footer-link">It's All About Ryan</a>
            </Link>
            <Link href="/blog">
              <a className="footer-link">Blog</a>
            </Link>
            <Link href="/projects">
              <a className="footer-link">Projects</a>
            </Link>
            <Link href="/code">
              <a className="footer-link">Code Snippets</a>
            </Link>
            <Link href="/stats">
              <a className="footer-link">Site Stats</a>
            </Link>
            <Link href="/plans">
              <a className="footer-link">Site Plans</a>
            </Link>
            <Link href="/credits">
              <a className="footer-link">Credits</a>
            </Link>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 text-align-left pad-5-lr ">
          <div className="col-xs-12 pad-3">
            <b>Contact</b>
          </div>
          <div className="col-xs-12">
            <a
              href="https://twitter.com/ryangregorydev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-gregory-232003189/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1283026029452365826&text=Topic%3A%20ryangregory.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Suggest Something
            </a>
          </div>
        </div>
        <div className="col-xs-12 pad-5-t">
          <p className="flex-center align-horizontal">
            Made with <img src="./images/icons/heart-strikethrough.png" alt="" height={30} /> a
            keyboard by Ryan Gregory
          </p>
        </div>
      </div>
    </div>
  );
}
