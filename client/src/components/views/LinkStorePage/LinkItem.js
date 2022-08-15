import React, { useState, useRef, useEffect } from "react";
import style from './LinkStorePage.module.css';

function LinkItem(props) {

    const [blueBorder, setBlueBorder] = useState('none');

    const onHover = (event) => {
        setBlueBorder("3px solid #267DFF");
    }
    const onNotHover = (event) => {
        setBlueBorder("none");
    }
    // 호버하면, 테두리 효과줌

    const [usualStar, setUsualStar] = useState('block');
    const [clickedStar, setClickedStar] = useState('none');

    const onClickStar = (event) => {
        setUsualStar(usualStar === "block" ? "none" : "block")
        setClickedStar(clickedStar === "none" ? "block" : "none")
    }
    // 별 누르면 이미지 변화

    const [text, setText] = useState(`${props.name}`);
    const [editable, setEditable] = useState(false);

    const editOn = () => {
        setEditable(true); 
    };
    
    const handleChange = (event) => {
        setText(event.currentTarget.value);
      };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          setEditable(!editable);
        }
      };

    const ref = useRef(null);
    
    const handleClickOutside = (e) => {
        if (editable == true && !ref.current.contains(e.target)) setEditable(false);
      };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside, true);
      });
    // 제목을 바꿀수 있는 기능 => form 태그 필요함
    
    return ( 
            <div className={style.LinkContainer} onMouseEnter={onHover} onMouseLeave={onNotHover} style={{ border : blueBorder}}>
                <div ref={ref}>
                    {editable ? ( <input type="text" value={text} onChange={(event) => handleChange(event)} onKeyDown={handleKeyDown} className={style.link_title} id={style.link_title_input}/>) : 
                        (<span onClick={() => editOn()} className={style.link_title}>{text}</span>)} 
                </div>
                <a href={props.link} target="_blank">

                    <p className={style.page_link}>{ props.link.length>=50 ? props.link.substr(0,50)+"..." : props.link }</p>

                    <span className={style.file_date}>{props.uploadDate}</span>
                </a>
                
                <button className={`${style.star_icon} ${style.button_flex}`}>
                    <img src="img/common_img/star_line.svg" alt="star" className={style.twenty_size} onClick={onClickStar} style={{display : usualStar}}/>
                    <img src="img/common_img/star_filled.svg" alt="star" className={style.twenty_size} onClick={onClickStar} style={{display : clickedStar}}/>
                </button>

                <button className={`${style.trashbin_icon} ${style.button_flex}`}>
                    <img src="img/mainpage/trashbin.svg" alt="trashbin" className={style.twenty_size}/>
                </button>
                
            </div>
    )
}

export default LinkItem

