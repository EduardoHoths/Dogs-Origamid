import React from "react";
import { Comments } from "./Style";
import { UserContext } from "../../../UserContext";
import PhotoCommentsForm from "../PhotoCommentsForm/PhotoCommentsForm";

const PhotoComments = (props) => {
    const [comments, setComments] = React.useState(() => props.comments);
    const { login } = React.useContext(UserContext);
    const commentsSection = React.useRef(null);

    React.useEffect(() => {
        commentsSection.current.scrollTop =
            commentsSection.current.scrollHeight;
    }, [comments]);

    return (
        <>
            <Comments single={props.single} ref={commentsSection}>
                {comments.map((comment) => (
                    <li key={comment.comment_ID}>
                        <b>{comment.comment_author}:</b>
                        <span>{comment.comment_content}</span>
                    </li>
                ))}
            </Comments>
            {login && (
                <PhotoCommentsForm single={props.single} setComments={setComments} id={props.id} />
            )}
        </>
    );
};

export default PhotoComments;
