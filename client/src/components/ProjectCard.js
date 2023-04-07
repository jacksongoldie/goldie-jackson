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
import HoverVideoPlayer from 'react-hover-video-player';


function ProjectCard({ project }) {

  return (
    <div>
      <MDBRow className='d-flex justify-content-center align-items-center'>
      <MDBCol>
      <MDBCard className='mb-3' style={{ margin: '5%' }}>
        
        { 
          project.on_hover_url ?
         <HoverVideoPlayer
         videoSrc={project.on_hover_url}
         crossOrigin="anonymous"
          // pausedOverlay={
          // <img
          //   src={project.image}
          //   alt=""
          //   style={{
          //     // Make the image expand to cover the video's dimensions
          //     width: '100%',
          //     height: '100%',
          //     objectFit: 'cover',
          //   }} /> }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
            />
         : 
         <> 
         {project.image ? <MDBCardImage position='top' src={project.image} alt='...' /> : null }
         </>
        }
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