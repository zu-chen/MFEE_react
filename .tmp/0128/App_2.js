import React, { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

function App() {
  const buttonOneRef = useRef(null) // null空值

  const [data, setData] = useState(123)

  // componentDidMount
  useEffect(() => {
    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    $('#one').on('click', () => alert('data is ' + data))

    //console.log(buttonOneRef.current)
    $(buttonOneRef.current).on('click', () => alert('data is ' + data))
  }, [])

  return (
    <>
      {/* id與ref的差別為是否可重複 */}
      <button id="one">click me1</button>
      <button ref={buttonOneRef}>click me2</button>
    </>
  )
}

export default App
