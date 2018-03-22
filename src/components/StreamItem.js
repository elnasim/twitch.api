import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StreamItem extends Component {

  render() {

    const img = this.props.img.slice(0, -20) + '200x100.jpg';

    return (
      <div className="column">
        <div className="stream-item">
          <Link to={this.props['user_id']}><img src={img} className="stream-item__img" alt='img'/></Link>
          <div className="stream-item__title">{this.props.title}</div>
          <div className="stream-item__views">{this.props.viewers}</div>
        </div>
      </div>
    );
  }
}

export default StreamItem;