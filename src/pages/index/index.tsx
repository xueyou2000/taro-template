import { Button, Image, Swiper, SwiperItem, Text, View } from '@tarojs/components'
import { useCallback } from 'react'
import { useEnv, useModal, useNavigationBar, useToast } from 'taro-hooks'
import { Counter } from '@/stores'
import logo from './hook.png'

import './index.less'

function CounterDisplay() {
  let counter = Counter.useContainer()
  return (
    <View>
      <Button onClick={counter.decrement}>-</Button>
      <Text>{counter.count}</Text>
      <Button onClick={counter.increment}>+</Button>
    </View>
  )
}

const Index = () => {
  const env = useEnv()
  const [_, { setTitle }] = useNavigationBar({ title: 'Taro Hooks' })
  const [show] = useModal({
    title: 'Taro Hooks!',
    showCancel: false,
    confirmColor: '#8c2de9',
    confirmText: '支持一下',
    mask: true
  })
  const [showToast] = useToast({ mask: true })

  const handleModal = useCallback(() => {
    show({ content: '不如给一个star⭐️!' }).then(() => {
      showToast({ title: '点击了支持!' })
    })
  }, [show, showToast])

  return (
    <Counter.Provider>
      <View className="wrapper">
        <Image className="logo" src={logo} />
        <CounterDisplay />
        <Text className="title">为Taro而设计的Hooks Library</Text>
        <Text className="desc">
          目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks! 并结合ahook适配Taro!
        </Text>
        <View className="list">
          <Text className="label">运行环境</Text>
          <Text className="note">{env}</Text>
        </View>
        <Button className="button" onClick={() => setTitle('Taro Hooks Nice!')}>
          设置标题
        </Button>
        <Button className="button" onClick={handleModal}>
          使用Modal
        </Button>

        <Swiper className="box" autoplay interval={5000} indicatorColor="#999">
          <SwiperItem>
            <View className="text">1</View>
          </SwiperItem>
          <SwiperItem>
            <View className="text">2</View>
          </SwiperItem>
          <SwiperItem>
            <View className="text">3</View>
          </SwiperItem>
        </Swiper>
      </View>

      <Counter.Provider initialState={5}>
        <CounterDisplay />
      </Counter.Provider>
    </Counter.Provider>
  )
}

export default Index
