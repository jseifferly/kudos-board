import '../styles/CommentBox.css'

export default function CommentBox({comments}) {

    if(comments.length !== 0){
        return(
            <div className="comment-box">
                {comments.map((comment) => {
                    return <p>{comment}</p>
                })
                }
            </div>
        );
    }
}