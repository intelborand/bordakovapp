import React from "react";
import '../../styles/comment-header.scss';


const CommentsHeader = ({allComments, likedComments, repostedComments}) => {

    return(
        <>
            <div className="header-container">
                <h1>You can write comments</h1>
                <div style={{display: "flex", flexDirection: "row", marginTop: "10px", backgroundColor:'#f18973'}}>
                    <h2>Comments in page: {allComments} </h2>
                    <h2>Liked comments: {likedComments}</h2>
                    <h2>Reposted comments: {repostedComments}</h2>
                </div>
                <style jsx>{`
                    h2{
                        margin-left: 20px;
                        margin-right: 20px;
                    }
                `}</style>
            </div>
        </>
    )
}

export default CommentsHeader;