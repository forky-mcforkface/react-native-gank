'use strict'
import React from 'react-native'
import NavigationBar from './custom-views/react-native-navigationbar/index'

var {
  Component,
  StyleSheet,
  View,
  Image,
  Text
} = React

class AboutPage extends Component {
  render () {
    let content = (
      <View style={styles.contentContainer}>
        <Text style={{lineHeight: 18}}>每天一张精选妹纸图、一个精选小视频（视频源地址播放，因为视频来源于包含各大平台。。。着实不好统一播放器。。。
        ），一篇程序猿精选干货。</Text>
        <Text style={{marginTop: 13, lineHeight: 18}}>数据内容来源于代码家的 
          <Text textDecorationLine ='underline'> http://gank.io </Text>
        , PoberWong 完成React－Native的开发，非常感谢Vear的设计和指点。
        </Text>
        <Text style={{marginTop: 13, lineHeight: 18}}>My Github: 
          <Text textDecorationLine ='underline'> http://github.com/Bob1993 </Text>
        </Text>
        <Text style={{marginTop: 13, lineHeight: 18}}>Organization: 北京杰讯云动力科技有限公司</Text>
        <Text style={{marginTop: 13, lineHeight: 18}}>本项目属于公司开源项目，使用纯React-Native开发，如果你觉得这对你学习React-Native有很大的帮助，我不介意适量打赏喔～ 欢迎来访我的Github...  </Text>
        <Text style={{marginTop: 13, lineHeight: 18}}>支付宝: 15566261458 </Text>
      </View>
      )
    return (
      <View style={styles.container}>
          <Image source={require('./images/gank_launcher.png')} style={styles.imgLauncher}/>
          <Text style={styles.versionText}>干 客</Text>
          <Text style={styles.versionText}>v1.0.0</Text>
          <Text style={styles.aboutText}>关于开发者</Text>
          {content}
          <NavigationBar
            backTintColor='white'
            title='关于开发者'
            barOpacity={0.8}
            barStyle={styles.navbar}
            backFunc={() => {
              this.props.navigator.pop()
            }}/>
      </View>
      )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252528'
  },

  navbar: {
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute'
  },

  imgLauncher: {
    alignSelf: 'center',
    marginTop: 114,
    width: 90,
    height: 90
  },

  contentContainer: {
    height: 295,
    backgroundColor: 'white',
    margin: 8,
    padding: 15,
    borderRadius: 4
  },

  contentText: {
    fontSize: 14,
    color: 'white'
  },

  versionText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 13
  },

  aboutText: {
    fontSize: 15,
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 8,
    color: '#434243'
  }

})

module.exports = AboutPage