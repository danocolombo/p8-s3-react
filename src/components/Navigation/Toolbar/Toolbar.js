import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => (
    <header className="toolbar">
        <nav className='toolbar_navigation'>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"> <a href="/"><img src="../../../../public/P8-logo.png" alt="P8 Rally"/></a> </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li> 
                    <li><a href="/rallies">Events</a></li>  
                    <li><a href="/admin">Admin</a></li>
                </ul>                
            </div>
        </nav>
    </header>
)
export default Toolbar;