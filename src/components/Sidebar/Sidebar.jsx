import React, { useState, useContext } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {

  const [extended, setExtended] = useState(false);
  const { input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent } = useContext(Context);

  const getPadding = (extended) => {
    return extended ?
      {
        padding: '10px 15px',
      }
      :
      {
        padding: '10px 5px 10px 15px',
      };
  }

  const getInset = (extended) => {
    return extended ? '50% 210px' : '-5px auto auto 15px';
  }

  const getStyleOnExtend = (extended) => {
    return extended
      ?
      {
        transform: 'rotateY(0deg)',
        transition: 'transform 0.6s',
      }
      :
      {
        transform: 'rotateY(90deg)',
        transition: 'transform 0.01s',
        width: '0px',
        height: '0px',
      };
  }

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img className='menu' src={assets.menu_icon} alt="" onClick={() => setExtended(prev => !prev)} />
          <div className="new-chat" style={getPadding(extended)}>
            <img src={assets.plus_icon} alt="" />
            {/* {
              extended ? <p className='new-chat-p' style={getStyleOnExtend(extended)}>New Chat</p> : <p></p>
            } */}
            <p className='new-chat-p' style={getStyleOnExtend(extended)}>New Chat</p>
          </div>
          {
            extended ? <div className="recent">
              <p className="recent-title">Recent</p>
              {
                prevPrompt?.map((item, index) => {
                  return (
                    <div className="recent-entry history">
                      <img src={assets.message_icon} alt="" className='msg-icon-recent' />
                      <p>{item.slice(0, 18)} ...</p>
                    </div>
                  )
                })
              }

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