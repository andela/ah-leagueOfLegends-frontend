import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { resetPasswordAction } from './actions';

class Resetpassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      newPassword: '',
      confirmPassword: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const el = document.querySelectorAll('.modal');
    M.Modal.init(el);
  }

  handleChange= (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit= (event) => {
    event.preventDefault();
    const { resetPass } = this.props;
    const { email, newPassword, confirmPassword } = this.state;
    const data = {
      email,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };
    resetPass(data);
  }

  render() {
    const { payload, resetPasswordReducer } = this.props;
    return (
      <div className="myform">
        <div className="modal-content">
          <form onSubmit={this.handleSubmit}>
            <h2>Password Reset</h2>
            {payload}
            {
                  resetPasswordReducer.success ? (<div color="$color-green">Password reset successfully</div>) : null
                }
            {
                  resetPasswordReducer.failure ? (<div color="$error-red">Password reset unsuccessfully</div>) : null
                }
            <div className="input-field col s12">
              <input name="email" id="email1" type="email" className="validate" onChange={this.handleChange} required="True" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input name="newPassword" id="password2" type="password" className="validate" onChange={this.handleChange} required="True" />
                <label htmlFor="password">New Password</label>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input name="confirmPassword" id="password" type="password" className="validate" onChange={this.handleChange} required="True" />
                  <label htmlFor="password">Confirm Password</label>
                </div>
              </div>
            </div>
            <div className="rsp">
              <button className="btn waves-effect waves-light" type="submit" name="action">
        Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
            {payload}
            {
              resetPasswordReducer.success ? (<div color="$color-green"><a href="http://localhost:3000/">Back to Home</a></div>) : null
                }
          </form>
        </div>
      </div>


    );
  }
}

Resetpassword.prototypes = { resetPasswordAction: PropTypes.func.isRequired };
const mapStateToProps = state => ({ resetPasswordReducer: state.resetPasswordReducer });
const mapDispatchToProps = dispatch => bindActionCreators({ resetPass: resetPasswordAction },
  dispatch);

export default connect(
  mapStateToProps, mapDispatchToProps)(Resetpassword);
