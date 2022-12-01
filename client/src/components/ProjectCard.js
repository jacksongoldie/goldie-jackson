import {
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBBtnGroup,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function ProjectCard({ project }) {

  return (
    <div>
      <MDBRow className='justify-content-center'>
      <MDBCol>
      <MDBCard className='mb-3' style={{ margin: '5%'}}>
        {project.image ? <MDBCardImage position='top' src={project.image} alt='...' /> : null }
        <MDBCardBody>
          <MDBCardTitle>{project.title}</MDBCardTitle>
          <MDBCardText>
            {project.description}
          </MDBCardText>
          {project.deploy_url ? <MDBBtn style={{margin:'1em', backgroundColor: 'pink', color:'black'}} tag='a' href={project.deploy_url} title='View App' target='_blank' >Live</MDBBtn> : null}
          {project.video_url ? <MDBBtn style={{margin:'1em', backgroundColor: 'pink', color:'black'}} tag='a' href={project.video_url} title='Watch Demo' target='_blank' >Video</MDBBtn> : null}
          {project.github_url ? <MDBBtn style={{margin:'1em', backgroundColor: 'pink', color:'black'}} tag='a' href={project.github_url} title='View Code' target='_blank' >Code</MDBBtn> : null}
          
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
    </div>
  )
};

export default ProjectCard;