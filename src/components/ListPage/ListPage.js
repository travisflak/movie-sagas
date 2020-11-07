import React, { Component } from 'react';
import { connect } from 'react-redux';


class ListPage extends Component {

    render() {
      return (
        <>
          {/* {this.props.reduxStore.genres.map((genre) => {
              return <img src={.images.original.url} />
          })} */}
        </>
      );
    }
  }
  
  const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(ListPage);