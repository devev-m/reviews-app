import React from 'react';
import Header from './components/Header/Header';
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
      language: 'RU',
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
          language={language}
          changeLanguage={(language) => this.changeLanguage(language)}
        />
      </div>
    );
  }
}

export default App;
