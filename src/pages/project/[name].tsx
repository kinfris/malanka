import type { GetStaticProps, GetStaticPaths } from "next";
import { ProjectType, projectsInfo } from "@/mockData/project";
import { ParsedUrlQuery } from "querystring";
import styles from "./project.module.css";
import Image from "next/image";

type Props = {
  projectInfo: ProjectType;
};

interface Params extends ParsedUrlQuery {
  name: string;
}

export const getStaticPaths = (async () => {
  const paths = projectsInfo.map((projectOnfo) => ({
    params: { name: projectOnfo.projectName },
  }));
  return {
    paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const params = context.params!;
  const project = projectsInfo.find(
    (projectInfo) => projectInfo.projectName === params.name
  );

  if (!project) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return { props: { projectInfo: project.projectDescription } };
};

export default function Project({ projectInfo }: Props) {
  const {
    title,
    subTitle,
    summary,
    aboutCompany,
    companyProblem,
    solution,
    results,
  } = projectInfo;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.maintitle}>{title}</h3>
        <h4 className={styles.subTitle}>{subTitle}</h4>
        <div className={styles.summary}>
          <div>
            <p className={styles.summaryName}>Client</p>
            <p className={styles.summaryInfo}>{summary.client}</p>
          </div>
          <div>
            <p className={styles.summaryName}>Industry</p>
            <p className={styles.summaryInfo}>{summary.industry}</p>
          </div>
          <div>
            <p className={styles.summaryName}>Enterprise Tech</p>
            <p className={styles.summaryInfo}>{summary.enterpriseTech}</p>
          </div>
          <div>
            <p className={styles.summaryName}>Solution</p>
            <p className={styles.summaryInfo}>{summary.solution}</p>
          </div>
        </div>
        <div className={styles.summaryIndicators}>
          {summary.indicator.map((e, i) => {
            return (
              <div key={i}>
                <p className={styles.indicatorValue}>{e.value}</p>
                <p className={styles.indicatorName}>{e.name}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.mainImage}>
          <Image src={summary.image} alt="" fill />
        </div>

        <h2 className={styles.blockTitle}>The Company</h2>
        <div>
          {aboutCompany.map((e, i) => {
            return (
              <p key={i} className={styles.blockDescription}>
                {e}
              </p>
            );
          })}
        </div>

        <h2 className={styles.blockTitle}>The Challenge</h2>
        <div>
          {companyProblem.map((e, i) => {
            return (
              <p key={i} className={styles.blockDescription}>
                {e}
              </p>
            );
          })}
        </div>

        <h2 className={styles.blockTitle}>The Solution</h2>
        <div className={styles.solutionImage}>
          <Image src={solution.image} alt="" fill />
        </div>
        <div>
          {solution.description.map((e, i) => {
            return (
              <p key={i} className={styles.blockDescription}>
                {e}
              </p>
            );
          })}
        </div>

        <h2 className={styles.blockTitle}>The Results</h2>
        <div>
          {results.map((e, i) => {
            return (
              <p key={i} className={styles.blockDescription}>
                {e}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
