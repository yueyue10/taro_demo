import React, {Component} from 'react'
import {View} from '@tarojs/components'

export default class List extends Component {
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
        电影
      </View>
    )
  }
}
