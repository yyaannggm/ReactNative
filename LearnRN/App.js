import { 
  upgrade,
  versionName,
  versionCode,
  openAPPStore,
  checkIOSUpdate,
  addDownLoadListener,
} from 'rn-app-upgrade';

if(Android) {
  if(res.versionCode > versionCode) {
    upgrade(res.apkUrl);
  }
} else {
  const IOSUpdateInfo = await checkUpdate(appid, 当前版本号);
  IOSUpdateInfo.code // -1: 未查询到该App 或 网络错误 1: 有最新版本 0: 没有新版本
  IOSUpdateInfo.msg
  IOSUpdateInfo.version
}