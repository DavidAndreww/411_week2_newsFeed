import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './App.css'


render(<App />, document.getElementById('root'));


/*
 
      if (this.state.articles === 0)
      fetch(`http://hn.algolia.com/api/v1/search?tags=author_${x}`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.hits }))
      .catch(err => console.log("Error!: ", err)); 
*/