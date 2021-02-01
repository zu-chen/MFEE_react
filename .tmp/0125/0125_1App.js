// import { useState } from 'react'
// import Parent from './components/Parent'
// import CountParent from './components/CountParent'
// import CountClass from './components/CountClass'
import CountFunc from './components/CountFunc'

function App() {
  // const [show, setShow] = useState(true)
  return (
    <>
      {/* <Parent /> */}
      {/* <CountParent /> */}
      {/* <CountClass /> */}

      {/* if的簡寫法 */}
      {/* 類別元件寫法 */}
      {/* {show && <CountClass />} */}

      {/* 函式元件寫法 */}
      {show && <CountFunc />}
      <hr />
      <button
        onClick={() => {
          // trigger切換狀態布林值的語法
          setShow(!show)
        }}
      >
        {/* if...else...的簡寫法 */}
        {show ? '消失吧' : '復活吧'}
      </button>
    </>
  )
}

export default App
