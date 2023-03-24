import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, isActive, setActiveImgId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnailImg = () => {
    setActiveImgId(id)
  }

  return (
    <li className="app-container">
      <button type="button" className="btn" onClick={onClickThumbnailImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
