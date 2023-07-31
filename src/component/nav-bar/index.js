import React from 'react'
import styles from '../component.module.css'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (
    <div className={styles['navbar']}>
     <ul>
    <li><NavLink to={"/"}> مد و فشن </NavLink></li>
    <li><NavLink to={""}>   برندها </NavLink></li>
    <li><NavLink to={""}> کارت هدیه</NavLink></li>
    <li><NavLink to={""}> فروش ویژه</NavLink></li>
    </ul>
    </div>
  )
}
