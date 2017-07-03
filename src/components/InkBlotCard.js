import React from 'react';
import { connect } from 'react-redux'

import { fetchNext } from '../actions/next'


class InkBlot extends React.Component {
  render() {
    return (
      <div className="inkblotcard">
        <div className="inkblot">
          <img src={this.props.url} alt="inkblot"/>
        </div>
        <textarea></textarea>
        <button onClick={this.props.loadNext}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.blot.url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadNext: () => dispatch(fetchNext())
  };
};

const InkBlotCard = connect(mapStateToProps, mapDispatchToProps)(InkBlot);

export default InkBlotCard;
