import React, { Component } from 'react';
import { Video } from '../types/Video';
import VideoPlayer from './VideoPlayer';
import EditableTitle from './EditableTitle';
import Transcript from './Transcript';

interface VideoViewScreenProps {
  video: Video;
}

class VideoViewScreen extends Component<VideoViewScreenProps> {
  render() {
    const { video } = this.props;

    return (
      <div id="video-view-player">
        <VideoPlayer video={video} />
        <EditableTitle title={video.name} />
        <Transcript transcript={video.transcript} />
      </div>
    );
  }
}

export default VideoViewScreen;