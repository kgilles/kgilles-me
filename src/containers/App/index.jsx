import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { SectionExpertise, SectionSkills } from '../Section';
import Footer from '../Footer';
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
        <SectionExpertise />
        <SectionSkills />
        <Footer />
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
