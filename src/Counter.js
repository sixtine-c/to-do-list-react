import { useState, useEffect } from 'react';

const Counter = ({start}) => {
  const [count, setCount ] = useState(start)
  const increment = () => {
    setCount(count + 1)
  }
  const [count2, setCount2] = useState(start)
  const increment2 = () => {
    setCount2(count2 + 1)
  }

  useEffect(()=> {
    if (count === count2) console.log({count, count2, start})

  }, [count, count2])

  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={increment}>incremente !</button>
      <div>
        {count2}
      </div>
      <button onClick={increment2}>incremente !</button>
    </div>
  )
}

export default Counter;
