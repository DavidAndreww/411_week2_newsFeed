import React from "react";
import Article from "./Article";
import NavBar from "./NavBar";

class App extends React.Component {
  state = {
    articles: [],
    searchTerm: "",
    sortBy: ""
  };

  fetchData = x => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${x}`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.hits }))
      .catch(err => console.log("Error!: ", err));
  };

  handleFormChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentDidMount() {
    this.fetchData();
  }

  searchTitles(event) {
    event.preventDefault();
    let { searchTerm } = this.state;
    console.log('submitted:' , searchTerm)
    this.fetchData(searchTerm);
  }

  render() {
    if (this.state.articles.length === 0) {
      return <p className="loading">Loading Feed...</p>;
    }
    return (
      <div>
        <NavBar
          sortBy={this.state.sortBy}
          searchTitles={this.searchTitles}
          handleFormChange={this.handleFormChange}
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
