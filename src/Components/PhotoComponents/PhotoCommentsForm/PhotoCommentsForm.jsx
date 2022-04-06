import React from "react";
import { ReactComponent as Send } from "../../../Assets/enviar.svg";
import useFetch from "../../../Hooks/useFetch";
import { COMMENT_POST } from "../../../api";
import Error from '../../Helper/Error'
import {Form} from './Style'

const PhotoCommentsForm = ({ id, setComments, single }) => {
    const { request, error } = useFetch();
    const [comment, setComment] = React.useState("");
    const commentsSection = React.useRef(null)


    
    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment });
        const { response, json } = await request(url, options);
        if (response.ok) {
            setComment("");
            setComments((comments) => [...comments, json]);
        }
    }

    return (
        <Form single={single} ref={commentsSection} onSubmit={handleSubmit}>
            <textarea
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            />
            <button>
                <Send />
            </button>
            <Error error={error}/>
        </Form>
    );
};

export default PhotoCommentsForm;
