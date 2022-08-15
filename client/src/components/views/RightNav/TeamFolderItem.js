import React, { useState } from 'react'
import style from "./RightNav.module.css"
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Timeline from './Timeline';

function TeamFolderItem() {

  const [isOpen, setIsOpen] = useState(false);
  // 아코디언 메뉴바
  const [arrowOn, setArrowOn] = useState(false);
  // 화살표
  const [textColor, setTextColor] = useState('#4f4f4f');

  const [boxBackColor, setBoxBackColor] = useState('#fff');

  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen); // on,off 개념 boolean
  }

  const arrowVisible = () => {
    setArrowOn(arrowOn => !arrowOn);
  }

  const onClickHandler = () => {
      arrowVisible();
      setTextColor(textColor === "#4f4f4f" ? "#267DFF" : "#4f4f4f")
      setBoxBackColor(boxBackColor === "#fff" ? "#F5F5F5" : "#fff")
      toggleMenu();
  }
  // 클릭하면 함수 실행

  return (
      <div className={style.teamfolder_item}>

        <div className={style.teamfolder_menu} style={{backgroundColor:boxBackColor}}>

            <span className={style.down_arrow} id={arrowOn ? style.show_arrow : style.hide_arrow}>
              <img src="/img/downarrow_navright.svg" />
            </span>
            <button className={style.team_profile} onClick={()=>onClickHandler()}>
                {/* 이 버튼으로 열었다가 닫았다가 */}
                <img src="/img/teamProfile_yellow.svg" />
            </button>
            <div className = {style.team_name} style={{color:textColor}}>
                <p>팀 폴더</p>
            </div>

            <Link to="/linkstore" className = {style.settingBtn}>
                <img src="/img/setting_navright.svg" />
            </Link>

        </div>

          <div className={isOpen ? style.show_menu : style.hide_menu}> 

                < Timeline />
                < Timeline />
                < Timeline />

          </div>

      </div>

  )
}

export default TeamFolderItem


