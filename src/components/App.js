import React from "react";
import Article from "./Article";
import NavBar from "./NavBar";

class App extends React.Component {
  state = {
    articles: [],
    searchTerm: "",
    sortBy: "date"
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

  // event.preventDefault is breaking code....searchfield works if query is performed when state changes using onChange, but not on form submit
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
    let { searchTerm, sortBy, articles } = this.state;
    if(sortBy === 'date'){
      // https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
      console.log('sort by date', articles)
    } else if (sortBy === 'author') {
      console.log('sort by author', searchTerm)
    } else if (sortBy === 'popular') {
      console.log('sort by popular', searchTerm)
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
