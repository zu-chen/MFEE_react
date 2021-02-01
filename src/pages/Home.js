function Home(props) {
  const { auth } = props
  return (
    <>
      <h1>Home</h1>
      {/* 在App.js有設定, 由hooks的State:True or False判斷是否登入 */}
      <h2>{auth ? '會員已登入' : '未登入'}</h2>
    </>
  )
}

export default Home
