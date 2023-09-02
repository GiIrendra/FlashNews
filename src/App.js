import Navbar from "./components/Navbar";
import "./App.css";
import React, { Component } from 'react'
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// export default function App() {



export default class App extends Component {

  state = {
    progress: 3,
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  pageSize = 5
  apiKey = process.env.MY_API_KEY
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={this.pageSize} country="in" category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}
                  key="home"
                  pagesize={this.pagesize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}
                  key="about"
                  pagesize={this.pagesize}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}
                  key="business"
                  pagesize={this.pagesize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}
                  key="entertainment"
                  pagesize={this.pagesize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}
                  key="general"
                  pagesize={this.pagesize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}
                  key="science"
                  pagesize={this.pagesize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}
                  key="sports"
                  pagesize={this.pagesize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey}
                  key="technology"
                  pagesize={this.pagesize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}


