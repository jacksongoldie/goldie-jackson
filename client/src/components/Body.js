import image from './assets/goldie.png';
import SideBar from './SideBar';

function Body() {
  return (
    <div>
      <div class="mask text-light d-flex justify-content-center flex-column text-center">
        <SideBar />
      </div>
        <img src={image} className='img-fluid shadow-4' alt='...' />
    </div>
  )
};

export default Body;