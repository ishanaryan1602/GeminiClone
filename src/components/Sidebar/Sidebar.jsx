import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

  const [extended, setExtended] = useState(false);

  const getPadding = (extended) => {
    return extended ? '10px 15px' : '10px 13px';
  }

  const getInset = (extended) => {
    return extended ? '50% 210px' : '-5px auto auto 15px';
  }

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img className='menu' src={assets.menu_icon} alt="" onClick={() => setExtended(prev => !prev)} />
          <div className="new-chat" style={{ padding: getPadding(extended) }}>
            <img src={assets.plus_icon} alt="" />
            {
              extended ? <p className='new-chat-p'>New Chat</p> : null
            }
          </div>
          {
            extended ? <div className="recent">
              <p className="recent-title">Recent</p>
              <div className="recent-entry history active">
                <img src={assets.message_icon} alt="" className='msg-icon-recent' />
                <p>What is react... </p>
              </div>
            </div> : null
          }

        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <div style={{ position: 'relative' }}>
              <img src={assets.question_icon} alt="" />
              <div className="red-circle" style={{ inset: getInset(extended) }}></div>
            </div>
            {
              extended ? <p>Help</p> : null
            }
          </div>
          <div className="bottom-item recent-entry">
            <div style={{ position: 'relative' }}>
              <img src={assets.history_icon} alt="" />
              {/* <div className="red-circle" style={{inset: getInset(extended)}}></div> */}
            </div>
            {
              extended ? <p>Activity</p> : null
            }

          </div>
          <div className="bottom-item recent-entry">
            <div style={{ position: 'relative' }}>
              <img src={assets.setting_icon} alt="" />
              <div className="red-circle" style={{ inset: getInset(extended) }}></div>
            </div>
            {
              extended ? <p>Setting</p> : null
            }

          </div>
          {
            extended ? <div className="bottom-item address">
              <p className='black-p'>Ghaziabad, Uttar Pradesh, India</p>
              <p className="blue-p">From your IP address • Update location</p>
            </div> : null
          }

        </div>
      </div>

    </>
  )
}

export default Sidebar