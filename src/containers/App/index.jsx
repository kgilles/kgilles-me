import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { updateText } from '../../actions';
import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.actions.updateText('FOO');
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={() => this.handleOnClick()}>{this.props.text}</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateText: text => dispatch(updateText(text))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
