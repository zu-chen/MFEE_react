import { useState } from 'react'
import CountFunc from './0125CountFunc'

function CountParent() {
  // 使用狀態
  //   const [initNumber, setInitNumber] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <>
      {/* <CountFunc initNumber={initNumber} />
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
      </button> */}

      <CountFunc total={total} setTotal={setTotal} />
      <button
        onClick={() => {
          setTotal(10)
        }}
      >
        重新設定，一開始為10
      </button>
      <button
        onClick={() => {
          setTotal(100)
        }}
      >
        重新設定，一開始為100
      </button>
    </>
  )
}

export default CountParent
