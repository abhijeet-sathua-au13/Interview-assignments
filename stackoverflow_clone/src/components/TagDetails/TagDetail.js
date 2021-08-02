import './TagDetail.css';

const TagDetail = (props) => {
    return (
            <div className="tag_card">
                <span className="tag_achieved">{props.tagName}</span>
                <div className="tag_info">
                    <span className="tagScore tag_data"><span style={{color:'#a0a0a0', fontSize: '0.8em'}}>SCORE</span> {props.score}</span>
                    <span className="postNum tag_data" ><span style={{color:'#a0a0a0', fontSize: '0.8em'}}>POSTS</span> {props.posts}</span>
                </div>
            </div>
    );
}

export default TagDetail;