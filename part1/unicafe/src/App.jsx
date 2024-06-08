import { useState, useSyncExternalStore } from "react"

const Display = ({text}) => <div><h1>{text}</h1></div>
const Button = ({ onPress, text, setAll, allClicks}) => (
  <button
    onClick={() => {
      onPress();
      setAll(allClicks + 1);
    }}
  >
    {text}
  </button>
)
const Stats = ({name, num}) => <div>{name} {num}</div>

const CalculateStats = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  let average = 0;
  let positivePer = "0%";

  if (total > 0) {
    average = (good - bad) / total;
    positivePer = `${((good/total) * 100).toFixed(2)}%`;

  }

  return total > 0 ? (
    <div>
      <Stats name='good' num={good}/>
      <Stats name='neutral' num={neutral}/>
      <Stats name='bad' num={bad}/>
      <Stats name='all' num={total}/>
      <Stats name='average' num={average}/>
      <Stats name='positive' num={positivePer}/>
    </div>
  ) : (
    <div>No feedback given</div>
  );

};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);

  const Good = () => setGood(good + 1)
  const Neutral = () => setNeutral(neutral + 1)
  const Bad = () => setBad(bad + 1);

  return (
    <div>
      <Display text='give feedback'/>
      <Button onPress={Good} text='good' setAll={setAll} allClicks={allClicks}/>
      <Button onPress={Neutral} text='neutral' setAll={setAll} allClicks={allClicks}/>
      <Button onPress={Bad} text='bad' setAll={setAll} allClicks={allClicks}/>
      <Display text='statistics'/>
      <CalculateStats good={good} bad={bad} neutral={neutral}/>
    </div>
  )

}

export default App
