import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function ProjectCard({ project }) {

  return (
    <div>
      <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
      <MDBCard className='mb-3' style={{ margin: '5%'}}>
        {project.image ? <MDBCardImage position='top' src={project.image} alt='...' /> : null }
        <MDBCardBody>
          <MDBCardTitle>{project.title}</MDBCardTitle>
          <MDBCardText>
            {project.description}
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
      </MDBRow>
    </div>
  )
};

export default ProjectCard;