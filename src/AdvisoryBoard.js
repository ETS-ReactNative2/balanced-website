import React from 'react';
import SectionHeader from './SectionHeader';
import AdvisoryProfile from './AdvisoryProfile';
import AdvisoryRow from './AdvisoryRow';
import './AdvisoryBoard.css';

const ADVISORY_ROWS = [
  ['greger', 'michelle', 'julieanna', 'reshma'],
  ['matt', 'asha', 'pamela', 'jackson'],
  ['aaron'],
];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: '',
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
        {ADVISORY_ROWS.map((row, i) => (
          <AdvisoryRow
            key={i}
            onClick={this.selectName.bind(this)}
            selectedName={selectedName}
            names={row}
            showBio={true}
          />
        ))}
      </div>
    );
  }
}
