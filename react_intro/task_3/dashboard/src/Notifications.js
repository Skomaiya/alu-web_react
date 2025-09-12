import React from "react";
import './Notifications.css';
import closeIcon from './close-icon.png';

export function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button style={{ background: 'transparent', border: 'none', float: 'right'}} aria-label="Close" onClick={console.log('Close button has been clicked')}>
                <img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }}/>
            </button>

            <ul>
                <li data-notification-type="default">New course available</li>
                <li data-notification-type="urgent">New resume available</li>
                <li data-notification-type="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}