import { Link, NavLink } from "react-router-dom";
import styles from './navigation.module.css'
import { useState } from "react";
import { icons } from "../../services/icons";
import { useMachines } from "../../hooks/machines.hook";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    const {name, shout} = useMachines()


    const toggleNavigation = () => {

      
        setIsOpen(!isOpen)
        
    }

    const nav = [
        {
            path : "/",
            title : "Home"
        },
        {
            path : "/boxes",
            title : "Boxes"
        },
        {
            path : "/clickmachines",
            title : "Click Machines"
        },
        {
            path : "/prettymachines",
            title : "Pretty Machines"
        },
        {
            path : "/dashboard",
            title : "Dashboard"
        },
        {
            path : "/many",
            title : "Many"  
        },
        {
            path : "/many-more",
            title : "Many More"  
        }
    ]
  
    return (
        <div className={styles.navigation}>
            {/* <a href="/">FORSIDE</a> */}

            <div onClick={shout}>

                LOGO {name}

            </div>
            <div className={styles.actions}>

                <div className={`${styles.nav} ${isOpen ? styles.open : ''}` }>

                    {nav.map( (item, index) => {
                        return <NavLink key={index} to={item.path} className={({ isActive }) => (isActive ? styles.active : "")}>{item.title}</NavLink>
                    })}
              
                </div>
                
                <div onClick={toggleNavigation}>
                    {icons["FaBurger"]}
                </div>

            </div>
         

        </div>
    );
};
export default Navigation;