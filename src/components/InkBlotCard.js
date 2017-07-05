import React from 'react';
import { connect } from 'react-redux'

import { fetchNext } from '../actions/next'
import { saveResponse } from '../actions/responses'
import './InkBlotCard.css'


class InkBlot extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {
      description: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleSubmit(event) {
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
      <div className="inkblotcard survey">
        <div>
          <button onClick={this.props.loadNext}>Next</button>
        </div>
        <div className="inkblot">
          <img src={this.props.url} alt="inkblot"/>
        </div>
        <div>
          <textarea value={this.state.description} onChange={this.handleChange} placeholder="Thoughts?"></textarea>
        </div>
        <div>
          <button onClick={this.handleSubmit}>Respond</button>
        </div>
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
