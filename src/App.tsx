import React, { useEffect, useState } from 'react'
import CalculateTimer from "./CalculateTimer"
import Controls from "./Controls"
import "./App.css"

function App() {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0)
  const [timerArray, setTimeArray] = useState<Array<number | string>>([])

  useEffect(() => {
    let timeArray: Array<number | string> = CalculateTimer(timeInSeconds);
    setTimeArray(timeArray)
  }, [timeInSeconds])

  return (
    <main className="mainContainer" data-test="mainContainer">
      <h1>Timer App Created</h1>
      <section className="timerContainer" data-test="timerContainer">
        <span className="timer" data-test="timer">{timerArray[0]}</span>:
        <span className="timer" data-test="timer">{timerArray[1]}</span>:
        <span className="timer" data-test="timer">{timerArray[2]}</span>
      </section>
      <Controls setTimeInSeconds={setTimeInSeconds} />
      <h6>Hassan Mujtaba</h6>
    </main>
  )
}

export default App
