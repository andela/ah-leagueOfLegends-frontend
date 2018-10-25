import React, { Component } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import {
  FacebookShareButton,
  EmailShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  GooglePlusShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  WhatsappIcon,
  GooglePlusIcon,
} from 'react-share';

class SocialShare extends Component {
  componentDidMount() {
    const el = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(el);
  }

  render() {
    const { title } = this.props;
    const { slug } = this.props;
    return (
      <div className="share">
        <i className="dropdown-trigger material-icons small " data-target="dropdown-share">
          share
        </i>
        <ul id="dropdown-share" className="dropdown-content social-share">
          <li>
            <WhatsappShareButton
              url={`https://authorshavenlegends.herokuapp.com/article/${slug}`}
              title={title}
              windowWidth={650}
              windowHeight={550}
            >
              <WhatsappIcon size={30} round />
            </WhatsappShareButton>
          </li>
          <li>
            <GooglePlusShareButton
              url={`https://authorshavenlegends.herokuapp.com/article/${slug}`}
              title={title}
              windowWidth={700}
              windowHeight={550}
            >
              <GooglePlusIcon size={30} round />
            </GooglePlusShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={`https://authorshavenlegends.herokuapp.com/article/${slug}`}
              title={title}
              windowWidth={700}
              windowHeight={550}
            >
              <TwitterIcon size={30} round />
            </TwitterShareButton>
          </li>
          <li>
            <FacebookShareButton
              url={`https://authorshavenlegends.herokuapp.com/article/${slug}`}
              title={title}
              windowWidth={700}
              windowHeight={550}
            >
              <FacebookIcon size={30} round />
            </FacebookShareButton>
          </li>
          <li>
            <EmailShareButton
              windowWidth={700}
              windowHeight={550}
              url={`https://authorshavenlegends.herokuapp.com/article/${slug}`}
              title={title}
            >
              <EmailIcon size={30} round />
            </EmailShareButton>
          </li>
        </ul>
      </div>
    );
  }
}

SocialShare.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialShare;
