import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import RNFS from 'react-native-fs';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  render() {
    return (
      <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Button
                title="download"
                onPress={this.onPress} />
            </View>
          </View>
        </ScrollView>
      </>
    )
  }

  onPress = () => {
    let dirs = RNFS.LibraryDirectoryPath
    const downloadDest = `${dirs}/.jpg`;
        const options = {
               fromUrl: 'https://img.atcoder.jp/agc039/editorial.pdf',
              toFile: downloadDest,
                background: true,
  }
  const ret = RNFS.downloadFile(options)
}}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
})

export default App;
