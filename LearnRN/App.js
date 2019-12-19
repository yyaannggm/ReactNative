import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import styles from './VerifyCode.style';

export default class VerifyCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      verifyCode: '',
    };
  }

  downCount = () => {
    if (this.count >= 1) {
      this.count--;
    } else {
      clearInterval(timer);
    }
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState == 'hidden') {
      clearInterval(timer)
      start = new Date().getTime()
    } else if (document.visibilityState == 'visible') {
      end = new Date().getTime()
      s2 = Math.floor((end - start) / 1000)
      this.count = this.count - s2
      timer = setInterval(downCount, 1000)
      document.removeEventListener('visibilitychange')
    }
  })
timer = setInterval(downCount, 1000)
  }