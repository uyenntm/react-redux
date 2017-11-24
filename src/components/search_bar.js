import React, {Component} from 'react';

export default class SearchBar extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         term: ''
      }
    }
    
    render(){
        return (
        <div className="input-group">
         <input value={this.state.term} className="form-control"
         onChange={event=> this.setState({term:event.target.value})} />
         </div>
        )
    }
    
}

 