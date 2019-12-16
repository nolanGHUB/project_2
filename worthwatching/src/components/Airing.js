import React, {Component} from 'react'

//custom components
import ShowList from './ShowList'

//api calls
import { SearchTvAiringToday } from '../services/api-helper'

class Airing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tonightTv: [],
      baseImgPath: "https://image.tmdb.org/t/p/w",
      imgSize: "200",
      hasLoaded: false,
    }
  }

  componentDidMount = async () => {
   await this.getAiringTonight();
  }

  getAiringTonight = async () => {
    const tonightTv = await SearchTvAiringToday()
    this.setState({
      tonightTv,
      hasLoaded: true
    })
  }

  render() {
    return (
      <div className="tonight">
        <ShowList 
          shows={this.state.tonightTv}
          imgPath={this.state.baseImgPath}
          imgSize={this.state.imgSize}  
        />
      </div>
    )
  }
}

export default Airing