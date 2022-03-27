import { Component } from "preact";

export class Video extends Component {
  render() {
    return (
      <div>
        <video
          src={this.props.src}
          width="500"
          controls
          autostart
          autoPlay
          muted
        />
      </div>
    );
  }
}

export default Video;
