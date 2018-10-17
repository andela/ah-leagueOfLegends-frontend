import React from 'react';
import PropTypes from 'prop-types';

const commentsComponent = (props) => {
  const { comments } = props;
  return (
    <div>
      <div>{ comments.id }</div>
      <div>{ comments.body }</div>
    </div>
  );
};

commentsComponent.defaultProps = { comments: null };

commentsComponent.propTypes = { comments: PropTypes.instanceOf(Object) };


export default commentsComponent;
