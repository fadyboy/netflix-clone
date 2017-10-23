import React from 'react'

export default class App extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            searchTerm: "",
            searchUrl: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleChange(event){
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleKeyUp(event){
        if(event.key === "Enter" && this.state.searchTerm !== ""){
            let searchUrl = "search/multi?query=" + this.state.searchTerm + "&api_key=" + this.apiKey;
            this.setState({
                searchUrl: searchUrl
            })
        }
    }

    render(){
        return (
            <div>
                <input
                 onKeyUp={this.handleKeyUp}
                 onChange={this.handleChange}
                 type="search"
                 placeholder="Search for title"
                 value={this.state.searchTerm}
                 />
            </div>
        )
    }
}