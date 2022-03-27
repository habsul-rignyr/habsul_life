import { Component } from "preact";

import { Video } from "./Video";

import bumpVid from "../assets/UrbitMedia_bump1.mp4";

// this is the parent of 'video' and 'VidMenu' children
// purpose of this is just to practice the parent-child-siblings pattern
// although functions now have hooks, I am using a class here to practice
// so that I can recognize & understand older code in the wild

const VIDEOS = {
  bump1: bumpVid,
};

class VidPlayer extends Component<any, any> {
  constructor(props: {} | undefined) {
    super(props);

    this.state = { src: VIDEOS.bump1 };
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>

        <Video src={this.state.src} />
      </div>
    );
  }
}

export default VidPlayer;
