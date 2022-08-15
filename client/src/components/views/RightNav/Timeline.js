import React from 'react'
import style from "./RightNav.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import TimelineContent from './TimelineContent'

function Timeline() {
  return (

        <div className={style.timeline}>
            <p className={style.timeline_date}>08.05.</p>

            <div className={style.timeline_board}>

            <div className={style.timeline_teamprofile}>
                <img src="/img/teamProfile_yellow.svg"/>
                <p>UMC 웹런칭 - 과제헬퍼</p>
            </div>

            < TimelineContent />
            < TimelineContent />
            < TimelineContent />
            < TimelineContent />
            
            </div>

        </div>
  )
}

export default Timeline