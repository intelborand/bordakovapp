import {Component} from "react";

import '../../styles/comment-search-panel.scss';

export default class CommentSearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateData = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateDataList(term);
    }

    render() {
        return(
            <>
            <input
                type='text'
                className='form-control search-panel'
                placeholder='Find comment by name'
                value={this.state.term}
                onChange={this.onUpdateData}/>
            </>
        )
    }
}