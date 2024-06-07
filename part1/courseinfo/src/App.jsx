const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Content = ( {part} ) => {
  return (
    <div>
      {part.map((p, index) => (
        <p key={index}>{p.name} {p.exercises}</p>
      ))}
    </div>
  )
}

const Total = ({part}) => {
  const totalExercise = part.reduce((sum, p) => sum + p.exercises, 0)
  return (
    <div>
      <p>Number of exercises {totalExercise}</p>
    </div>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals for React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content part={course.parts}/>
      <Total part={course.parts}/>
    </div>
  )
}

export default App
