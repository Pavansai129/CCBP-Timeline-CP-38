import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
// Write your code here
const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <ul>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          theme={{secondary: 'white'}}
          items={timelineItemsList}
        >
          {timelineItemsList.map(each => {
            switch (each.categoryId) {
              case 'COURSE':
                return <CourseTimelineCard key={each.id} courseDetails={each} />
              case 'PROJECT':
                return (
                  <ProjectTimelineCard key={each.id} projectDetails={each} />
                )
              default:
                return null
            }
          })}
        </Chrono>
      </ul>
    </div>
  )
}

export default TimelineView
