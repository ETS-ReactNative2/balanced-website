import React from 'react';
import SectionHeader from './SectionHeader';
import AdvisoryProfile from './AdvisoryProfile';
import AdvisoryHeads from './AdvisoryHeads';
import AdvisoryBio from './AdvisoryBio';
import './AdvisoryBoard.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: 'michelle',
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
        <AdvisoryBio selectedName={selectedName} />
      </div>
    );
  }
}
