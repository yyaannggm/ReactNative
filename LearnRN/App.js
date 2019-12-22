import React, {Component} from 'react';;
import RNFS from 'react-native-fs';

export default class VerifyCode extends Component {
  downloadFile() {
    const downloadDest = `${RNFS.MainBundlePath}/${(Math.random() * 1000) |
      0}.mp3`;

    const formUrl =
      'http://wvoice.spriteapp.cn/voice/2015/0818/55d2248309b09.mp3'
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
      }
    };
    try {
      const ret = RNFS.downloadFile(options);
      ret.promise
        .then(res => {
          console.log('success', res);

          console.log('file://' + downloadDest);;


            CameraRoll.saveToCameraRoll(downloadDest)
            .then(() => {
              Toast.showShortCenter('图片已保存到相册');;
            })
            .catch(() => {
              Toast.showShortCenter('图片保存失败');;
            });
        })
        .catch(err => {
          console.log('err', err);
        });
    } catch (e) {
      console.log(error);
    }
  }
}

