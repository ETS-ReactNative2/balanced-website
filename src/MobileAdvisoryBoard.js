import React from 'react';
import './MobileAdvisoryBoard.css';
import SectionHeader from './SectionHeader';
import BoardMember from './BoardMember';
import {
  IMAGES,
  NAMES,
  BIOS,
  BOARD_MEMBERS_KEYS,
} from './advisory_board_constants';

const BOARD_MEMBERS = BOARD_MEMBERS_KEYS.map(key => ({
  name: NAMES[key],
  picture: IMAGES[key],
  bio: BIOS[key],
}));

export default () => (
  <div id="MobileAdvisoryBoard_Container">
    <div id="MobileAdvisoryBoard_Header">
      <SectionHeader>ADVISORY BOARD</SectionHeader>
    </div>
    {BOARD_MEMBERS.map(b => <BoardMember key={b.name} {...b} />)}
  </div>
);
