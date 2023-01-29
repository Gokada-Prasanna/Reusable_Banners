// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails
  console.log(id)
  console.log(className)
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
