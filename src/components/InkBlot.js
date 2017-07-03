import React from 'react';

export default class InkBlot extends React.Component {
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
