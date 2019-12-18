import React from 'react'

class Discovery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      genre: "",
      startDate: "",
      endDate: "",
    }
  }

  onDiscoverySubmit = (e) => {
    e.preventDefault();
  }

  genreChange = (e) => {
    this.setState({
      genre: e.target.value
    })
  }

  startDateChange = (e) => {
    this.setState({
      startDate: e.target.value
    })
  }

  endDateChange = (e) => {
    this.setState({
      endDate: e.target.value
    })
  }

  render() {
    return (
      <div className="discovery">
        <div className="similar-title">DISCOVERY</div>
        <form
          className="discovery-form"
          onSubmit={this.onDiscoverySubmit}
        >
          <div>Genre</div>
          <select className="genre" onChange={this.genreChange}>
            <option value="35">comedy</option>
            <option value="16">animation</option>
            <option value="99">documentary</option>
            <option value="18">drama</option>
            <option value="10751">family</option>
            <option value="9648">mystery</option>
            <option value="10763">news</option>
            <option value="10765">sci-fi and fantasy</option>
            <option value="28">action</option>
            <option value="10767">talk</option>
          </select>
          <div>Start-date</div>
          <input
            type="text"
            name="startDate"
            value={this.state.startDate}
            placeholder="YYYY-MM-DD"
            onChange={this.startDateChange}
            className="search-year-input"
          >
          </input>
          <div>End-date</div>
          <input
            type="text"
            name="endDate"
            value={this.state.endDate}
            placeholder="YYYY-MM-DD"
            onChange={this.endDateChange}
            className="search-year-input"
          >
          </input>
          <input
            type="submit"
            value="Search"
            className="search-button"
          />
        </form>
      </div>
    )
  }
}

export default Discovery