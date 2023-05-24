import React from 'react';
import reviewsData from './data.json';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './App.css';

interface AppState {
  currentTime: string;
  language: string;
  timerID: NodeJS.Timeout | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
      language: 'ru',
      timerID: null,
    };
  }

  componentDidMount() {
    const timerID = setInterval(() => this.updateTime(), 1000);
    this.setState({ timerID });
  }

  componentWillUnmount() {
    const { timerID } = this.state;
    if (timerID) {
      clearInterval(timerID);
    }
  }

  updateTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
    });
  }

  changeLanguage(language: string) {
    this.setState({ language });
  }

  render() {
    const { currentTime, language } = this.state;

    return (
      <div>
        <Header
          currentTime={currentTime}
          changeLanguage={(language) => this.changeLanguage(language)}
        />
        <Main
          language={language}
          reviewsData={reviewsData}
        />
      </div>
    );
  }
}

export default App;
