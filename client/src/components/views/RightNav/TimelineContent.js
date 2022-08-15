import React from 'react'
import style from "./RightNav.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function TimelineContent() {
  return (
    <div className={style.timeline_content}>
                
        <FontAwesomeIcon icon={faCircle} className={style.circle} />
        
        <div className={style.timeline_description}>
        <p className={style.timeline_what}><span className={style.boldfont}>000</span>님이 <span className={style.boldfont}>파일이름</span> 을(를) 폴더에 추가했습니다.</p>
        <p className={style.timeline_when}>오후 4:05</p>
        </div>
    </div>

  )
}

export default TimelineContent