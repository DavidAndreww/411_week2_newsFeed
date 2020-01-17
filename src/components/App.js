import React from "react";
import Article from "./Article";
import NavBar from "./NavBar";
import { comparePopular, compareDate, compareAuthor } from '../HelperFunctions'

class App extends React.Component {
  state = {
    articles: [],
    searchTerm: "",
    sortBy: "date"
  };

  componentDidMount() {
    fetch(`http://hn.algolia.com/api/v1/search?query=...`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.hits }))
      .catch(err => console.log("Error!: ", err));
  }

  fetchData = x => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${x}`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.hits }))
      .catch(err => console.log("Error!: ", err));
      /* 
      if (this.state.articles === 0)
      fetch(`http://hn.algolia.com/api/v1/search?tags=author_${x}`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.hits }))
      .catch(err => console.log("Error!: ", err)); 
      */
  };

  handleFormChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // event.preventDefault is breaking code....searchfield works if query is performed when state changes using onChange, but not on form submit
  searchTitles(e) {
    e.preventDefault()
    let { searchTerm } = this.state;
    console.log("submitted:", this.state.searchTerm);
    this.fetchData(searchTerm);
  }

  render() {
    if (this.state.articles.length === 0) {
      return <p className="loading">Loading Feed...</p>;
    }

    let { sortBy, articles } = this.state;
    if (sortBy === "date") {
      articles.sort(compareDate);
    } else if (sortBy === "author") {
      articles.sort(compareAuthor);
    } else if (sortBy === "popular") {
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
