import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { rateArticle, InitialRate } from './actions/actions';

class ArticleRating extends Component {
  constructor() {
    super();
    this.handleStarClick = this.handleStarClick.bind(this);
  }

  componentDidMount = () => {
    const { slug } = this.props;
    // eslint-disable-next-line
    if (slug !== undefined) this.props.InitialRate(slug);
  };

  handleStarClick = (nextValue) => {
    // eslint-disable-next-line
    this.props.rateArticle(this.props.slug, nextValue);
  };

  showError = (err) => {
    M.toast({ html: err, classes: 'red' });
  };

  render() {
    const { ratingReducer } = this.props;
    return (
      <React.Fragment>
        <div className="errorMessage">
          {ratingReducer.ratingError && this.showError(ratingReducer.ratingError)}
        </div>

        <div className="row" style={{ centerContent: 'flex-end', marginLeft: '20%' }}>
          <div className="col s12 m6">
            <span>My Rating: </span>
            {' '}
            <StarRatings
              name="rateArticle"
              starHoverColor="green"
              starRatedColor="green"
              starDimension="15px"
              rating={
                // eslint-disable-next-line
                this.props.ratingReducer.rating !== undefined ? this.props.ratingReducer.rating : 0
              }
              changeRating={this.handleStarClick}
            />
            <div>
              <span>
                <span>
                  {' '}
                  Average Rating:
                  {' '}
                  {// eslint-disable-next-line
                  this.props.ratingReducer.average_rating !== undefined
                    ? this.props.ratingReducer.average_rating.toFixed(1)
                    : this.props.average_rating}
                </span>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ ratingReducer: state.ratingReducer });

ArticleRating.propTypes = {
  InitialRate: PropTypes.func.isRequired,
  rateArticle: PropTypes.func.isRequired,
  average_rating: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  ratingReducer: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  { rateArticle, InitialRate },
)(ArticleRating);
