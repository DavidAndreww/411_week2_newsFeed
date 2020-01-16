import React from "react";
import Article from "./Article";

class App extends React.Component {
  state = {
    articles: [],
    date: "",
    author: ""
  };

  fetchData = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=...`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.hits }))
      .catch(err => console.log("Error!: ", err));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.articles.length === 0) {
      return <p className="loading">Loading Feed...</p>;
    }
    return (
      <div>
        <ul>
          {this.state.articles.map((post, index) => (
            <Article key={post.objectID} postData={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
