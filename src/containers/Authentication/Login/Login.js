import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import PropTypes from 'prop-types';
import login from './actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const el = document.querySelectorAll('.modal');
    M.Modal.init(el);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      submitted: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ submitted: true });
    if (email && password) {
      const { dispatch } = this.props;

      dispatch(login(email, password));
    }
  }

  render() {
    const { submitted, email, password } = this.state;
    const { errors } = this.props;
    return (
      <div id="modal1" className="modal custom-modal row">
        <div className="col s12 modal-content">
          <div className="welcome-modal-msg">
            <h4>Welcome back.</h4>
            <p>
            Sign in to access your personalized homepage, follow authors and
            topics you love, and like stories that matter to you.
            </p>
          </div>
          {
          errors !== undefined
            ? (
              <p className="error">
                {errors}
              </p>
            )
            : null
                }
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  {/* eslint-disable-next-line */}
                  <label htmlFor="email"> Email </label>
                  <input id="loginemail" type="email" className="validate" name="email" onChange={this.handleChange} />
                </div>
                {submitted && !email
                  && <div className="error">email is required</div>
                }
              </div>
              <div className="row">
                <div className="input-field col s12">
                  {/* eslint-disable-next-line */}
                  <label htmlFor="password"> Password </label>
                  <input id="loginpassword" type="password" className="validate" name="password" onChange={this.handleChange} />
                </div>
                {submitted && !password
                  && <div className="error">Password is required</div>
                }
              </div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                {' '}
Login
                {' '}
              </button>
            </form>
          </div>
          <div>
            <p>
Forgot password?
              {' '}
              <a href="/">Send me a reset password link</a>
            </p>
            <p>
          Dont have an account ?
              {' '}
              <a
                className="modal-trigger modal-close"
                href="#modal2"
              >
                {' '}
Sign up
                {' '}

              </a>
              {' '}

            </p>
          </div>
        </div>
      </div>
    );
  }
}


Login.propTypes = { errors: PropTypes.string, dispatch: PropTypes.func.isRequired };

Login.defaultProps = { errors: undefined };


const mapStateToProps = state => ({ errors: state.Login.error });

export default connect(mapStateToProps)(Login);
