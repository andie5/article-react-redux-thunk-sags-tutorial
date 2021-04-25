import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import { connect } from "react-redux";

const App = (props) => (
  <>
    {props.error && <div>{props.error}</div>}
    {!props.error && (
      <>
        <div>
          <h2>Articles</h2>
          <List />
        </div>
        <div>
          <h2>Add a new article</h2>
          <Form />
        </div>
        <div>
          <h2>API posts</h2>
          <Post />
        </div>
      </>
    )}
  </>
);

export default connect((state) => ({
  error: state.error,
}))(App);
