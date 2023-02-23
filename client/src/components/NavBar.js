import { useState } from 'react';
import {
    MDBContainer,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav
  } from 'mdb-react-ui-kit';

function NavBar() {
    const [showBasic, setShowBasic] = useState(false);
  return (
    <div style={{ margin:'.5%'}}>
        <MDBNavbar expand='lg' light style={{ backgroundColor:'#fbeef5' }}>
        <MDBContainer fluid>
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <MDBNavbarBrand className="fw-bold">Goldie Jackson</MDBNavbarBrand>
          </a>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        
        <MDBCollapse navbar show={showBasic}>
        <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink  aria-current='page' href='/'>
                    Home
                </MDBNavbarLink>
              </MDBNavbarItem>
                <MDBNavbarLink  aria-current='page' href='/projects-list'>
                    Projects
                </MDBNavbarLink>
                <MDBNavbarLink  aria-current='page' href='/contact'>
                    Contact
                </MDBNavbarLink>
            </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
    </MDBNavbar>
    </div>
  )
};

export default NavBar;