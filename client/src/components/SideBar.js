import { MDBBtn, MDBIcon, MDBRow } from 'mdb-react-ui-kit';

function SideBar() {
  return (
    <div style={{ marginRight:'95%'}}>
      <MDBRow>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
          <MDBIcon fab icon='linkedin-in' size='xl' />
        </MDBBtn>
      </MDBRow>
      <MDBRow>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
          <MDBIcon fab icon='github' size='xl' />
        </MDBBtn>
      </MDBRow>
      <MDBRow>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
          <MDBIcon fab icon='medium' size='xl' />
        </MDBBtn>
      </MDBRow>
    </div>
  )
};

export default SideBar;