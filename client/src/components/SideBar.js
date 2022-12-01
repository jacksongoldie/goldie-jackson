import { MDBBtn, MDBIcon, MDBBtnGroup } from 'mdb-react-ui-kit';

function SideBar() {
  return (
    <div style={{ marginRight:'95%', marginTop: '10%'}}>
      <MDBBtnGroup vertical>
        <MDBBtn tag='a' style={{backgroundColor:'pink', color:'black'}} floating href="https://www.linkedin.com/in/goldie-jackson-951b57229/" title='LinkedIn' target="_blank" rel="noreferrer noopener">
          <MDBIcon fab icon='linkedin-in' size='xl' />
        </MDBBtn>
        <MDBBtn tag='a' style={{backgroundColor:'pink', color:'black'}} floating href="https://github.com/jacksongoldie" title='Github' target="_blank" rel="noreferrer noopener">
          <MDBIcon fab icon='github' size='xl' />
        </MDBBtn>
        <MDBBtn tag='a' style={{backgroundColor:'pink', color:'black'}} floating href="https://medium.com/@goldiejackson" title='Blog' target="_blank">
          <MDBIcon fab icon='medium' size='xl' />
        </MDBBtn>
        <MDBBtn tag='a' style={{backgroundColor:'pink', color:'black'}} floating href="mailto:goldiejackson25@yahoo.com" title='Email' target="_blank" >
          <MDBIcon fas icon='envelope' size='xl' />
        </MDBBtn>
      </MDBBtnGroup>
    </div>
  )
};

export default SideBar;