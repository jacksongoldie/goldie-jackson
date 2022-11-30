import { useState } from 'react';
import {
    MDBContainer,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav
  } from 'mdb-react-ui-kit';

function NavBar() {
    const [showBasic, setShowBasic] = useState(false);
  return (
    <div>
        <MDBNavbar expand='lg' light style={{ backgroundColor:'#fbeef5' }}>
        <MDBContainer fluid>
            <MDBNavbarBrand className="fw-bold">Goldie Jackson</MDBNavbarBrand>
        
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
                <MDBNavbarLink active aria-current='page' href='/'>
                    Home
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' href='/projects'>
                    Projects
                </MDBNavbarLink>
                <MDBNavbarLink active aria-current='page' href='/contact'>
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