import React, { Component } from "react";
import "./setup";
import CMS, { init } from "netlify-cms";
import "./data/cms.css";
import config from "./data/config.json";
import Preview from "./components/Preview";
import styled from "styled-components";

CMS.init = init;

class NetlifyCMS extends Component {
  componentDidMount() {
    CMS.init({ config });
    CMS.registerPreviewTemplate("events", Preview);
  }
  render() {
    return <Cms id="nc-root" />;
  }
}

export default NetlifyCMS;

const Cms = styled.div`
  .nc-previewPane-frame {
    height: 100%;
    width: 100%;
  }
`;
