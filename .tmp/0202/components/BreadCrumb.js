import { withRouter, Link } from 'react-router-dom'

function BreadCrumb(props) {
  console.log(props)
  const { location } = props //從console.log得知location: {pathname: "/productcategory"}有網址路徑

  const pathnameList = ['/about', '/login', '/productcategory']
  const pathnameTextList = ['關於我們', '登入', '產品分類']

  const convertPathnameToText = (pathname) => {
    const index = pathnameList.findIndex((v) => v === pathname) // value===點擊的網址路徑
    // index > -1 有存在
    if (index > -1)
      return (
        <li className="breadcrumb-item active" aria-current="page">
          {/* 找index顯示value */}
          {pathnameTextList[index]}
        </li>
      )
    return ''
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          {convertPathnameToText(location.pathname)}
        </ol>
      </nav>
    </>
  )
}

export default withRouter(BreadCrumb)
