import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarLink,
    MDBNavbarItem,
    MDBNavbarNav
  } from 'mdb-react-ui-kit';

function NavBar() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        
            
        <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                    Home
                </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBContainer>
    </MDBNavbar>
    </div>
  )
};

export default NavBar;