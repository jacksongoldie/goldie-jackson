import image from './assets/goldie.png';
import SideBar from './SideBar';

function Body() {
  return (
    <div className='bg-image'>
      <div className="mask text-light d-flex justify-content-center flex-column text-center position-fixed">
        <SideBar />
      </div>
      <div className="mask d-flex justify-content-start" style={{ margin: '1%'}}>
        <p style={{ fontStyle:'italic' }}>Full-Stack Developer</p>
      </div>
        <img src={image} className='img-fluid shadow-4' alt='...' />
    </div>
  )
};

export default Body;