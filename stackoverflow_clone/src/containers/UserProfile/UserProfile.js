import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Question from '../../components/Question/Question';
import TagDetail from '../../components/TagDetails/TagDetail';
import './UserProfile.css';

const UserProfile = () => {

    const [userDetails, setUserDetails] = useState({});
    const [userDataFetched, setUserDataFetched]= useState(false);
    const [userTagsFetched, setUserTagsFetched] = useState(false);
    const [userTopTags, setUserTopTags] = useState();
    const [userQuestionsFetched, setUserQuestionsFetched] = useState(false);
    const [userTopQuestions, setUserTopQuestions] = useState()

    const match = useRouteMatch();

    useEffect(() => {
        fetch(`https://api.stackexchange.com/2.3/users/${match.params.id}?order=desc&sort=reputation&site=stackoverflow`)
        .then(result => result.json())
        .then(resultData => {
            setUserDetails({...resultData.items[0]})
            setUserDataFetched(true)
        }).catch(err => {
            console.log(err)
        });
        
    },[match.params.id])

    useEffect(() => {
        fetch(`https://api.stackexchange.com/2.3/users/${match.params.id}/tags?order=desc&sort=popular&site=stackoverflow`)
        .then(res => res.json())
        .then(resData => {
            setUserTopTags([...resData.items])
            setUserTagsFetched(true)
        }).catch(err => {
            console.log(err)
        })
        
    },[match.params.id]);

    useEffect(() => {
        fetch(`https://api.stackexchange.com/2.3/users/${match.params.id}/questions?order=desc&sort=activity&site=stackoverflow`)
        .then(res => res.json())
        .then(respData => {
            setUserTopQuestions([...respData.items])
            setUserQuestionsFetched(true)
        }).catch(err => {
            console.log(err)
        })
    },[match.params.id])

    return (
        <div className="user_data_container">
            {userDataFetched ? <div className="profile_container">
                <div className="display_image_card">
                    <img src={userDetails.profile_image} alt="display_pic" />
                    <h3 className="reputation_count">{userDetails.reputation} <span>REPUTATION</span></h3>
                    <div className="badges">
                        <div className="gold_badge"><div></div>{userDetails.badge_counts.gold}</div>
                        <div className="silver_badge"><div></div>{userDetails.badge_counts.silver}</div>
                        <div className="bronze_badge"><div></div>{userDetails.badge_counts.bronze}</div>
                    </div> 
                </div>
                <div className="user_details">
                   <div className="profile_details">
                        <h1 className="display_name userInfo">{userDetails.display_name}</h1>
                        <h3 className="location userInfo">England, London</h3>
                        <h5 className="website_url userInfo"><Link to="#" style={{color:'#0276cc'}}>{userDetails.website_url}</Link></h5>
                   </div>
                </div>
            </div>: <h1>Something went wrong</h1> }
            <br/>
            <div className="top_tags_container">
                <h2 className="tag_heading">Top Tags</h2>
                <div className="top_tag_list_container">
                {userTagsFetched && 
                    userTopTags.map((item,index) => {
                        return (
                            <TagDetail key={index} tagName={item.name} score={item.count} posts={item.posts ? item.posts : 0}/>
                        )
                    }) }
                </div>
            </div>
            <br/>
            <h2 style={{fontWeight: '500'}}>Top Questions</h2>
            <div class="top_user_questions_container">
                {userQuestionsFetched ?
                    userTopQuestions.map((item,index) => {
                        return (
                            <Question key={index} 
                            tagItems={item.tags} 
                            vote={item.score} 
                            answers={item.answer_count}
                            views={item.view_count}
                            bountyNum={item.bounty_amount}
                            questTitle={item.title}
                            owner={item.owner.display_name}
                            
                        />
                        )
                    }): <h1>Something went wrong</h1>}
             
            </div>
        </div>
    )
}

export default UserProfile;