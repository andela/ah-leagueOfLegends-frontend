import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { forgotPasswordAction } from './actions';

class Forgotpassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const el = document.querySelectorAll('.modal');
    M.Modal.init(el);
  }

    handleChange= (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    }

    // eslint-disable-next-line
    handleSubmit = (e) => {
      e.preventDefault();
      const { email } = this.state;
      // eslint-disable-next-line
      const { dispatch } = this.props;
      if (email === undefined || email === '') { return false; }
      dispatch(forgotPasswordAction(email));
    }

    render() {
      const { payload, forgotPasswordReducer } = this.props;
      return (
        <div id="modal3" className="modal custom-modal">
          <div className="modal-content">
            <h2>Password Recovery</h2>
            <form>
              <div className="input-field col s12">
                <input required name="email" type="email" className="validate" onChange={this.handleChange} />
                {/* eslint-disable-next-line */}
                <label htmlFor="email">Email</label>
                {payload}
                {
                  forgotPasswordReducer.success ? (<div color="$color-green">E-mail sent successfully</div>) : null
                }
                {
                  forgotPasswordReducer.failure ? (<div color="$color-red">E-mail sent unsuccessfully</div>) : null
                }
              </div>
              <br />
              <div className="fpl">
                <button onClick={this.handleSubmit} className="btn waves-effect waves-light" type="submit" name="action">
                      Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
              <div>
                {payload}
                {
                  forgotPasswordReducer.success
                    ? (setTimeout(() => { window.location.reload(); }, 20)) : null
                }
              </div>
            </form>
          </div>
        </div>
      );
    }
}

Forgotpassword.prototypes = { forgotPasswordAction: PropTypes.func.isRequired };
Forgotpassword.defaultProps = { payload: [], forgotPasswordReducer: {} };
Forgotpassword.propTypes = {
  payload: PropTypes.instanceOf(Object),
  forgotPasswordReducer: PropTypes.shape({
    success: PropTypes.bool.isRequired,
    failure: PropTypes.bool.isRequired,
  }),
};
const mapStateToProps = state => ({ forgotPasswordReducer: state.forgotPasswordReducer });


export default connect(
  mapStateToProps)(Forgotpassword);
