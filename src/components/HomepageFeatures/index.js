import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_nativeflow_mountain.svg").default,
    description: (
      <>
        NativeFlow was built using JS literals to be easily installed and used
        to get your stylesheet up and running quickly
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_nativeflow_tree.svg").default,
    description: (
      <>
        NativeFlow lets you focus on your styling, and we&apos;ll do the syntax
        work. Go ahead and move your styles into the{" "}
        <code>styles = {`{[ m.t_2, p.x_4]}`}</code>.
      </>
    ),
  },
  {
    title: "Powered by TypeScript",
    Svg: require("@site/static/img/undraw_nativeflow_react.svg").default,
    description: (
      <>
        Extend or customize your app layout by reusing these objects. Just a
        single npm installation and you're ready, no babel setup required
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
