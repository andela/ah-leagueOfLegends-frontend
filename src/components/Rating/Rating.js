import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import 'materialize-css/dist/css/materialize.min.css';
import { rateArticle, AverageRate } from './actions/actions';

class Rating extends Component {
  async componentDidMount() {
    // eslint-disable-next-line
    if (this.props.slug !== undefined) await this.props.AverageRate(this.props.slug);
  }

  handleStarClick = (nextValue) => {
    // eslint-disable-next-line
    this.props.rateArticle(this.props.slug, nextValue);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row" style={{ centerContent: 'flex-end', marginLeft: '20%' }}>
          <div className="col s12 m6">
            <div>
              <span>Average Rating: </span>
              {' '}
              <StarRatings
                name="rateArticle"
                starHoverColor="green"
                starRatedColor="green"
                starDimension="15px"
                rating={
                  // eslint-disable-next-line
                  (ratingReducer && this.props.ratingReducer.average_rating) !== undefined
                    ? this.props.ratingReducer.average_rating
                    : 0
                }
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ ratingReducer: state.ratingReducer });

Rating.propTypes = {
  AverageRate: PropTypes.func.isRequired,
  rateArticle: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
};
export default connect(
  mapStateToProps,
  { rateArticle, AverageRate },
)(Rating);
