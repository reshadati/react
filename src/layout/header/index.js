import React from 'react'
import styles from '../layout.module.css'
import { Search} from "../../component/search";
import { SabadKHarid } from '../../component/sabad-kharid';
import { NavBar } from '../../component/nav-bar';
import { CommentPage } from '../../component/comment';
import { NewUserPage } from '../../pages/comment';


export const Header = () => {

  return (
  <div >
    <div className={styles['navar']}>برترین برندها در سایت مد و فشن</div>
    <div className={styles['header']}> 
    <SabadKHarid/>
    <Search/>  
    <CommentPage/>
   <div className={styles['logo']}>Mode and Fashion</div>
    </div>
     <NavBar/>
    </div>
  )
}
