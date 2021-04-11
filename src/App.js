import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

const store = ConfigureStore();

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <div className="App">
            <Main />
          </div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
