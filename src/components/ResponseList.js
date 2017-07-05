import React from 'react';
import { connect } from 'react-redux'
import Masonry from 'react-masonry-component';

import { fetchAll } from '../actions/responses'

const randomRotation = () =>  {
  const index = Math.floor(Math.random()*6) - 3;
  return {
    transform: "rotate(" + index + "deg)",
  };
}

class Responses extends React.Component {
  render() {
    return (
      <div className="responses">
        <div>
          <button onClick={this.props.loadAll} className="centerButton">View Responses</button>
        </div>
        <Masonry>
        {this.props.responses.inkblots.map( blot => (
           <div className="inkblotcard" style={randomRotation()} key={blot.id}>
             <div className="inkblot">
               <img src={blot.url} alt="inkblot"/>
             </div>
             <p>{blot.description}</p>
           </div>
        ))}
        </Masonry>
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
