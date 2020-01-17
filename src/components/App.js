import React from "react";
import Article from "./Article";
import NavBar from "./NavBar";

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
  searchTitles(event) {
    console.log(event.target.value)
    let { searchTerm } = this.state;
    console.log("submitted:", this.state.searchTerm);
    this.fetchData(searchTerm);
  }

  render() {
    if (this.state.articles.length === 0) {
      return <p className="loading">Loading Feed...</p>;
    }
    let compareDate = (a, b) => {
      let createdA = a.created_at;
      let createdB = b.created_at;

      let comparison = 0;
      createdA > createdB ? (comparison = -1) : (comparison = 1);
      return comparison;
    };

    let compareAuthor = (a, b) => {
      let createdA = a.author.toLowerCase();
      let createdB = b.author.toLowerCase();

      let comparison = 0;
      createdA > createdB ? (comparison = 1) : (comparison = -1);
      return comparison;
    };

    let comparePopular = (a, b) => {
      let createdA = a.points;
      let createdB = b.points;

      let comparison = 0;
      createdA > createdB ? (comparison = -1) : (comparison = 1);
      return comparison;
    };
    let { searchTerm, sortBy, articles } = this.state;

    if (sortBy === "date") {
      articles.sort(compareDate);
      // https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
      console.log("sort by date", searchTerm);
    } else if (sortBy === "author") {
      articles.sort(compareAuthor);
      console.log("sort by author", searchTerm);
    } else if (sortBy === "popular") {
      articles.sort(comparePopular);
      console.log("sort by popular", searchTerm);
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
