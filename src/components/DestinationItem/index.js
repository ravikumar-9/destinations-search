// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinations} = props

  const {name, imgUrl} = destinations

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
