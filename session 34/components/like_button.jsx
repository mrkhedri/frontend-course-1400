'use strict';

const e = React.createElement;
const span = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: true };
  }

  render() {
    if (this.state.liked) {
      // return span('span', {}, 'شما این مطلب را پسندیدید');
      return <span>asasdasdsa</span>
    }

    return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like');
  }
}

const domContainer = document.querySelector('#like-button-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
