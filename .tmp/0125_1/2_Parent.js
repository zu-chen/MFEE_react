import Child from './Child_2'
import { useState } from 'react'

function Parent() {
  // 使用狀態
  const [data, setData] = useState('')
  return (
    <>
      {/* 點擊btn後才會得到setData, 故data呈現會於點擊btn後顯示 */}
      <h1>{data}</h1>
      {/* 給子女元件設定資料的函式作為props */}
      <Child aaa={setData} />
    </>
  )
}

export default Parent
