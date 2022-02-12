
import '../../styles/comments-item.scss';

const CommentsItem = (props) => {

  

    const {name, body, onDelete, like, repost, onLikedComment, onRepostedComment} = props;
    

   
    let classNameLike = '';
    let classNameRepost = '';

    if(repost) {
        classNameRepost += 'reposted';
    }

    if(like) {
        classNameLike += 'like';
    }
    


    return(
        <li className='li-group'>
            <span>{name}</span>
            <div className='comment-text' >{body}</div>
            <div>
                <button className={classNameLike} 
                        onClick={onLikedComment}>
                    Like 
                </button>

                <button className={classNameRepost}
                        onClick={onRepostedComment}>
                    Repost
                </button>

                <button onClick={onDelete}>
                    Delete
                </button>
            </div>
        </li>
    )
    
}

export default CommentsItem;