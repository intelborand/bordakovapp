import React from "react";
import CommentsItem from "./CommentsItem";

const CommentsItemsList = ({data, onDelete, onLikedComment, onRepostedComment}) => {


    const element = data.map(item => {
        const {id, ...itemProps} = item;

        return(
            <CommentsItem 
            key={id} 
            {...itemProps} 
            onDelete={() => onDelete(id)}
            onLikedComment={() => onLikedComment(id)}
            onRepostedComment={() => onRepostedComment(id)}/>
        )
    })


    return(

        

        <ul>

            
            {element}
            
        </ul>
    )
}

export default CommentsItemsList;