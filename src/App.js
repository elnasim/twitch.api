import React, {Component} from 'react';
import StreamItem from "./StreamItem";
import './App.css';

class App extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    const myHeaders = new Headers({
      'Client-ID': 'z97pdq1cei4wqu42l3kkkdnseq06bj'
    });

    const myInit = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch('https://api.twitch.tv/helix/streams?first=20', myInit)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          data: result.data
        })
      });
  }

  render() {

    const streams = this.state.data.map((item, key) => {
      return <StreamItem key={key} game_id={item['game_id']} user_id={item['user_id']} img={item['thumbnail_url']} title={item.title} viewers={item['viewer_count']}/>
    });

    return (
      <div className='App'>
        {streams}
      </div>
    );
  }
}

export default App;
