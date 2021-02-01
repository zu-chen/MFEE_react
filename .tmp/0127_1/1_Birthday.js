// html5的date介面
import { useState } from 'react'

function Birthday() {
  const [birth, setBirth] = useState('2021-01-27')

  return (
    <>
      <label for="birth">出生年月日:</label>
      <input
        type="date" // 有這個就夠夠的了
        id="birth"
        name="birth"
        value={birth} // 預設並且不能更改
        onChange={(e) => {
          // 加上onchange就可以改了
          setBirth(e.target.value)
        }}
        min="1920-01-01"
        max="2021-01-01"
      />
      <button onClick={() => {}}>送出</button>
    </>
  )
}

export default Birthday
