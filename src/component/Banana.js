import React, {Component} from 'react';
import { AppRegistry, Image, View } from 'react-native';

export default class Banana extends Component{

	constructor(props){
		super(props);
	}

	render(){

		var pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

		return(
			<View>
				<Image source={pic} style={{width:200, height:100}}/>
			</View>
		);

	}
}
