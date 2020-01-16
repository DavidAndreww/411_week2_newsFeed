import React from "react";

class App extends React.Component {
  state = {
    articles: []
  };

  fetchData = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=`)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log("Error!: ", err));
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.articles.length === 0) {
      return <p>Loading</p>;
    }
    return <div>News Feed!!!</div>;
  }
}

export default App;
