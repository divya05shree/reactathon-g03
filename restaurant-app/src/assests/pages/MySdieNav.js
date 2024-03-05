import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideNav, { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const MySideNav = () => {
  const navigate = useNavigate();

  return (
    <SideNav onSelect={(selected) => {}}>
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
      </SideNav.Nav>
    </SideNav>
  );
};

export default MySideNav;
