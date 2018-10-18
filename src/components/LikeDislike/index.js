import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

const Icons = ({
                 id, icon, count, onClick,
               }) => (
  <div>
    <button className="icon_btn"  >
      <i className="material-icons" >like</i>
      <span> </span>
    </button>
  </div>
);

Icons.propTypes = {
  id: PropTypes.any.isRequired,
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Icons;
