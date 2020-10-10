import React from "react";
import Link from "next/link";
import SEO from "../components/other/SEO";

export default function Custom404() {
  return (
    <>
      <SEO title="404" />
      <div className="max-800 row">
        <div className="col-xs-12">
          <img className="home-image grow" src="/images/unDraw/home2.svg" alt="hero" />
        </div>
        <div className="col-xs-12">
          <p>Uh Oh, looks like you've tried to find a page that doesn't exist</p>
        </div>
        <div className="col-xs-12 pad-5">
          <Link href="/">
            <a className="App-link slide-button is-black-always">There's no place like home</a>
          </Link>
        </div>
        <div className="col-xs-12">
          <p>Perhaps you were looking for one of these pages:</p>
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
    </>
  );
}
