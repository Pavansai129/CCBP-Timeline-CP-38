import {Chrono} from 'react-chrono'
import {AiFillCalendar} from 'react-icons/ai'
// Write your code here
const ProjectTimelineCard = props => {
  const {projectDetails} = props
  console.log(projectDetails)
  const {
    projectTitle,
    projectUrl,
    imageUrl,
    description,
    duration,
  } = projectDetails
  return (
    <li>
      <img src={imageUrl} alt="project" />
      <h1>{projectTitle}</h1>
      <div>
        <AiFillCalendar />
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </li>
  )
}

export default ProjectTimelineCard
