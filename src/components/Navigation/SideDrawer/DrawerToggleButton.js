import React from 'react';
import './DrawerToggleButton.css';
const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="hamburger-line"/>
        <div className="hamburger-line"/>
        <div className="hamburger-line"/>
    </button>
);

export default drawerToggleButton;