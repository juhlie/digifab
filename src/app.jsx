import { Router, Link } from "wouter";

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

import "./styles/styles.css";
import PageRouter from "./components/router.jsx";
import Seo from "./components/seo.jsx"; // The component that adds our Meta tags to the page

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <Seo />
      <main role="main" className="wrapper">
        {/* Router specifies which component to insert here as the main content */}
        <PageRouter />
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/lab1">Handmade Machine</Link>
          <span className="divider">|</span>
          <Link href="/lab2">Novel Button</Link>
          <span className="divider">|</span>
          <Link href="/lab3">Listening Machine</Link>
          <span className="divider">|</span>
          <Link href="/lab4">Wearable Synth</Link>
        </div>
      </footer>
    </Router>
  );
}
