import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//determines anecdote with highest number of votes, then displays anecdote and vote count 
const MostVotes = (props) =>{
  const most = props.numVotes.indexOf(Math.max(...props.numVotes))
  return(
    <div>
    {props.anecdotes[most]}<br></br>
    has {props.numVotes[most]} votes
    </div>
  )
}

const App = (props) => {
  //useState for selected anecdote
  const [selected, setSelected] = useState(0)
  //useState for updating vote counts, creates array of anecdotes length and initializes all indexes to 0 
  const [numVotes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  //vote function, adds + 1 to current anecdotes vote count
  const vote = () =>{
    const copy = [...numVotes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}<br></br>
      has {numVotes[selected]} votes<br></br>
      <div>
      <button onClick = {() => vote(selected)}>vote</button>
      {/** on click button sets selected anecdote at random */}
      <button onClick = {() => setSelected((Math.floor(Math.random() * anecdotes.length)))}>next anecdote</button><br></br>
      <h2>Anecdote with most votes</h2>
      <MostVotes numVotes = {numVotes} anecdotes = {anecdotes}></MostVotes>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)