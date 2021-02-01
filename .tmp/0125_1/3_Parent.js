import { useState } from 'react'
import ChildOne from './3_ChildOne'
import ChildTwo from './3_ChildTwo'

function Parent() {
  // 使用狀態
  const [data, setData] = useState('')

  return (
    <>
      <ChildOne setData={setData} />
      <ChildTwo data={data} />
    </>
  )
}

export default Parent
