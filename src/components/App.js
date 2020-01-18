import React from "react";
import Article from "./Article";
import NavBar from "./NavBar";
import { comparePopular, compareDate, compareAuthor } from "../HelperFunctions";

class App extends React.Component {
  state = {
    articles: [],
    searchTerm: "",
    sortBy: "date"
  };
  //fetch from default API when component mounts
  componentDidMount() {
    fetch(`http://hn.algolia.com/api/v1/search?query=...`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.hits }))
      .catch(err => console.log("Error!: ", err));
  }
  // fetchData takes parameter to use as query in API search
  fetchData = x => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${x}&tags=story`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.hits }))
      .catch(err => console.log("Error!: ", err));
  };
  // updates state.searchTerm, which holds value from input field, and is passed to fetchData in the searchTitles function (Line 31)
  handleFormChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  // on form submit (NavBar.js, line 6) feeds searchTerm into fetch API to return data
  searchTitles = e => {
    e.preventDefault();
    let { searchTerm } = this.state;
    this.fetchData(searchTerm);
  };

  render() {
    if (this.state.articles.length === 0) {
      return <p className="loading">Loading Feed...</p>;
    }

    // uses helper functions to sort state.articles array according to state.sortBy, which is toggled by the select input field (NavBar.js, line 9)
    let { sortBy, articles, searchTerm } = this.state;
    if (sortBy === "date") {
      console.log("Sort date", searchTerm);
      articles.sort(compareDate);
    } else if (sortBy === "author") {
      console.log("Sort author", searchTerm);
      articles.sort(compareAuthor);
    } else if (sortBy === "popular") {
      console.log("Sort popular", searchTerm);
      articles.sort(comparePopular);
    }
    return (
      <div>
        <NavBar
          searchTitles={this.searchTitles}
          handleFormChange={this.handleFormChange}
          searchTerm={this.state.searchTerm}
        />
        <ul>
          {articles.map((post, index) => (
            <Article key={post.objectID} postData={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
