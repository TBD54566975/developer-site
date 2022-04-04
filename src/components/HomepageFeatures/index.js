import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Individual Empowerment',
    src: 'img/icons/empowerment.png',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our open source efforts exist to empower individuals through 
        collaborative innovation.
      </>
    ),
  },
  {
    title: 'Digital Self-Ownership',
    src: 'img/icons/networking.png',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Individuals should control their digital lives, and    
        every line of code we write should reflect that.
      </>
    ),
  },
  {
    title: 'Financial Inclusion',
    src: 'img/icons/money-exchange.png',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The financial system of the future should be decentralized, 
        permissionless, and non-custodial.
      </>
    ),
  },
];

function Feature({Svg, title, src, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={src} />
      </div>
      <div className="text--center padding-horiz--sm">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>Our Principles</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
