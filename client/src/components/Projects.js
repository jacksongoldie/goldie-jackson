import ProjectCard from './ProjectCard';

function Projects() {

  //FREE DATABASE IS TOO SLOW FOR GOLDIE-JACKSON.COM SO HARDCODING FOR NOW :)
  // const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   fetch(`https://goldie-jackson.onrender.com/projects`)
  //   .then(r=>r.json())
  //   .then(setProjects)
  // }, [])

  const projects = [
    {
        "id": 1,
        "title": "Bookshelf",
        "description": "An app for sharing what books you've been reading to help others find characters more like them! This project uses a React frontend with a Rails backend and Material Design Bootstrap for styling. Notable gems used are Devise for auth and Cloudinary for image uploading. This project is hosted for free on Render.com and may need time to load the server for the app.",
        "languages": null,
        "image": "https://res.cloudinary.com/dsplrsuko/image/upload/v1669850725/bookshelf_dhwliu.png",
        "on_hover_url": "https://www.youtube.com/watch?v=jmUbb9jGpPg",
        "video_url": "https://youtu.be/oFHQcE9vPL4",
        "github_url": "https://github.com/jacksongoldie/bookshelf"
    },
    {
        "id": 2,
        "title": "Meeting Rooms",
        "description": "Imagine with me for a moment that you manage an Office Park with several companies who need to share conference areas and meeting rooms. This app allows for those companies to be in charge of their own reservations! They can make as many reservations as they want as long as the room isn't already booked by another user. Reservations may be canceled or edited.",
        "languages": null,
        "image": "https://miro.medium.com/max/720/1*74DLF_IEArF0tGUCZP7OFg.webp",
        "on_hover_url": "",
        "video_url": "https://youtu.be/rqQ3CPv2WuA",
        "github_url": "https://github.com/jacksongoldie/meeting-rooms"
    },
    {
        "id": 3,
        "title": "PinTube",
        "description": "One of my first projects, PinTube is a video collection tool allowing users to input information about a video, including it's YouTube url, to be displayed on the Homepage. I've collected some of my favorite meditation and low impact workout videos. ",
        "languages": null,
        "image": "https://user-images.githubusercontent.com/82850134/142435693-b4d611dc-da51-4891-bc4b-922e2bdbe407.png",
        "on_hover_url": "",
        "video_url": "https://youtu.be/jQnQ5iH4E5M",
        "github_url": "https://github.com/jacksongoldie/pintok"
    }
]

  const cards = projects.map((p) => <ProjectCard project={p} key={p.id} />)
  return (
    <div style={{ margin: '10%'}}>
      <p>Projects completed while attending Flatiron Software Engineering Program</p>
      {/* <p style={{ fontStyle:'italic', fontSize:'small' }}></p> */}
      {cards}
    </div>
  )
};

export default Projects;