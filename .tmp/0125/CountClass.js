import React from 'react'

class CountClass extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
    console.log('constructor')
  }

  // 類別型元件-生命周期方法-掛載
  componentDidMount() {
    console.log('componentDidMount')
    // 只有在componentDidMount才能得到dom元素
    document.getElementById('clickme').addEventListener('click', function () {
      alert('你按到我了')
    })
  }
  // 類別型元件-生命周期方法-更新
  componentDidUpdate() {
    console.log('componentDidUpdate')
    // 可以得到最後更新過後的狀態值
    console.log('目前的狀態值是 ', this.state.total)
  }

  // 類別型元件-生命周期方法-卸載
  componentWillUnmount() {
    console.log('componentWillUnmount')
    // 和componentDidMount中成對的，這裡作移除事件
    document
      .getElementById('clickme')
      .removeEventListener('click', function () {
        alert('你按到我了')
      })
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>{this.state.total}</h1>
        <button id="clickme">按我</button>
        <button
          onClick={() => {
            // 先計算最後的更新值，建立一個新的值的變數(or常數)
            const newTotal = this.state.total + 1
            // **會後執行(非同步)** 給react設定狀態用(呈現畫面用)
            this.setState({ total: newTotal })
            // **會先執行** 作其它事用
            console.log(newTotal)
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -1
        </button>
      </>
    )
  }
}

export default CountClass
