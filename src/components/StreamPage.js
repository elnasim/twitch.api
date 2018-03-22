import React, {Component} from 'react';

class StreamPage extends Component {

  state = {
    user_id: this.props.match.params.number,
    user_name: '',
    title: ''
  };


  componentDidMount() {

    const myHeaders = new Headers({
      'Client-ID': 'z97pdq1cei4wqu42l3kkkdnseq06bj'
    });

    const myInit = {
      method: 'GET',
      headers: myHeaders,
    };

    fetch('https://api.twitch.tv/helix/users?id=' + this.state['user_id'], myInit)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          user_name: result.data[0]['login']
        })
      });

    fetch('https://api.twitch.tv/helix/streams?user_id=' + this.state.user_id, myInit)
      .then(res => res.json())
      .then((result) => {
        console.log('--->', result.data[0].title);
        this.setState({
          title: result.data[0].title
        })
      });
  }

  render() {

    const src = '//player.twitch.tv/?channel=' + this.state.user_name;

    return (
      <div>
        <div>{this.state.title}</div>
        <iframe
          src={src}
          height="600"
          width="100%"
          frameBorder="<frameborder>"
          scrolling="<scrolling>"
          allowFullScreen="<allowfullscreen>">
        </iframe>
      </div>
    );
  }
}

export default StreamPage;