import React, { Component } from "react";

import '../../styles/comment-add-form.scss';

export default class CommentAddForm extends Component{


    constructor(props){
        super(props);
        this.state = {
            name: '',
            text: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddPost(this.state.name, this.state.text);
        this.setState({
            name: '',
            text: ''
        })
    }

    render(){

        const {name, text} = this.state;


        return(
            <div className="add-form">
                <h3>Add youre comment</h3>
                <form className="form-inputs"
                        onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="    Name"
                        name='name'
                        value={name}
                        onChange={this.onValueChange}
                         />
                    <textarea 
                        className="form-control new-post-label"
                        
                        name='text'
                        value={text}
                        onChange={this.onValueChange} 
                        />
    
                    <button
                            type="submit"
                            className="btn-submit"
                            >Add
                            </button>
                </form>
            </div>
        )
    }

}