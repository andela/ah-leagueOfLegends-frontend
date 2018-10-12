import React from 'react';
import M from 'materialize-css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { forgotPasswordAction } from './actions';

class Forgotpassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      submitted: false,
    };

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
      console.log(this.state);
    }

    handleSubmit= (e) => {
      e.preventDefault();
      if (this.state.email === undefined || this.state.email === '') { return false; }
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //  console.log('regex = ', regex.test(this.state.email))
      if (!regex.test(this.state.email)) return false;
      this.props.forgotPasswordAction(this.state.email);
    };

    render() {
      return (
        <div id="modal3" className="row modal">
          <h4>Password Recovery</h4>
          <form>
            <div className="input-field col s12">
              <input required name="email" type="email" className="validate" onChange={this.handleChange} />
              <label htmlFor="email">Email</label>
            </div>
            <div className="fpl">
              <button onClick={this.handleSubmit} className="btn waves-effect waves-light" type="submit" name="action">
                    Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      );
    }
}

Forgotpassword.prototypes = { forgotPasswordAction: PropTypes.func.isRequired };
const mapStateToProps = state => ({ rootReducer: state.rootReducer });

const mapActionsToProps = { forgotPasswordAction };

export default connect(
  mapStateToProps, mapActionsToProps)(Forgotpassword);
