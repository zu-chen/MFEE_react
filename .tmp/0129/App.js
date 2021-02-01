// 使用套件
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'

// 頁面用元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProductBaby from './pages/ProductBaby'
import ProductMen from './pages/ProductMen'
import ProductWomen from './pages/ProductWomen'
import NotFoundPage from './pages/NotFoundPage'
import ProductCategory from './pages/ProductCategory'
import Member from './pages/Member'
import Student from './pages/Student'

// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
// import BreadCrumb from './components/BreadCrumb'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <MyNavbar auth={auth} />
        {/* 主內容區 */}
        <MainContent>
          {/* <h2>用Link元件, 不會刷新頁面</h2> */}
          {/* Link to/a href哪裡, 下面path回應哪裡 */}
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/product/baby">ProductBaby</Link>
          <Link to="/product/men">ProductMen</Link> */}

          {/* <hr />
          <h2>用a元件, 會刷新頁面</h2>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/login">Login</a> */}

          {/* 匹配路由表(路徑單一匹配) */}
          {/* path回應哪裡 */}
          {/* 切換顯示的元件畫面放在這下面 */}
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          {/* <BreadCrumb /> */}
          <MultiLevelBreadCrumb />
          <ScrollToTop>
            <Switch>
              <Route path="/student">
                <Student />
              </Route>
              <Route path="/product/women">
                <ProductWomen />
              </Route>
              <Route path="/product/men">
                <ProductMen />
              </Route>
              {/* 這裡要定義網址參數的屬性名稱 */}
              <Route path="/product/baby/:id?">
                <ProductBaby />
              </Route>
              <Route path="/login">
                {/* 利用props傳入頁面元件狀態 */}
                <Login auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/about">
                <About auth={auth} />
              </Route>
              <Route exact path="/">
                <Home auth={auth} />
              </Route>
              <Route path="/productcategory">
                <ProductCategory />
              </Route>
              <Route path="/member">
                <Member auth={auth} />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>
        {/* 頁尾+版權訊息 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
