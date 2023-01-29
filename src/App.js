import './App.css'
import BannerCardItem from './components/BannerCardItem/index'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'cardContainer card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'cardContainer card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'cardContainer card-3',
  },
]

const App = () => (
  <ul className="cardsContainer">
    <div className="cardContainer">
      {bannerCardsList.map(eachBanner => (
        <BannerCardItem bannerDetails={eachBanner} key={eachBanner.id} />
      ))}
    </div>
  </ul>
)

export default App
