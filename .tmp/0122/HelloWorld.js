import PropTypes from 'prop-types'

// 函式型寫法
// 透過props傳入參數得到父母元件傳來的屬性值
function HelloWorld(props) {
  console.log(props)
  const { name, text, clickMethod } = props // 解構賦值

  return (
    <>
      <h1>HelloWorld</h1>
      {/* 沒有const 解構賦值的寫法 */}
      {/* <h2>
        {props.name}, {props.text}
      </h2> */}
      <h2 onClick={clickMethod}>
        {name}, {text}
      </h2>
    </>
  )
}

// 預設屬性(沒給或給undefined)
HelloWorld.defaultProps = {
  name: 'Bob',
  text: 'Hello',
}

// 檢查props的類型
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickMethod: PropTypes.func,
}

export default HelloWorld
