import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);// this.toggleNav (JS variable) pointing to toggleNav method(need to bind method to JS variable,to access method in JSX)
    this.state = {// we needed to maintain local state in Collapse reactstrap comp
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({//we are negating the value of isNavOpen whatever it is
      isNavOpen: !this.state.isNavOpen
    });
  }
    render() {
      return(// isOpen is boolean attribute, display will display when true. Will toggle by click.
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/">
              <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                  </NavItem>            
                </Nav>
              </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
             <div className="container">
                 <div className="row row-header">
                     <div className="col-12 col-sm-6">
                         <h1>Ristorante con Fusion</h1>
                         <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                     </div>
                 </div>
             </div>
         </Jumbotron>
      </React.Fragment>
      );
    }
  }
  
  export default Header;