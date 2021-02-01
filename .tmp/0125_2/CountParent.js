import { useState } from 'react'
import CountFunc from './CountFunc' // 子層

function CountParent() {
  // 使用狀態
  const [initNumber, setInitNumber] = useState(0) // useState(0)初始值

  return (
    <>
      <CountFunc initNumber={initNumber} />
      <button
        onClick={() => {
          setInitNumber(10)
        }}
      >
        設定一開始為10
      </button>
      <button
        onClick={() => {
          setInitNumber(100)
        }}
      >
        設定一開始為100
      </button>
    </>
  )
}

export default CountParent
