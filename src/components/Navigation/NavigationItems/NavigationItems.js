import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/rallies">Events</NavigationItem>
        <NavigationItem link="/admin">Admin</NavigationItem>
    </ul>
);

export default navigationItems;