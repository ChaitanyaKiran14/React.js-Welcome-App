import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isClicked: false}

  onClicked = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  buttText = () => {
    const {isClicked} = this.state

    return isClicked ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const {isClicked} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1>Welcome</h1>
          <p>Thankyou! Happy Learning</p>
          <button type="button" onClick={this.onClicked}>
            {this.buttText()}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
