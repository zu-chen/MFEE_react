import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0) // 解構賦值

  return (
    <h1
      onClick={() => {
        setTotal(total + 1)
      }}
    >
      {total}
    </h1>
  )
}

export default App
