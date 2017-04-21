import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import BodyText from './BodyText';
import ReadMore from './ReadMore';
import './BoardMember.css';

const BoardMemberBar = ({name, picture, onClick}) => (
  <div className="BoardMemberBar_Container" onClick={onClick}>
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
        {bio.split('\n').length > 1 &&
          <ReadMore
            toggled={expanded}
            onClick={() => this.setState({expanded: !expanded})}
          />}
      </div>
    );
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: props.name === 'Capt. Robert Atcheson'};
  }

  render() {
    const {name, picture} = this.props;
    const {expanded} = this.state;
    return (
      <div>
        <BoardMemberBar
          name={name}
          picture={picture}
          onClick={() => this.setState({expanded: !expanded})}
        />
        {expanded &&
          <CSSTransitionGroup
            transitionName="AdvisoryProfileDropdown_Transition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <BoardMemberProfile {...this.props} />
          </CSSTransitionGroup>}
      </div>
    );
  }
}
