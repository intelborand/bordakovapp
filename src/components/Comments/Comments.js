import React, { Component } from 'react';


import '../../styles/comments.scss';
import CommentAddForm from './CommentAddForm';
import CommentSearchPanel from './CommentSearchPanel';
import CommentsHeader from './CommentsHeader';
import CommentsItemsList from './CommentsItemsList';


export default class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            term: ''
        }
        this.maxId = 4;
    
    }

    // Fetch response from fake json data
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then(commentList => {
            this.setState({ data: commentList.splice(0, 25) });
        });
    }

    // Use useEffect

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/comments')
    //     .then((response) => response.json())
    //     .then(commentList => {
    //         this.setState({ data: commentList.splice(0, 20) });
    //     });
    // })


    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    onAddPost = (name, body) => {
        const newItem = {name, body, id: this.maxId++};
        this.setState(({data}) => {
            const newArr = [...data, newItem]

            return{
                data: newArr
            }
        })
    }

    likedComment = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, like: !item.like}
                }
                return item
            })
        }))
    }

    onRepostedComment = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, repost: !item.repost}
                }
                return item
            })
        }))
    }

    searchCom = (item, term) => {
        if(term.length === 0) {
            return item
        }

        return item.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateDataList = (term) =>{
        this.setState({term})
    }

    render() {
        
        const {data, term} = this.state;
        const allComments = this.state.data.length;
        const likedComments = this.state.data.filter(item => item.like).length;
        const repostedComments = this.state.data.filter(item => item.repost).length;
        const visibleData = this.searchCom(data, term);

        return(
        <>



            <div className="comments-container">
                <CommentsHeader allComments={allComments} likedComments={likedComments} repostedComments={repostedComments}/>

                <CommentSearchPanel onUpdateDataList={this.onUpdateDataList}/>

                <CommentsItemsList data={visibleData} onDelete={this.deleteItem} onLikedComment={this.likedComment} onRepostedComment={this.onRepostedComment}/>

                <CommentAddForm onAddPost={this.onAddPost}/>

                
            </div>
                     
        </>
        )
    }
}

