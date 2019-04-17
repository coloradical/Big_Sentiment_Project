import React, { Component } from 'react'
import axios from 'axios'

import Suggestions from '../components/Suggestions'
import { TextField } from '@material-ui/core';

const API_URL = 'http://34.73.60.209:9200/trending_suggestion/_search?pretty'

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  }

  getInfo = () => {

    var requestJSON =  JSON.parse('{"suggest": {"hashtag" : {"regex" : "", "completion" : { "field" : "suggest", "size":10, "skip_duplicates": true}}}}');
    requestJSON['suggest']['hashtag']['regex'] = '.*'+this.state.query.replace(' ', '.*') + ".*"; 

    var headers = {
        'Content-Type': 'application/json'
    }

    axios.post(API_URL, requestJSON, {headers: headers})
    .then(({ data }) => {
        var suggest = [];
        var response = data.suggest.hashtag[0].options;

        if (response.length == 0){
            console.log("No responses for this search, running fuzzy search");
            this.fuzzySearchES()
        }else{
            for (var i = 0; i < response.length; i++) {
                suggest.push(response[i].text);
                console.log("Suggestions response: "+ suggest);
                this.setState({ 
                    results: suggest
                  })
            }
        }

        
      })
      .catch((error) => {
          console.log(error); 
          this.setState({ error: true })
    })
  }

  fuzzySearchES = () =>{
    
    console.log("Fuzzy search called");
    var requestJSON =  JSON.parse('{"query": {"match": {"suggest-keyword": {"fuzziness": 2,"prefix_length": 1, "query": ""}}}}');
    requestJSON['query']['match']['suggest-keyword']['query'] = this.state.query;

    var headers = {
        'Content-Type': 'application/json'
    }

    axios.post(API_URL, requestJSON, {headers: headers})
    .then(({ data }) => {
        var suggest = [];
        var response = data.hits.hits;
        
        for (var i = 0; i < response.length; i++) {
            suggest.push(response[i]._source.suggest)
        }

        console.log("Fuzzy search response: "+ suggest);
        this.setState({ 
            results: suggest
          })
      })
      .catch((error) => {
          console.log(error); 
    })
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()

        this.getInfo()
        // if (this.state.query.length % 2 === 0) {
        //   this.getInfo()
        // }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }

  render() {
    return (
      <form>
        {/* <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        /> */}
        <TextField
          class="TextField"
          id="outlined-full-width"
          label="Search"
          style={{ margin: 8}}
          placeholder="Search your favourite hashtags"
          helperText="Press any key to search"
          fullWidth
          margin="normal"
          variant="outlined"
          autoComplete="Off"
          //onKeyDown={this.keyPress}
          value={this.state.query}
        //   ref={input => this.search = input}
          onChange={this.handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}/>
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search