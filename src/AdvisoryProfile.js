import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import BodyText from './BodyText';
import ReadMore from './ReadMore';
import robert from './robert.jpg';
import $ from 'jquery';
import 'jquery.scrollto';
import './AdvisoryProfile.css';

const PROFILE_TEXT = `I’m the last person you’d expect to be an advocate for healthy eating. I grew up on a farm in Iowa and, as a teenager, worked at my family’s restaurant serving up burgers and fried chicken. I spent four years in the Marines and over two decades in the Washington, D.C. police force before retiring as Captain.
I never gave a darn about what I ate. Neither did anyone I knew:  My fellow officers lived on fast food, and my relatives back home didn’t eat any better.

But over time, what they ate caught up to them. My dad died of a heart attack at 69. My mom has type 2 diabetes and heart disease. Many of my colleagues struggled with their weight and blood pressure.

Nearing my fifties, I decided to make a change. I started eating more grains, beans, fruits and vegetables, and less meat. It was a total transformation, and now I feel better than ever. Ask anyone who knows me and they’ll tell you I can’t shut up about the power of a healthy diet to change your life.

We all deserve to feel that good. We all deserve a life free of diet-related disease. But too often, it feels like major food corporations want to give us the opposite. That’s why I'm a part of Balanced:  I believe that together, we can hold corporations accountable and persuade them to put our health above their pockets. Because that’s the way it ought to be.`;

class AdvisoryProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullProfile: false,
    };
  }

  toggleShowOurStory() {
    const {showFullProfile} = this.state;
    this.setState({
      showFullProfile: !showFullProfile,
    });
  }

  render() {
    const {showFullProfile} = this.state;
    const endOfSlice = showFullProfile ? PROFILE_TEXT.length : 2;
    return (
      <div id="AdvisoryProfile_Container">
        <div id="AdvisoryProfile_ImageContainer">
          <img className="AdvisoryProfile_Image" src={robert} />
          <h1 id="AdvisoryProfile_Header">CAPTAIN ROBERT ATCHESON</h1>
          <h2 id="AdvisoryProfile_Subheader">BOARD OF ADVISORS</h2>
        </div>
        <div id="AdvisoryProfile_TextContainer">
          <CSSTransitionGroup
            transitionName="AdvisoryProfileDropdown_Transition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {PROFILE_TEXT.split('\n')
              .slice(0, endOfSlice)
              .map((line, i) => (
                <BodyText key={i} textAlign="left">{line}</BodyText>
              ))}
          </CSSTransitionGroup>
          <ReadMore
            onClick={this.toggleShowOurStory.bind(this)}
            toggled={showFullProfile}
          />
        </div>
      </div>
    );
  }
}

export default AdvisoryProfile;
