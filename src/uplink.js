import React, { Component } from "react";
import make from "./state";

const makeLink = state => {
  class Link extends Component {
    static displayName = "Link";
    render = () => {
      const { href } = this.props;

      return <a href={href} />;
    };
  }

  return Link;
};

const makeRoute = (state, Wrapped) => {
  class Route extends Component {
    static displayName = "Route";
  }

  return Route;
};

// hoc which generates two components: Link and Route
const uplink = Wrapped => {
  // create a state for each linked pair of components
  const state = make();

  return {
    Link: makeLink(state, Wrapped),
    Route: makeRoute(state, Wrapped)
  };
};

export default uplink;
