import Child from '../0125/Child_1'

function Parent() {
  const innerData = '父母元件內部資料'
  // 利用props直接傳遞資料給子女元件
  return <Child data={innerData} />
}

export default Parent
