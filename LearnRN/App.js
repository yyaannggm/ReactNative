import RNFS from 'react-native-fs';

const ExternalDirectoryPath = RNFS.ExternalDirectoryPath;
export const downloadFile = (formUrl, targetName) => {
  const toLoadPath = `${ExternalDirectoryPath}/${targetName}`;
  RNFS.downloadFile({
    fromUrl: formUrl,
    toFile: toLoadPath,
    progressDivider: 5,
    begin: res => {
      console.log('begin', res);
    },
    progress: res => {
      console.log('progress', res);
    },
  })
    .promise.then(res => {
      console.log(res, '下载成功!!');
    })
    .catch(err => {
      console.log(err, '下载失败!!');
    });
};
