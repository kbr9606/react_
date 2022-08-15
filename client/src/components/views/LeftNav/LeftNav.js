import React, { useState } from "react";
import style from './LeftNav.module.css'

function LeftNav() {

    // wrap을 씌우면 안됨(?) : 색깔 변경이 좌우 양끝까지 해야함
    const [isOpen, setIsOpen] = useState(false);
  
    const [arrowOn, setArrowOn] = useState(false);
    // 화살표
    const [textColor, setTextColor] = useState('#4f4f4f');

    const [boxBackColor, setBoxBackColor] = useState('#fff');

    const [plusVisible, setPlusVisible] = useState('hidden');
    
    const toggleMenu = () => {
        setIsOpen(isOpen => !isOpen); // on,off 개념 boolean
    }
    
    const arrowVisible = () => {
        setArrowOn(arrowOn => !arrowOn);
    }

    const onClickHandler = () => {
        arrowVisible();
        setTextColor(textColor === "#4f4f4f" ? "#267DFF" : "#4f4f4f")
        setBoxBackColor(boxBackColor === "#fff" ? "#F6F9FD" : "#fff")
        toggleMenu();
    }

    if (window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/findpassword' || window.location.pathname === '/resetpassword') return null;
    
    return (
        <div id={style.side_left}>
            {/* <img className = {style.left_line} src="/img/leftLineGray.png" /> */}

            <div className = {style.helper_logo}>
                <img className={style.logo_img} src="/img/logoRectangle.png" />
                <div className = {style.helper_text}>
                    <p>과제헬퍼</p>
                </div>
            </div>
        
            <div className={style.menu_wrap}>
                <div className={style.myfolder} onClick={()=>onClickHandler()} style={{backgroundColor:boxBackColor}}>

                    <div className={style.myfolder_btn}>

                        <img src="/img/downarrow_navright.svg" className={style.down_arrow}/>
                        {/* 이게 아래 화살표 */}

                        <img className={style.menu_img} src = "/img/homeLine.png" />
                        {/* fontawesome */}

                        <div className = {style.menu_title} style={{color:textColor}}><p>팀 폴더</p></div>
                        {/* 이게 팀 폴더 이름 */}

                    </div>
                    <button>
                        <img src="/img/common_img/plus_icon.svg" className={style.add_folder} />
                    </button>

                </div>
                    {/* <ul className={style.sub_menu}>
                        <li>프로젝트 현황</li>
                        <li>웹런칭 프로젝트 파이팅!!!</li>
                        <li>설치정보 등록</li>
                    </ul> */}
                
                <div className={style.favorites}>

                        <img src="/img/downarrow_navright.svg" className={style.down_arrow}/>
                        {/* 이게 아래 화살표 */}

                        <img className={style.menu_img} src = "/img/common_img/star_line.svg" />
                        {/* fontawesome */}

                        <div className = {style.menu_title}>
                            <p>즐겨찾기</p>
                        </div>
                        {/* 이게 팀 폴더 이름 */}

                </div>

                <div className={style.trashbin}>

                        <img src="/img/downarrow_navright.svg" className={style.down_arrow}/>
                        {/* 이게 아래 화살표 */}

                        <img className={style.menu_img} src = "/img/common_img/trashbin.svg" />
                        {/* fontawesome */}

                        <div className = {style.menu_title}>
                            <p>휴지통</p>
                        </div>
                        {/* 이게 팀 폴더 이름 */}

                </div>
                
                
            </div>

        </div>
        )
    }

export default LeftNav;

{/* <span className={style.down_arrow} id={arrowOn ? style.show_arrow : style.hide_arrow}></span> */}