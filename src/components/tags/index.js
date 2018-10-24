import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchItem } from '../../containers/Search/actions';

class Tags extends Component {
  componentDidMount() {}

  handleSearch = (e) => {
    // eslint-disable-next-line
    const { dispatch } = this.props;
    const searchText = e.target.getAttribute('data-value');
    const filter = 'tagList';
    dispatch(searchItem(searchText, filter));
  }

  render() {
    return (
      <div>
        <div className="">
          <ul className=" tabs tabs-fixed-width tab-demo z-depth-0">
            <li className="tab1"><a data-value="collections" onClick={this.handleSearch} href="#collections">COLLECTIONS</a></li>
            <li className="tab1"><a data-value="power" onClick={this.handleSearch} href="#powertrip">POWER TRIP</a></li>
            <li className="tab1"><a data-value="culture" onClick={this.handleSearch} href="#culture">CULTURE</a></li>
            <li className="tab1"><a data-value="tech" onClick={this.handleSearch} href="#tech">TECH</a></li>
            <li className="tab1"><a data-value="entertainment" onClick={this.handleSearch} href="#entertainment">ENTERTAINMENT</a></li>
            <li className="tab1"><a data-value="andela" onClick={this.handleSearch} href="#andela">ANDELA WAY</a></li>
            <li className="tab1"><a data-value="politics" onClick={this.handleSearch} href="#politics">POLITICS</a></li>
            <li className="tab1"><a data-value="design" onClick={this.handleSearch} href="#design">DESIGN</a></li>
            <li className="tab1"><a data-value="health" onClick={this.handleSearch} href="#health">HEALTH</a></li>
            <li className="tab1"><a data-value="popular" onClick={this.handleSearch} href="#popular">POPULAR</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ search: searchItem },
  dispatch);

export default connect(mapDispatchToProps)(Tags);
