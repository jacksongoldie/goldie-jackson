import { MDBBtn, MDBIcon, MDBRow } from 'mdb-react-ui-kit';

function SideBar() {
  return (
    <div style={{ marginRight:'95%'}}>
      <MDBRow>
        <a href="https://www.linkedin.com/in/goldie-jackson-951b57229/" title='LinkedIn' target="_blank" rel="noreferrer noopener">
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
          <MDBIcon fab icon='linkedin-in' size='xl' />
        </MDBBtn>
        </a>
      </MDBRow>
      <MDBRow>
        <a href="https://github.com/jacksongoldie" title='Github' target="_blank" rel="noreferrer noopener">
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
          <MDBIcon fab icon='github' size='xl' />
        </MDBBtn>
        </a>
      </MDBRow>
      <MDBRow>
        <a href="https://medium.com/@goldiejackson" title='Blog' target="_blank" rel="noreferrer noopener">
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
          <MDBIcon fab icon='medium' size='xl' />
        </MDBBtn>
        </a>
      </MDBRow>
      <MDBRow>
        <a href="mailto:goldiejackson25@yahoo.com" title='Email' target="_blank" rel="noreferrer noopener">
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
          <MDBIcon fas icon='envelope' size='xl' />
        </MDBBtn>
        </a>
      </MDBRow> 
    </div>
  )
};

export default SideBar;