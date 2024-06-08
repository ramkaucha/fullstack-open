import { useState } from 'react'

const Display = ({heading, anecdote, vote}) => (
  <div>
    <h1>{heading}</h1>
    <p>{anecdote}</p>
    <p>has {vote} votes</p>

  </div>
)
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const nextAnecdote = (setSelected, anecdoteLength) => {
  const random = Math.floor(Math.random() * anecdoteLength);
  setSelected(random);
}

const voteAnecdote = (vote, setVote, selected) => {
  const newVote = [...vote];
  newVote[selected] += 1;
  setVote(newVote);
}

const mostVoted = (vote, anecdote) => {
  const maxVote = Math.max(...vote);
  const index = vote.indexOf(maxVote);
  return {
    anecdote: anecdote[index],
    vote: maxVote
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const mostVotedAnecdote = mostVoted(vote, anecdotes);

  return (
    <div>
      <Display heading='Anecdote of the day' anecdote={anecdotes[selected]} vote={vote[selected]}/>
      <Button handleClick={() => voteAnecdote(vote, setVote, selected)} text='vote'/>
      <Button handleClick={() => nextAnecdote(setSelected, anecdotes.length)} text='next anecdote'/>
      <Display heading='Anecdote with most votes' anecdote={mostVotedAnecdote.anecdote} vote={mostVotedAnecdote.vote}/>
    </div>
  )
}

export default App
