import HelloWorld from './components/HelloWorld'
import HelloWorldClass from './components/HelloWorldClass'
import HelloWorldList from './components/HelloWorldList'
import MyLink from './components/MyLink'

function App() {
  return (
    <>
      <HelloWorld
        clickMethod={() => {
          alert('Test')
        }}
      />
      {/* <HelloWorld text="你好" name="Amy" /> */}

      <HelloWorldClass />
      {/* {undefined}或是{}皆會顯示預設 */}
      {/* <HelloWorldClass name={undefined} /> */}

      {/* 利用props屬性傳資料給子女元件 */}
      <HelloWorldList names={['Bob', 'Amy', 'Tom']} />

      <MyLink href="http://google.com.tw">Google</MyLink>
    </>
  )
}

export default App
