import React, { Component } from 'react';



export default class Touchable extends Component {
          constructor(props){
            super(props);
          }

     
              render (){
                return(
                <View>
                  <TouchableOpacity onPress={()=>{
                    Linking.canOpenURL(this.props.url).then(supported => {
                      if (!supported) {
                        console.log('Can\'t handle url: ' + this.props.url);
                      } else {
                        return Linking.openURL(this.props.url);
                      }
                    }).catch(err => console.error('An error occurred', err));
                    }}>
                    <MeItem lefttitle={this.props.title}/>
                  </TouchableOpacity>


   
<Touchable url={'tel:18585025253'} title={'电话热线：18585025253'} />
           <Touchable url={'mailto:674668211@qq.com'} title={'发送邮件：674668211@qq.com'} />
           <Touchable url={'http://www.baidu.com'} title={'打开http网页'} />
           <Touchable url={'https://www.baidu.com'} title={'打开https网页'} />
           <Touchable url={'smsto:18585025253'} title={'发送短信'} />
</View>
                )
              }

            }
           
       
 

// . 打开电话功能：Linking.openURL("tel:" + 电话号码 );

//         eg：Linking.openURL("tel:"+'10056' );

// 3. 打开短信功能：Linking.openURL("sms:" + 电话号码);

//         eg：Linking.openURL("sms:"+'10056' );

//         注意：Linking.openURL("smsto:" + 电话号码);  ==>> 在android上可以打开短信，但是ios不行，需要用 "sms:" ！

// 4. 打开邮箱功能：Linking.openURL("mailto:" + 邮件地址);

//         eg：Linking.openURL("sms:"+'10056@163.com' );
// 打开地图app http://maps.apple.com/?q=

// 邮件
//     打开邮件app message://
//     写邮件 mailto:
//     发送电子邮件 mailto:${EMAIL}?cc=&subject=${SUBJECT}&body=${BODY}