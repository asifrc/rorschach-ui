import React from 'react';
import { connect } from 'react-redux'

import { fetchNext } from '../actions/next'
import { saveResponse } from '../actions/responses'


class InkBlot extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      description: "What are your thoughts on this?",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit(event) {
    console.log(this.state, this.props);
    this.props.saveResponse({
      url: this.props.url,
      description: this.state.description
    });
    this.setState(Object.assign({}, this.state, {
      description: ""
    }));
    event.preventDefault();
  }

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
        <button onClick={this.handleSubmit}>Respond</button>
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
    loadNext: () => dispatch(fetchNext()),
    saveResponse: (response) => dispatch(saveResponse(response))
  };
};

const InkBlotCard = connect(mapStateToProps, mapDispatchToProps)(InkBlot);

export default InkBlotCard;
