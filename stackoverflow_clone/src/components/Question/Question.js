import { Link } from 'react-router-dom';
import TagButton from '../TagButton/TagButton';
import './Question.css';

const Question = (props) => {
    return (
        <div className="quest_container">
        <div className="related_info">
            <div className="votes_sec info">
                <span>{props.vote}</span>
                <span>votes</span>
            </div>
            <div className={`answers_sec info ${props.answers > 0 && 'valid-answer'}`}>
                <span>{props.answers}</span>
                <span>answers</span>
            </div>
            <div className="views_sec info">
                <span>{props.views}</span>
                <span>views</span>
            </div>
        </div>
        <div className="question_sec">
            <div>
                <h3 style={{marginTop: '0px', fontWeight: '400'}}><span className="bounty_num">+ {props.bountyNum}</span> {props.questTitle}</h3>
            </div>
            <div className="additional_info">
                <div className="tag_list">
                    {props.tagItems.map((tag,index) => {
                       return <TagButton key={index} tagName={tag}/>
                    })}
                </div>
            </div>
            <div className="modified_date">
                {props.showUserProfile && <span>modified 12 jul at 12:57 PM <Link to="#" style={{textDecoration: 'none', color: '#0276cc'}} onClick={props.showUserProfile} > {props.owner}</Link></span>}
            </div>  
        </div>
    </div>
  );
};

export default Question;
