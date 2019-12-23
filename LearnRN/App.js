/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Platform, TouchableOpacity, View, Text} from 'react-native';
import RNFS from 'react-native-fs';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._onPress = this._onPress.bind(this); //提交报名按钮
  }

  _onPress() {
    // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    // 图片
    // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.jpg`;
    // const formUrl = 'http://img.kaiyanapp.com/c7b46c492261a7c19fa880802afe93b3.png?imageMogr2/quality/60/format/jpg';

    // 文件
    // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.xlsx`;
    let dirs =
      Platform.OS === 'ios'
        ? RNFS.LibraryDirectoryPath
        : RNFS.ExternalDirectoryPath;
    //外部文件，共享目录的绝对路径（仅限android）
    const downloadDest = `${dirs}/${(Math.random() * 10000000) | 0}.xlsx`;

    const formUrl = 'http://XXX.XXX.XXX.X:3000/public/excel/test.xlsx';

    // 视频
    // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.mp4`;
    // http://gslb.miaopai.com/stream/SnY~bbkqbi2uLEBMXHxGqnNKqyiG9ub8.mp4?vend=miaopai&
    // https://gslb.miaopai.com/stream/BNaEYOL-tEwSrAiYBnPDR03dDlFavoWD.mp4?vend=miaopai&
    // const formUrl = 'https://gslb.miaopai.com/stream/9Q5ADAp2v5NHtQIeQT7t461VkNPxvC2T.mp4?vend=miaopai&';
    // 音频
    // const downloadDest = `${RNFS.MainBundlePath}/${((Math.random() * 1000) | 0)}.mp3`;
    // // http://wvoice.spriteapp.cn/voice/2015/0902/55e6fc6e4f7b9.mp3
    // const formUrl = 'http://wvoice.spriteapp.cn/voice/2015/0818/55d2248309b09.mp3';
    const options = {
      fromUrl: formUrl,
      toFile: downloadDest,
      background: true,
      begin: res => {
        console.log('begin', res);
        console.log('contentLength:', res.contentLength / 1024 / 1024, 'M');
      },
      progress: res => {
        let pro = res.bytesWritten / res.contentLength;
        this.setState({
          progressNum: pro,
        });
      },
    };
    try {
      const ret = RNFS.downloadFile(options);
      ret.promise
        .then(res => {
          console.log('success', res);
          console.log('file://' + downloadDest);
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (e) {
      // eslint-disable-next-line no-undef
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={this._onPress}>
          <Text style={{fontSize: 16, color: '#ffd339', textAlign: 'center'}}>
            download
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
