import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Text
} from 'react-native';



export default class countDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
 			nric:"",
 			it:"",
 			isButtondisabled:false
        }
    }
        render() {
        return (
                <View>
                <TextInput 
                style={styles.text}
                placeholder = {"123"}
                onEndEditing={this.endEdit}
                value={this.state.nric}
                onChangeText={(value)=>this.setState({nric:value})}            
                />
                
				
					<Button 
					title="aButton"
					 disabled={this.state.isButtondisabled}
					/>
					
					{this.renderText()}
					
				<TextInput 
                style={styles.text}
                placeholder = {"123"}
                value={this.state.it}
                onChangeText={(value)=>this.setState({it:value})}            
                />	
                </View>
                )
    }

endEdit=()=>{
	if (this.state.nric==="abc"){
		return(
			 this.setState({isButtondisabled:true})
			)
		}
}

renderText(){
if(this.state.isButtondisabled==true){

	
	return(
		<View>
			<Text>123</Text>
		</View>
		)}
		else{
		return null}
}







}

styles = StyleSheet.create({

   text: {
       marginTop:100, 
       marginLeft:40,
       width: 200,
       fontSize: 30
   }
});
