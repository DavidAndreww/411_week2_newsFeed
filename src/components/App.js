import React from "react";
import Article from "./Article";
import NavBar from "./NavBar";

class App extends React.Component {
  state = {
    articles: [],
    searchTerm: ""
  };

  fetchData = x => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${x}`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.hits }))
      .catch(err => console.log("Error!: ", err));
  };

  handleSearchbarChange = e => {
    console.log('hey')
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
        <NavBar
          handleSearchbarChange={this.handleSearchbarChange}
          searchTerm={this.state.searchTerm}
        />
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
