import React from 'react';
import SectionHeader from './SectionHeader';
import AdvisoryProfile from './AdvisoryProfile';
import AdvisoryHeads from './AdvisoryHeads';
import AdvisoryBio from './AdvisoryBio';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './AdvisoryBoard.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: 'greger',
    };
  }

  selectName(selectedName) {
    this.setState({
      selectedName,
    });
  }

  render() {
    const {selectedName} = this.state;
    return (
      <div id="AdvisoryBoard_Container">
        <SectionHeader>ADVISORY BOARD</SectionHeader>
        <AdvisoryProfile />
        <AdvisoryHeads
          selectedName={selectedName}
          onClick={this.selectName.bind(this)}
        />
        <CSSTransitionGroup
          transitionName="AdvisoryBio_Transition"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={300}
        >
          <AdvisoryBio key={selectedName} selectedName={selectedName} />
        </CSSTransitionGroup>
      </div>
    );
  }
}
