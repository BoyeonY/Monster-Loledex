import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/serach-box.component';

import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField : ''
    }
    // this.handleChange = this.handleChange.bind(this); -> instead of this, handleChange = (e) => {this.setState({searchField: e.target.value});
    
  }

   componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}));
  }
    // WHEN WE CREATE A CLASS METHOD, =(e) => (narrow) needs to bind automatically.
    handleChange = (e) =>{
      this.setState({searchField: e.target.value})
    }

  

    render(){
      const { monsters, searchField} = this.state;
      // const monsters = this.state.monsters;
      // const searchFiled = this.state.searchField;
    
      const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
      return(
        
        <div className="App">
    
         <h1>Monster Loledex</h1>
          <SearchBox
            placeholder='search monsters'
            handleChange={this.handleChange}
            // handleChange={e => this.setState({searchField: e.target.value})}
            
          />

          <CardList monsters ={filterMonsters}/>


         
      </div>
      )
    }

}


export default App;
