import React, { Component } from "react";
// import Img from "gatsby-image";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default class PhotosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePopup: false,
      selectedItem: 0
    };
  }

  render() {
    // const { data } = this.props;
    // const { activePopup, selectedItem } = this.state;

    return (
      <Layout>
        <SEO
          title="Popular Videos"
          keywords={[`MasterYourWeb`, `Web Development`, `Blog`, `Youtube`]}
        />
        <div className="site-container blogs-page" id="PopularVideos">
          <div className="container">
            <div className="section-head">
              <h1 className="line-heading h2">Popular Videos</h1>
            </div>
                Work in progress
          </div>
        </div>
      </Layout>
    );
  }
}
