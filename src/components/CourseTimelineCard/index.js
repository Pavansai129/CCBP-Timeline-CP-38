import {AiFillClockCircle} from 'react-icons/ai'
// Write your code here
const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <li>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(each => (
          <p key={each.id}>{each.name}</p>
        ))}
      </ul>
    </li>
  )
}

export default CourseTimelineCard
