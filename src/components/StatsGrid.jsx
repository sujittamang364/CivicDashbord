import React from 'react'
import styles from '../styles/statsgrid.module.css'
import issues from '../data/data.js'
import { MdMenu } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
const StatsGrid = () => {
  
  const totalIssues = issues.length;

  const pendingIssues = issues.filter(
    (issue)=>issue.status==="Pending").length;

const resolvedIssues=issues.filter(
  (issue)=> issue.status==="Resolved").length;
  
const rejectedIssues = issues.filter((issue) => issue.status === "Rejected").length;
  
  return (
    <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.icon} ${styles.totalicon}`}>  <MdMenu/>
          </div>
          <div className={styles.content}>
          <h3>Total Issues</h3>
           <p>{totalIssues}</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.icon} ${styles.resolvedicon}`}>  <IoMdCheckmarkCircleOutline/>
          </div>
          <div className={styles.content}>
          <h3>Resolved Issues </h3>
          <p>{resolvedIssues}</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.icon} ${styles.pending}`}>  <FaClockRotateLeft/>
          </div>
          <div className={styles.content}>
          <h3>Pending Issues</h3>
          <p>{pendingIssues}</p>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.icon} ${styles.rejectedicon}`}>  <MdOutlineCancel/>
          </div>
          <div className={styles.content}>
          <h3>Rejected Issues</h3>
          <p>{rejectedIssues}</p>
          </div>
        </div>
        
    </section>
  )
}

export default StatsGrid
