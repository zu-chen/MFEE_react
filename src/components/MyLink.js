// 透過props傳入參數得到父母元件傳來的屬性值
function MyLink(props) {
  console.log(props)
  return (
    <>
      <h1>MyLink</h1>
      <a href={props.href} target="_blank" style={{ color: 'red' }}>
        {/* {props.children}：夾在tag中間的值 */}
        {props.children}
      </a>
    </>
  )
}

export default MyLink
