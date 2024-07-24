import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/">
            Introducción 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description="Documentación Icasa.">
      <HomepageHeader />
      <main>
        <dir id="home">
          <a
            href="https://www.levapan.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/levapanLogo.png" alt="BPMcos" width="350"></img>
          </a>
        </dir>
      </main>
    </Layout>
  );
}
