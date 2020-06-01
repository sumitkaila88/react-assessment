import './newsInfo.scss';

const newsInfo = props => (
  <p>
    <span className ="newsDomain">({props.domain}) by </span>
    <span className="newsAuthor">{props.author}</span> 
    <span className="createdOn"> {props.createdOn} </span>
  </p>
)

export default React.memo(newsInfo);