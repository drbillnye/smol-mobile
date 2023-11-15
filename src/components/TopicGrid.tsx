import React, { Component } from 'react';
import { Topic } from '../types/Topic';
import { getTopics } from '../services/database';

interface TopicGridProps {}

interface TopicGridState {
  topics: Topic[];
}

class TopicGrid extends Component<TopicGridProps, TopicGridState> {
  constructor(props: TopicGridProps) {
    super(props);
    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
    getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  render() {
    return (
      <div id="topic-grid">
        {this.state.topics.map((topic, index) => (
          <div key={index} className="topic-thumbnail">
            <img src={topic.thumbnail_image} alt={topic.name} />
            <div className="topic-info">
              <h2>{topic.name}</h2>
              <p>Last updated: {topic.last_updated}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TopicGrid;