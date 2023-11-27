import { Container } from "../../components/container";
import { LockIcon, UsersIcon, ChartIcon, WalletIcon } from "../../components/icons";
import styles from "/styles/index.module.scss";

export default function Resource() {
  const perks = [
    {
      icon: <LockIcon />,
      heading: "Community Interaction",
      paragraph:
        "A platform for users to engage in discussions, ask questions, and collaborate with others who share their interests, fostering a supportive learning community.",
    },
    {
      icon: <UsersIcon />,
      heading: "Content Curation",
      paragraph:
        "Regular updates and content curation to ensure that the projects and course recommendations remain relevant and up-to-date with the latest trends and developments.",
    },
    // {
    //   icon: <ChartIcon />,
    //   heading: "Resource Downloads",
    //   paragraph:
    //     "Providing downloadable resources, such as PDFs, templates, or project files, for easy access and offline use.",
    // },
    // {
    //   icon: <WalletIcon />,
    //   heading: "Feedback System",
    //   paragraph:
    //     "A feedback system for users to provide input on the quality and usefulness of projects and courses, allowing for continuous improvement.",
    // },
  ];

  return (
    <Container title="Resource">
      <div className={styles.about}>
        <div className={styles.heading}>
          <div>What we offer</div>
          <div>
          Empowering You to Explore, Learn, Create, and Innovate Your Way to Success.
          </div>
        </div>
        <p></p>
        <div className={styles.perks_container}>
          {perks.map((e) => (
            <div key={e.heading} className={styles.perk}>
              <div>{e.icon}</div>
              <div>{e.heading}</div>
              <div>{e.paragraph}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
