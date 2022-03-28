import { Component } from "preact";

class Clock extends Component {
  constructor(props: {} | undefined) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div class="tc mw7 center mt4">
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
