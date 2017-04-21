import React from 'react';
import './BoardMember.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import BodyText from './BodyText';

const BoardMemberBar = ({name, picture}) => (
  <div className="BoardMemberBar_Container">
    <img src={picture} className="BoardMemberBar_Picture" />
    <span className="BoardMemberBar_Name">{name}</span>
  </div>
);

class BoardMemberProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
  }

  render() {
    const {name, picture, bio} = this.props;
    const {expanded} = this.state;
    const endOfSlice = this.state.expanded ? bio.length : 1;

    return (
      <div className="BoardMemberProfile_Container">
        <img src={picture} className="BoardMemberProfile_Picture" />
        <h1 className="BoardMemberProfile_Name">{name}</h1>
        <h2 className="BoardMemberProfile_Title">ADVISORY BOARD MEMBER</h2>

        <CSSTransitionGroup
          transitionName="AdvisoryProfileDropdown_Transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {bio
            .split('\n')
            .slice(0, endOfSlice)
            .map((line, i) => (
              <BodyText key={i} textAlign="left">{line}</BodyText>
            ))}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: props.name === 'CAPTAIN ROBERT ATCHESON'};
  }

  render() {
    const {name, picture} = this.props;
    const {expanded} = this.state;
    return (
      <div>
        <BoardMemberBar name={name} picture={picture} />
        {expanded && <BoardMemberProfile {...this.props} />}
      </div>
    );
  }
}
