import React from "react";

class VideoListItem extends React.Component {
  render() {
    //const { video, onVideoSelect } = this.props;
    const imageUrl = this.props.video.snippet.thumbnails.default.url;

    return (
      <li onClick={() => this.props.onVideoSelect(this.props.video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{this.props.video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
