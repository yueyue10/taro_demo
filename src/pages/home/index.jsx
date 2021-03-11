import React, {Component} from 'react'
import {View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import {AtButton} from "taro-ui";

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  naviTo() {
    Taro.navigateTo({
      url: '/pages/home/movie/list'
    })
  }

  render() {
    return (
      <View className='index'>
        首页
        <AtButton type='primary' size='small' onClick={this.naviTo}>电影</AtButton>
      </View>
    )
  }
}
