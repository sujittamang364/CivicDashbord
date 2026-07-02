import React from 'react'
import styles from '../styles/navbar.module.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { MdWifiChannel } from "react-icons/md";
import Button from './Button';
const NavBar = () => {
  return (
    <div className={styles.NavBar}>
        <div className={styles.navbar_left}>
       
        <div className={styles.icon}>
            <MdWifiChannel className={styles.icn}/>
        </div>
        <div className={styles.content}>
            <p className={styles.navbar_welcom}>
                Welcome to CivicConnect
            </p>
            <h1 className={styles.navbar_title}>
                Community Issue Dashbord
            </h1>
        </div>
        </div>
        <div className={styles.navbar_right}>
            <button className={styles.notification}>
                <IoNotificationsCircleOutline className={styles.notification}/>
            </button>
            <Button text="log in" variant="navbtn"/>
            <Button text="Sign in"variant="navbtn"/>
        </div>
      
    </div>
  )
}

export default NavBar
