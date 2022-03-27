import { Component } from "preact";

export class VidMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    var text = e.target.value;
    this.props.chooseVideo(text);
  }
  render() {
    return (
      <div class="mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
        <form onClick={this.handleClick}>
          <input type="radio" name="src" value="vid1" /> Bump
          <input type="radio" name="src" value="vid2" /> Station ID
          <input type="radio" name="src" value="vid3" /> Getting Started
        </form>
      </div>
    );
  }
}

export default VidMenu;
