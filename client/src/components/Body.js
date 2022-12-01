import image from './assets/goldie.png';
import SideBar from './SideBar';
import Resume from './Resume';

function Body() {
  return (
    <div className='bg-image' style={{ margin:'.5%'}}>
      <div className="mask d-flex justify-content-start" style={{ margin: '2%' }}>
        <p style={{ fontStyle:'italic' }}>Full-Stack Developer</p> 
      </div>
      <img src={image} className='img-fluid shadow-4' alt='...' />
      <div className="mask d-flex justify-content-between">
        <SideBar />
      </div>
        <Resume />
    </div>
  )
};

export default Body; 