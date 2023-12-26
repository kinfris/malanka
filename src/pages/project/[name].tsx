import type { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from "./project.module.css";
import Image from "next/image";
import { createClient } from "contentful";
type Props = {
  project: any;
};

interface Params extends ParsedUrlQuery {
  name: string;
}

export const getStaticPaths = async () => {
  const client = createClient({
    space: "wrshr7cyz17q",
    accessToken: "xM2mLP0iW0eEE2CbSY2yd31LDDstaOF_9BjzeP9VLdo",
  });

  const res = await client.getEntries({
    content_type: "malanka",
    select: ["fields.name"],
  });

  const paths = res.items.map((e) => ({ params: { name: e.fields.name } }));

  // const paths = projectsInfo.map((projectOnfo) => ({
  //   params: { name: projectOnfo.projectName },
  // }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const params = context.params!;
  const client = createClient({
    space: "wrshr7cyz17q",
    accessToken: "xM2mLP0iW0eEE2CbSY2yd31LDDstaOF_9BjzeP9VLdo",
  });

  const res = await client.getEntries({
    content_type: "malanka",
    "fields.name": params.name,
  });

  const project = res.items[0].fields;

  if (!project) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default function Project({ project }: Props) {
  if (!project) return <h3>Not found</h3>;

  const {
    aboutCompany,
    companyProblem,
    name,
    projectName,
    results,
    samamryImage,
    sammaryEnterpriseTech,
    sammaryIndicators,
    sammaryIndicatorsNames,
    sammaryIndustry,
    sammarySolution,
    solutionDescription,
    solutionImage,
    subTitle,
    summaryClient,
  } = project;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.maintitle}>{projectName}</h3>
        <h4 className={styles.subTitle}>{subTitle}</h4>
        <div className={styles.summary}>
          <div>
            <p className={styles.summaryName}>Client</p>
            <p className={styles.summaryInfo}>{summaryClient}</p>
          </div>
          <div>
            <p className={styles.summaryName}>Industry</p>
            <p className={styles.summaryInfo}>{sammaryIndustry}</p>
          </div>
          <div>
            <p className={styles.summaryName}>Enterprise Tech</p>
            <p className={styles.summaryInfo}>{sammaryEnterpriseTech}</p>
          </div>
          <div>
            <p className={styles.summaryName}>Solution</p>
            <p className={styles.summaryInfo}>{sammarySolution}</p>
          </div>
        </div>
        <h4 className={`${styles.blockTitle} ${styles.decoredTitle}`}>
          Performance
        </h4>
        <div className={styles.summaryIndicators}>
          {sammaryIndicators.map((e, i) => {
            return (
              <div key={i}>
                <p className={styles.indicatorValue}>{e}</p>
                <p className={styles.indicatorName}>
                  {sammaryIndicatorsNames[i]}
                </p>
              </div>
            );
          })}
        </div>

        <div className={styles.mainImage}>
          <Image src={`https:${samamryImage.fields.file.url}`} alt="" fill />
        </div>

        <h2 className={styles.blockTitle}>The Company</h2>
        <div>
          {aboutCompany.content.map((e, i) => {
            return (
              <p key={i} className={styles.blockDescription}>
                {e.content[0].value}
              </p>
            );
          })}
        </div>

        <h2 className={styles.blockTitle}>The Challenge</h2>
        <div>
          {companyProblem.content.map((e, i) => {
            return (
              <p key={i} className={styles.blockDescription}>
                {e.content[0].value}
              </p>
            );
          })}
        </div>

        <h2 className={styles.blockTitle}>The Solution</h2>
        {solutionImage && (
          <div className={styles.solutionImage}>
            (
            <Image src={`https:${solutionImage.fields.file.url}`} alt="" fill />
            )
          </div>
        )}
        <div>
          {solutionDescription.content.map((e, i) => {
            return (
              <p key={i} className={styles.blockDescription}>
                {e.content[0].value}
              </p>
            );
          })}
        </div>

        <h2 className={styles.blockTitle}>The Results</h2>
        <div>
          {results.content.map((e, i) => {
            return (
              <p key={i} className={styles.blockDescription}>
                {e.content[0].value}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
