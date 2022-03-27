import { Component } from "preact";

import { Video } from "./Video";
import { VidMenu } from "./VidMenu";

import bumpVid from "../assets/UrbitMedia_bump1.mp4";
import stationID from "../assets/UMStationID.mp4";
import gettingStarted from "../assets/UMGettingStarted.mp4";

// this is the parent of 'video' and 'VidMenu' children
// purpose of this is just to practice the parent-child-siblings pattern
// although functions now have hooks, I am using a class here to practice
// so that I can recognize & understand older code in the wild

const VIDEOS = {
  vid1: bumpVid,
  vid2: stationID,
  vid3: gettingStarted,
};

class VidPlayer extends Component {
  constructor(props: {} | undefined) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);
    this.state = { src: VIDEOS.vid1 };
  }

  chooseVideo(newVideo) {
    this.setState({ src: VIDEOS[newVideo] });
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <VidMenu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default VidPlayer;
