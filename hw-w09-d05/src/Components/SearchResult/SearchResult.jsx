import React, { Component } from 'react';
import './SearchResult.css';

class SearchResult extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.newTitle} {this.props.newYear}</h2>
        <h3>{this.props.newRating}</h3>
        <img src ={this.props.newPoster} alt={this.props.newTitle}/>
      </div>
      )
    }
  }

export default SearchResult;
