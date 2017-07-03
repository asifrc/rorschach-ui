import React from 'react';

export default class InkBlot extends React.Component {
  inkblotUrl() {
    return this.props.url;
  };

  render() {
    return (
      <div className="inkblot">
        <img src={this.inkblotUrl()} alt="inkblot"/>
      </div>
    );
  }
}
