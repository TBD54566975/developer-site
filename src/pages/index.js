import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main id="home_main">
        <section>
          <div class="container">
            <div>
              <h2>Welcome to the Community!</h2>

              <p>
                TBD is a new business unit of Block (fka Square, Inc.) focused on building decentralized 
                platforms, protocols, and tools that empower every individual to own their data and 
                participate in the global economy.
              </p>

              <p>
                TBD is on a mission to lead by example, inspiring the world to invest in and 
                collaborate on open source standards and permissionless technologies for the public good. 
                We welcome you to join us by bringing your ideas, thoughts, or technical skills to bear on 
                these important challenges.
              </p>

            </div>
          </div>
        </section>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
