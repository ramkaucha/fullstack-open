const Total = ({parts}) => {
    const total = parts.reduce((sum, p) => sum += p.exercises, 0)
    return (
        <p><strong>total of {total} exercises</strong></p>
    )
}

export default Total
