// Write your code here

import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <h1 className="destination-heading">Destination Search</h1>
        <div className="search-bar-container">
          <input
            type="search"
            value={searchInput}
            className="search-input"
            onChange={this.onChangeInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="search-icon"
            alt="search icon"
          />
        </div>
        <ul className="cards-container">
          {searchResults.map(eachdestination => (
            <DestinationItem
              destinations={eachdestination}
              key={eachdestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
