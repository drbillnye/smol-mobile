```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { authenticateUser } from './services/authentication';
import HomeScreen from './components/HomeScreen';
import TopicViewScreen from './components/TopicViewScreen';
import VideoViewScreen from './components/VideoViewScreen';
import './styles/App.css';

class App extends React.Component {
  state = {
    authenticated: false,
  };

  componentDidMount() {
    authenticateUser()
      .then(() => {
        this.setState({ authenticated: true });
      })
      .catch((error) => {
        console.error('Authentication failed', error);
      });
  }

  render() {
    if (!this.state.authenticated) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/topic/:id" component={TopicViewScreen} />
            <Route path="/video/:id" component={VideoViewScreen} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
```