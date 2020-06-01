
const NewsTitle = props => (
  <p className = "newsTitle">{props.title}</p> 
)

export default React.memo(NewsTitle);