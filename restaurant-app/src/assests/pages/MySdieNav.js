import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Menu from './menu';
import Service from './service';
import FeedBack from './feedback';

const MySideNav = () => {
    return (<>
        
            <SideNav onSelect={(selected) => {}}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Link to="/">Home</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Menu">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Link to="/menu">Menu</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="FeedBack">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Link to="/feedback">Feedback</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Service">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <Link to="/service" onClick={()=>{
                                navigator('/service')
                            }}>Service</Link>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            </>
    
    );
};

export default MySideNav;
