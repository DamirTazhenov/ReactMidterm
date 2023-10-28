import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from "../../components/UI/button/MyButton";
import classes from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav >
            <div className={classes.nav}>
                <h2>Twitter</h2>
                <Link className={classes.navItems} to="/"><h2>Home</h2></Link>
                <Link className={classes.navItems} to="/profile"><h2>Profile</h2></Link>
            </div>
        </nav>
    );
};

export default Navbar;