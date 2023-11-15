import React, { Component } from 'react';
import { VideoGrid } from './VideoGrid';
import { getVideos } from '../services/database';
import { Video } from '../types/Video';

interface TopicViewScreenState {
  videos: Video[];
}

class TopicViewScreen extends Component<{}, TopicViewScreenState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  componentDidMount() {
    getVideos().then((videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div id="topic-view-grid">
        <VideoGrid videos={this.state.videos} />
      </div>
    );
  }
}

export { TopicViewScreen };