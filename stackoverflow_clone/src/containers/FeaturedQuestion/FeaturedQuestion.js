
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Question from '../../components/Question/Question';
import './FeaturedQuestion.css';

const FeaturedQuestion = () => {

    const [questionItem, setQuestionItem] = useState([]);

    const history = useHistory();
    
    useEffect(() => {
        // https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow
        fetch('https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow')
        .then(res => res.json())
        .then(resData => {
            setQuestionItem([...resData.items]);
        })  
    },[])

    const showUserDetails = (event, id) => {
        history.push(`/user/${id}/profile`)
    }

    return (
        <>
            <div className="ques_sec_container">
                <h1 style={{display: 'inline-block', marginTop: '0px', fontWeight: '400'}}>Top Questions</h1>
                <div className="action_button_container">
                    <button type="button" className="ask_question_btn">Ask Question</button>
                    <div className="tab_buttons">
                        <div className="tab">Interesting</div>
                        <div className="tab is-tab-selected"><span style={{backgroundColor: '#0276cc',color: '#fefefe', borderRadius: '2px'}}>+295</span> Bountied</div>
                        <div className="tab">Hot</div>
                        <div className="tab">Week</div>
                        <div className="tabb">Month</div>
                    </div>
                </div>
            </div>
            <div className="question_items">
                {questionItem.map((item,index) => {
                    return (
                        <Question key={index} 
                            tagItems={item.tags} 
                            vote={item.score} 
                            answers={item.answer_count}
                            views={item.view_count}
                            bountyNum={item.bounty_amount}
                            questTitle={item.title}
                            owner={item.owner.display_name}
                            showUserProfile={(e) => showUserDetails(e, item.owner.user_id)}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default FeaturedQuestion;