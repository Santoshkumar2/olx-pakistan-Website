import React, { Component } from "react";
import {
  MDBContainer,
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    
    <Router>
      <MDBNavbar style={{backgroundColor:"#b24e56",color:"black !important"}} className="navbar"  dark expand="md">
       
        <MDBContainer>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav  left>
            <MDBNavItem onClick={()=>this.props.path.push("/")} active>
              <MDBNavLink  to="">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={()=>this.props.path.push("/Vehicles")}>
              <MDBNavLink  to="#">Vehicles</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={()=>this.props.path.push("/ToyForBoys")}>
              <MDBNavLink  to="#!">Toys for Boys</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={()=>this.props.path.push("/ToysForGirls")}>
              <MDBNavLink  to="#!">Toys For Girls</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={()=>this.props.path.push("/BabyToys")}>
              <MDBNavLink  to="#!">Baby Toys</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={()=>this.props.path.push("/NewArrival")}>
              <MDBNavLink to="#!">New Arival</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={()=>this.props.path.push("/FlashSale")}>
              <MDBNavLink to="#!">Flash Sale</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem onClick={()=>this.props.path.push("/WinterBigSale")}>
              <MDBNavLink to="#!">Winter Big Sale</MDBNavLink>
            </MDBNavItem>
           
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Router>
    
    );
  }
}

export default NavbarPage;