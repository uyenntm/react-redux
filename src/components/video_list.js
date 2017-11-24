import React, { Component } from 'react'
import VideoListItem from "./video_list_items";
export default class VideoList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }  
    }
    
    
  render() {
    const videoItems = this.props.videos.map((video) =>{
        return <VideoListItem 
        onVideoClick={this.props.onVideoSelect}
        key={video.etag} 
        video={video} />
      });
    return (
      <div>
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
      </div>
    )
  }
}
