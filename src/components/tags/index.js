import React, { Component } from 'react';


class Tags extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="">
          <ul className="tabs tabs-fixed-width tab-demo z-depth-0">
            <li className="tab1"><a href="#test1">COLLECTIONS</a></li>
            <li className="tab1"><a href="#test2">POWER TRIP</a></li>
            <li className="tab1"><a href="#test3">CULTURE</a></li>
            <li className="tab1"><a href="#test4">TECH</a></li>
            <li className="tab1"><a href="#test0">STARTUPS</a></li>
            <li className="tab1"><a href="#test0">SELF</a></li>
            <li className="tab1"><a href="#test0">POLITICS</a></li>
            <li className="tab1"><a href="#test0">DESIGN</a></li>
            <li className="tab1"><a href="#test0">HEALTH</a></li>
            <li className="tab1"><a href="#test0">POPULAR</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tags;
