import React, { Component } from 'react'; 
import albumData from './../data/albums'; 

class Album extends Component {
	constructor(props) {
		super(props); 
	

	const album = albumData.find( album => {
		return album.slug === this.props.match.params.slug
	}); 

	this.state = {
		album: album
	}; 
}

	render() {
		return (
			<section className="album">
			{this.props.match.params.slug} Album will go here
			</section>
		); 
	}
}


export default Album; 