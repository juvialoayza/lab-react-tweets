import ProfileImage from "./ProfileImage";
import Img from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  return (
  

    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user}/>
          

          {/* <span className="timestamp">Nov 30, 2020</span> */}
          <Timestamp time={props.tweet.timestamp}/>
        </div>

        {/* <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p> */}
        <Message message={props.tweet.message}/>

        {/* <div className="actions">
          {/* Font Awesome icons */}
          {/* <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div> */} 
        <Actions/>


      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>

  );
}

export default Tweet;
