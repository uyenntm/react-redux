import React, { Component } from 'react'

export default class VideoListItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    
  }
  
  
  render() {
    const imageURL = this.props.video.snippet.thumbnails.default.url;
    return (
      <li onClick={()=>this.props.onVideoSelect(this.props.video)} 
      className="list-group-item" >
        <div className="video-list media">
          <div className="media-left">
            <img src={imageURL} className="media-object" />
          </div>
          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    )
  }
}
