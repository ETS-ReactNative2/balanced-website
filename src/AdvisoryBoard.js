import React from 'react';
import SectionHeader from './SectionHeader';
import AdvisoryProfile from './AdvisoryProfile';
import AdvisoryRow from './AdvisoryRow';
import { ADVISORY_ROWS } from './advisory_board_constants';
import $ from 'jquery';
import './AdvisoryBoard.css';
import 'jquery.scrollto';

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
    const element = document.getElementById(`Head_${selectedName}`);
    setTimeout(() => $(window).scrollTo(element, { duration: 500 }), 500);
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
