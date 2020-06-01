import React, { Component } from 'react';

import NewsItem from '../newsItem/newsItem';
import * as utilities from '../../utils/utilities';

class NewsList extends Component {

  state = {
    newsList: this.props.newsList,
  }

  hideNews = (id) => {
    let finalList = this.state.newsList.filter(newsItem => newsItem.objectID !== id);
    let hiddenItems = JSON.parse(localStorage.getItem('hiddenItems')) || [];
    hiddenItems.push(id);
    this.setState({
      ...this.state.newsList,
      newsList: finalList,
    })
    localStorage.setItem('hiddenItems', JSON.stringify(hiddenItems));
  }

  componentDidMount() {
    let hiddenItems = JSON.parse(localStorage.getItem('hiddenItems')) || [];
      let filteredList = this.state.newsList.filter(newsItem => !hiddenItems.includes(""+newsItem.objectID));
      if(filteredList !== this.state.NewsList) {
        this.setState({
          ...this.state,
          newsList: filteredList,
        })
      }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.newsList !== this.props.newsList) {
      let hiddenItems = JSON.parse(localStorage.getItem('hiddenItems')) || [];
      let filteredList = this.props.newsList.filter(newsItem => !hiddenItems.includes(""+newsItem.objectID));
      if(filteredList !== this.props.NewsList) {
        this.setState({
          ...this.state,
          newsList: filteredList,
        })
      }
    }
  }

  
  render() { 
    return ( 
      this.state.newsList.map(newsItem => {
        return (
          <NewsItem 
            key = {newsItem.objectID}
            newsTitle = {newsItem.title}
            commentCount = {newsItem.num_comments || 0}
            voteCount = {newsItem.points || 0}
            newsSource = {utilities.getDomain(newsItem.url)}
            newsAuthor = {newsItem.author || '-'}
            createdOn = {utilities.getDateinText(new Date(newsItem.created_at))}
            objectID = {newsItem.objectID}
            hideNews = {() => this.hideNews(newsItem.objectID)}
          />
        )
      })
     );
  }
}
 
export default NewsList;
