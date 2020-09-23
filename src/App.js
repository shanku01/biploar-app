import React, { Component } from 'react';
import './App.css';
import ImgList from './Components/ImgList';
import axios from "axios";

export default class App extends Component {
	constructor() {
		super();
		//all the images will load in imgs so that the app can you the data
		this.state = {
			imgs: []
		};
		//Binding fuction with class so they can use "this"
		this.collection1 =this.collection1.bind(this);
		this.collection2 =this.collection2.bind(this);
	}
	//loading images on page by default
	componentDidMount() {
		axios
		.get('https://api.unsplash.com/collections/1580860/photos/?per_page=30&client_id=nMo0cw4x_jITHjIOLUHWgcTekdxKfSmU0y_uLMqDNnI')
		.then(data => {
			this.setState({ imgs: data.data });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
	}
	//loading images by choice
	collection1(){
		axios
		.get('https://api.unsplash.com/collections/1580860/photos/?per_page=30&client_id=nMo0cw4x_jITHjIOLUHWgcTekdxKfSmU0y_uLMqDNnI')
		.then(data => {
			this.setState({ imgs: data.data });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
	}
	collection2(){
		axios
		.get('https://api.unsplash.com/collections/139386/photos/?per_page=30&client_id=nMo0cw4x_jITHjIOLUHWgcTekdxKfSmU0y_uLMqDNnI')
		.then(data => {
			this.setState({ imgs: data.data });
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
	}
	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">Upsplash Api test</h1><br/><br/>
						<button  className='search-button' onClick={this.collection1}>Collection1</button>
						<button  className='search-button' onClick={this.collection2}>Collection2</button>
					</div>
				</div>
				<div className="main-content">
					<ImgList data={this.state.imgs} />
				</div>
			</div>
		);
	}
}