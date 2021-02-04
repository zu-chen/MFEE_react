import { withRouter } from 'react-router-dom'

function ProductMen(props) {
  console.log(props)

  // 使用api來解析查詢字串
  // props.location.search是目前有後面查詢字串的值
  let searchParams = new URLSearchParams(props.location.search)

  return (
    <>
      {/* 建議搜尋功能做使用 */}
      <h1>ProductMen</h1>
      {/* 網址列輸入?i_code=123&str_category_code=456做測試 */}
      <h3>網址上查詢字串(Query String): </h3>
      <h5>i_code: {searchParams.get('i_code')}</h5>
      <h5>str_category_code: {searchParams.get('str_category_code')}</h5>
    </>
  )
}

// 高階元件樣式，以此才能得到props中綁字router給的三個屬性值
export default withRouter(ProductMen)
