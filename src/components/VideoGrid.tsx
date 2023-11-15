import React, { Component } from 'react';
import { Video } from '../types/Video';
import './VideoGrid.css';

interface VideoGridProps {
  videos: Video[];
}

class VideoGrid extends Component<VideoGridProps> {
  render() {
    const { videos } = this.props;

    return (
      <div id="video-grid" className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-grid-item">
            <img src={video.thumbnail} alt={video.name} />
            <div className="video-info">
              <h4>{video.name}</h4>
              <p>{video.summary}</p>
              <p>{video.dateAdded}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default VideoGrid;