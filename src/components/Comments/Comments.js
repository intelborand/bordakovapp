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
            data: [
                    {name: "Valera",
                    like: false,
                    repost: false,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut, eveniet nulla voluptatum molestiae quae similique, rem quos fuga architecto quis sint ipsam minus aperiam, eos alias a est amet!',
                    id: 1},
                    {name: "Simple",
                    like: false,
                    repost: false,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut, eveniet nulla voluptatum molestiae quae similique, rem quos fuga architecto quis sint ipsam minus aperiam, eos alias a est ametsit amet consectetur adipisicing elit. Suscipit aut, eveniet nulla voluptatum molestiae quae similique, rem quos fuga architecto quis sint ipsam minus aperiam, eos alias a est amet!',
                    id: 2},
                    {name: "Kirril",
                    like: false,
                    repost: false,
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aut, eveniet nulla voluptatum molestiae quae similique, rem quos fuga architecto quis sint ipsam minus aperiam, eos alias a est ametsit amet consectetur adipisicing elit. Suscipit aut, eveniet nulla voluptatum molestiae quae similique, rem quos fuga architecto quis sint ipsam minus aperiam, eos alias a est amet!met consectetur adipisicing elit. Suscipit aut, eveniet nulla voluptatum molestiae quae similique, rem quos fuga architecto quis sint ipsam minus aperiam, eos alias a est ametsit amet consectetur adipisicing elit. Suscipit aut, eveniet nulla voluptatum molestiae quae similique, rem quos fuga architecto quis sint ipsam minus aperiam, eos alias a est amet!',
                    id: 3}
                ],
                term: ''
        }
        this.maxId = 4;
    
    }

    deleteItem = (id) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    onAddPost = (name, text) => {
        const newItem = {name, text, id: this.maxId++};
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

