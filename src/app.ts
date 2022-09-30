import { PropsWithChildren } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
import './app.less'

function App(props: PropsWithChildren) {
  // 对应 onShow
  useDidShow(() => {
    console.log('show')
  })

  // 对应 onHide
  useDidHide(() => {
    console.log('hide')
  })

  return props.children
}

export default App
