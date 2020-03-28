import React, { Component } from "react"; // import from react

import { Window, App } from "proton-native"; // import the proton-native components
import { TabPanel } from "./TabPanel";

export default class Application extends Component {
  render() {
    return (
      <App>
        {/* you must always include App around everything */}
        <Window style={{ width: 300, height: 300, backgroundColor: "#fff" }}>
          <TabPanel />
        </Window>
      </App>
    );
  }
}
