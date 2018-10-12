import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../../styles/styles.css';
import newArticle from './actions'; 

class userInfo extends Component {
  
  render() {
    const { publishHandler } = this.props;
    return (

      <div style={{ width: '70%', marginLeft: '20%', marginTop: '2%' }}>
        <div className="">
          <div className="author-info">
            <img
              className="avatar-small"
              src="https://api.adorable.io/avatars/285/abott@adorable.png"
              alt="User Profile Pic"
              style={{ marginTop: 10 }}
            />
            <div className="articale-time">
              <p>Gilbert Ngeywo</p>
              <div className="article-time--details" style={{ padding: 1 }}>
                I Love Programming so much. Wanna be a world class Programmer
                <br />
                Draft
              </div>
            </div>
          </div>
        </div>
        <button onClick={publishHandler}>Hellhfhfo</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newArticle: state.newArticle.payload,
  publishing: state.newArticle.publishing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  publishNewArticle: newArticle,
}, dispatch);

export default connect( mapStateToProps, mapDispatchToProps ) (userInfo);
