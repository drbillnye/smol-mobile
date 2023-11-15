import React, { Component } from 'react';
import { Topic } from '../types/Topic';
import { getTopics } from '../services/database';
import TopicGrid from './TopicGrid';
import '../styles/HomeScreen.css';

interface State {
  topics: Topic[];
}

class HomeScreen extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      topics: [],
    };
  }

  componentDidMount() {
    getTopics().then((topics: Topic[]) => {
      this.setState({ topics });
    });
  }

  render() {
    const { topics } = this.state;
    return (
      <div id="home-screen-grid" className="home-screen-grid">
        <TopicGrid topics={topics} />
      </div>
    );
  }
}

export default HomeScreen;