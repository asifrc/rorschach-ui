import React from 'react';
import { connect } from 'react-redux'

import { fetchAll } from '../actions/responses'
import InkBlotCard from './InkBlotCard'


class Responses extends React.Component {
  render() {
    return (
      <div className="responses">
        {this.props.responses.inkblots.map( blot => (
           <div className="inkblotcard">
             <div className="inkblot">
               <img src={blot.url} alt="inkblot"/>
             </div>
             <p>{blot.description}</p>
           </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    responses: state.responses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAll: () => dispatch(fetchAll())
  };
};

const ResponseList = connect(mapStateToProps, mapDispatchToProps)(Responses);

export default ResponseList;
