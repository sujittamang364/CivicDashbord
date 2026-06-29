import styles from "../styles/issuecard.module.css";
import StatusBadge from "./StatusBadge";
import { HiCalendarDateRange } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";

const IssueCard = ({ issue}) => {
  return (
    <div className={`${styles.card} ${styles[issue.status.toLowerCase()]}` }>
      <div className={styles.header}>
        <div>
          <h2>{issue.title}</h2>
          <span className={styles.category}>{issue.category}</span>
        </div>

        <StatusBadge status={issue.status} />
      </div>

      <p className={styles.description}>
        {issue.description}
      </p>

      <div className={styles.footer}>
        <span>{<MdLocationPin/>} {issue.location}</span>
        <span>{<HiCalendarDateRange/>} {issue.reportedOn}</span>
      </div>
    </div>
  );
};

export default IssueCard;
