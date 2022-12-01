import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function Resume() {
  return (
    <div>
        <div style={{ minWidth: '22rem' }}>
      <h6 className='bg-light p-2 border-top border-bottom'>Marketing team</h6>
      <MDBListGroup light className='mb-4'>
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>John Doe</p>
              <p className='text-muted mb-0'>john.doe@gmail.com</p>
            </div>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/6.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Alex Ray</p>
              <p className='text-muted mb-0'>alex.ray@gmail.com</p>
            </div>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/7.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Kate Hunington</p>
              <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
            </div>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>

      <h6 className='bg-light p-2 border-top border-bottom'>Marketing team</h6>

      <MDBListGroup light className='mb-4'>
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/9.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Soraya Letto</p>
              <p className='text-muted mb-0'>soraya.letto@gmail.com</p>
            </div>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/11.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Zeynep Dudley</p>
              <p className='text-muted mb-0'>zeynep.dudley@gmail.com</p>
            </div>
          </div>
        </MDBListGroupItem>
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/15.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>Ayat Black</p>
              <p className='text-muted mb-0'>ayat.black@gmail.com</p>
            </div>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>
    </div>
    </div>
  )
};

export default Resume;