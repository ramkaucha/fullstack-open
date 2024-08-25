import Note from './Note.jsx'

const App = (props) => {
    const { notes } = props

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(n => 
                    <Note key={n.id} note={n} />
                )}
            </ul>
        </div>
    )
}

export default App
