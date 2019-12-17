import React from 'react'
import './Toolbar.css';
import DrawerToogleButton from '../../SideDrawer/DrawerToggleButton';
const Toolbar = props => (
    <header className="toolbar">
        <nav className='toolbar_navigation'>
            <div>
                <DrawerToogleButton/>
            </div>
            <div className="toolbar_logo"> <a href="/">THE LOGO</a> </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li> 
                    <li><a href="/rallies">Events</a></li>  
                </ul>                
            </div>
        </nav>
    </header>
)
export default Toolbar;