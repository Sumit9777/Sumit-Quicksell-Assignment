import React from 'react';
import './card.css';
import UserIcon from '../../UserIcon'; // Adjusted to locate UserIcon in ui-elements
import MoreIcon from '../../../assets/icons_FEtask/T dot menu.svg'; // Corrected path for MoreIcon
import { getStatusIcon } from '../../../utilities/util'; // Adjusted to import from utilities

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon }) {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {!hideProfileIcon && <UserIcon name={userData.name} available={userData.available} />}
      </div>


      <div className='middle-container'>
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      
      <div className='bottom-container'>
        <div className='more-icon-container'>
          <img src={MoreIcon} alt="More options" />
        </div>
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
