
import './commentCount.scss';

const CommentCount = props => (
  <span className = "commentCount" title  = {`total ${props.count} comments`}>
    {props.count}
  </span>
)

export default React.memo(CommentCount);