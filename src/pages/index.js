import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.titleWithLogo}>
          <img
            src="https://ik.imagekit.io/jayowiee/github/nativeflow/nativeflow-logo.png"
            alt="NativeFlow logo"
            className={styles.titleLogo}
          />
          <Heading as="h1" className={clsx("hero__title", styles.titleText)}>
            {siteConfig.title}
          </Heading>
        </div>
        <p className="">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/flash-setup"
          >
            Nativeflow Flash Setup ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Utility style-objects for React Native, syntax similarity to Tailwind"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
