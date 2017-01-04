import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {

  render(){
    return(
      <div className="oneItem">
        <h2>{`${this.props.title} (${this.props.year})`}</h2>
        <h3>Rating: {this.props.rating}</h3>
          <img
          src={this.props.poster}
          alt={this.props.title}
          />
        <div>
          <a href={`http://imdb.com/title/${this.props.id}`}>More Info</a>
        </div>
        <button onClick={() => this.props.handleDeletion(this.props.id)}>
          Delete Movie
        </button>
      </div>
    )
  }
}

export default MovieItem;
