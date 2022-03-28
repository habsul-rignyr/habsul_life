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

  componentDidMount() {
    const oneSecond = 1000;
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
}

export default Clock;
