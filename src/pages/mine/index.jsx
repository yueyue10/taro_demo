import React, {Component} from 'react'
import {View, Text} from '@tarojs/components'
import {AtTabBar} from 'taro-ui'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <View className='index'>
        我的
      </View>
    )
  }
}
