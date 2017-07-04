import React from 'react';
import { connect } from 'react-redux'

import { fetchNext } from '../actions/next'


class InkBlot extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      url: props.url,
      description: "What are your thoughts on this?",
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState(Object.assign({}, this.state, {
      description: event.target.value
    }));
  };

  render() {
    return (
      <div className="inkblotcard">
        <div className="inkblot">
          <img src={this.props.url} alt="inkblot"/>
        </div>
        <textarea value={this.state.description} onChange={this.handleChange}></textarea>
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
