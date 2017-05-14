import React from 'react';
import SectionHeader from './SectionHeader';
import AdvisoryProfile from './AdvisoryProfile';
import AdvisoryRow from './AdvisoryRow';
import './AdvisoryBoard.css';

const ADVISORY_ROWS = [];

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
    const { selectedName } = this.state;
    return (
      <div id="AdvisoryBoard_Container">
        <SectionHeader>ADVISORY BOARD</SectionHeader>
        <AdvisoryProfile />
        <AdvisoryRow
          onClick={this.selectName.bind(this)}
          selectedName={selectedName}
          names={ADVISORY_ROWS[0]}
          showBio={true}
        />
      </div>
    );
  }
}
