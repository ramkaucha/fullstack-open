import Unit from './Unit'
import Total from './Total'

const Course = ({course}) => {
    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map(c => 
                <Unit key={c.id} unit={c}/>
            )}
            <Total key={course.parts.id} parts={course.parts}/>
        </div>
    )
}

export default Course
