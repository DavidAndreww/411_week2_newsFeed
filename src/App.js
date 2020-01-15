import React from 'react';


class App extends React.Component {
  state = {
    articles: []
  }

  // fetchData = () => {
  //   fetch('http://hn.algolia.com/api/v1/items/:id', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   .catch(err => console.log('Error!: ', err))
  // }

  fetchData = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api=`${proxy}https://hn.algolia.com/api/`;
    fetch(api, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('Error encountered!: ', err))
  }

  componentDidMount() {
    this.fetchData();
  }

  

  render () {
    if (this.state.articles.length === 0){
      return <p>Loading</p>
    }
    return (
      <div>News Feed</div>
    )
  }
}

export default App;
