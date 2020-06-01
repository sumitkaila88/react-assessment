import CommentCount from '../common/commentCount/commentCount';
import VoteCount from '../common/voteCount/voteCount';
import NewsTitle from '../common/newsTitle/newsTitle';
import NewsInfo from '../common/newsInfo/newsInfo';


import './newsItem.scss';

const NewsItem =  props => {

  return (
      <article className = "newsItem">
        <CommentCount count = {props.commentCount} />
        <VoteCount voteCount = {props.voteCount} objectID = {props.objectID}/> 
        <NewsTitle title = {props.newsTitle} />
        <NewsInfo 
          domain = {props.newsSource} 
          author = {props.newsAuthor}
          createdOn = {props.createdOn}
        />
        <button className ="hideNews" onClick = {props.hideNews}>[ <span>hide</span> ]</button>
      </article>
  )
}

export default NewsItem;