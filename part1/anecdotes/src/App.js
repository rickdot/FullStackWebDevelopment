import { useState } from 'react'

var points = new Uint8Array(7)  // initialize an array

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const DisplayAnecdote = ({selected, anecdotes}) => {
  return (
    <div>
      {anecdotes[selected]}
    </div>
  )
}

const DisplayVote = ({selected, votes}) => {
  return (
    <div>
      has {votes[selected]} votes
    </div>
  )
}

const DisplayMostVotes = ({votes, anecdotes}) => {
  const copy = [...votes]
  var maxValue = Math.max.apply(null, copy)
  var maxIndex = votes.indexOf(maxValue)
  return (
    <div>
      <DisplayAnecdote selected={maxIndex} anecdotes={anecdotes} />
      <DisplayVote selected={maxIndex} votes={votes} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)

  const handleClick = () => {
    var number = Math.floor(Math.random() * 7)
    setSelected(number)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  // console.log(votes);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <DisplayAnecdote selected={selected} anecdotes={anecdotes} />
      <DisplayVote selected={selected} votes={votes}/>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleClick} text='next anecdote' />
      <h2>Anecdotes with most votes</h2>
      <DisplayMostVotes votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App