import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function Resume() {

    const frontend = [
        { 
            name: 'React', 
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
        },
        {
            name: 'Javascript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'
        },
        {
            name: 'HTML5',
            image: 'https://res.cloudinary.com/dsplrsuko/image/upload/v1669907880/html_vv7xmb.png'
        },
        {
            name: 'CSS',
            image: 'https://res.cloudinary.com/dsplrsuko/image/upload/v1669907839/css_318-698167_cmftyl.webp'
        },
        {
            name: 'Bootstrap',
            image: 'https://res.cloudinary.com/dsplrsuko/image/upload/v1669907764/bootstrap-logo_yzdgwk.png'
        },
        {
            name: 'MDBootstrap',
            image: 'https://res.cloudinary.com/dsplrsuko/image/upload/v1669907715/mdb_tdxpxh.jpg'
        }
    ]

    const backend = [
        {
            name: 'Ruby on Rails',
            image: 'https://www.edureka.co/blog/wp-content/uploads/2019/02/What-is-Ruby-on-Rails-1.png'
        },
        {
            name: 'PostgresSQL',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
        },
        {
            name: 'SQLite',
            image: 'https://res.cloudinary.com/dsplrsuko/image/upload/v1669908014/sqlite_ygcoxi.jpg'
        },
        {
            name: 'Sinatra',
            image: 'https://cdn.freebiesupply.com/logos/large/2x/sinatra-logo-png-transparent.png'
        }
    ]

    const tools = [
        {
            name: 'postman',
            image: 'https://res.cloudinary.com/dsplrsuko/image/upload/v1669907497/post_nqqpfy.png'
        },
        {
            name: 'github',
            image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
        },
        {
            name: 'Wordpress',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png'
        },
        {
            name: 'cPanel',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1Orz8MDwOF1ENnYn2J2HU4r4hNox4EDFsBtUuzLYr_jeJAzJuOHgmyE4D_xS_qfmmiE&usqp=CAU' 
        },
        {
            name: 'HostGator',
            image: 'https://res.cloudinary.com/dsplrsuko/image/upload/v1669909118/hostg_mizmdd.png'
        }
    ]
  return (
    <div style={{ marginLeft:'30%', marginRight:'30%', marginTop:'5%' }} >
        <div>
        <h6 className='p-2 border-bottom'>Experience</h6>
      <MDBListGroup className='mb-4'>
        <MDBListGroupItem
        className='d-flex justify-content-center align-items-center' noBorders>
        {frontend.map((f) => <div key={f.name} className='d-flex align-items-center'>
            <img
              src={f.image}
              alt={f.name} 
              title={f.name} 
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
          </div>)}
        </MDBListGroupItem>
        
        <MDBListGroupItem className='d-flex justify-content-center align-items-center' noBorders>
        {backend.map((b) => <div key={b.name} className='d-flex align-items-center'>
            <img
              src={b.image}
              alt={b.name}  
              title={b.name}
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
          </div>)}
        </MDBListGroupItem>
        <MDBListGroupItem className='d-flex justify-content-center align-items-center' noBorders>
        {tools.map((t) => <div key={t.name} className='d-flex align-items-center'>
            <img
              src={t.image}
              alt={t.name} 
              title={t.name}
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
          </div>)}
        </MDBListGroupItem>
      </MDBListGroup>
    </div>
    </div>
  )
};

export default Resume;