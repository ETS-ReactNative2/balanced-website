import React from 'react';
import BodyText from './BodyText';
import SectionHeader from './SectionHeader';
import ReadMore from './ReadMore';
import OurStoryDropdown from './OurStoryDropdown';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './OurStory.css';

class OurStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOurStory: false,
    };
  }

  toggleShowOurStory() {
    const {showOurStory} = this.state;
    this.setState({
      showOurStory: !showOurStory,
    });
  }

  render() {
    const {showOurStory} = this.state;
    return (
      <div id="OurStory_Container">
        <div id="OurStory_outerContainer">
          <div id="OurStory_innerContainer">
            <SectionHeader>OUR STORY</SectionHeader>
            <div id="textContainer">
              <BodyText textAlign="left">
                Becoming a mom changed a lot for me. The clothes I wear. The car I drive.
                The amount of sleep I get (or, more accurately, don’t get). But what it changed
                most is how I think about food.
              </BodyText>
              <BodyText textAlign="left">
                My two year old daughter Ada means the world to me, and like many moms
                I try my best to keep her healthy. But  I’ve learned just how difficult it
                can be to actually make that happen in a world where so much of the food
                available is so bad for us.
              </BodyText>
            </div>
            <ReadMore
              toggled={showOurStory}
              onClick={this.toggleShowOurStory.bind(this)}
            />
          </div>
          <div id="audreyBox">
            <h1 className="audreyName">AUDREY SANCHEZ</h1>
            <h2 className="audreyTitle">EXECUTIVE DIRECTOR</h2>
          </div>
        </div>
        {
          <CSSTransitionGroup
            transitionName="OurStoryDropdown_Transition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {showOurStory && <OurStoryDropdown />}
          </CSSTransitionGroup>
        }
      </div>
    );
  }
}

export default OurStory;
