// Write your code here.
import './index.css'

const ThumbNailItem = props => {
  const {details, isActive, onclicker} = props
  const division = isActive ? 'division' : ''

  const onClickFun = () => {
    onclicker(details.id)
  }
  return (
    <button type="button" className={`item ${division}`} onClick={onClickFun}>
      <img src={details.thumbnailUrl} alt={details.thumbnailAltText} />
    </button>
  )
}

export default ThumbNailItem
