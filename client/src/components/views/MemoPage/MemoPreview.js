// import '../App.css';
import style from './MemoUpload.module.css'
import { useDispatch } from 'react-redux';
import { MEMO_TEXT } from '../../../_actions/types';
import { MEMO_TITLE } from '../../../_actions/types';
import React, { useState } from 'react';

function MemoPreview(props) {

    // const Dispatch = useDispatch();

  
    // const [Title, setTitle] = useState("");
    // const [Text, setText] = useState("");
  
    // const onTitleHandler = (event) => {
    //   setTitle(event.currentTarget.value)
    // }
    // const onTextHandler = (event) => {
    //   setText(event.currentTarget.value)
    // }

    // const onSubmitHandler = (event) => {
    //     event.preventDefault();
    
    //     let body = {
    //       title : Title,
    //       text : Text 
    //     }
    
    //     Dispatch(loginUser(body))
    //     .then(response =>{
    //         console.log("memo");
    // })}

    const memoDelete = () => {
        {props.countList && props.countList.map((item, i) => (
            console.log(i)
            ))}
    }

    return (
        <div className={style.preview_container} draggable>
            {props.countList && props.countList.map((item, i) => (
            <div key={i} className={style.MemoPreview}>
                <div className={style.TitleInput}>
                    <input type="text" placeholder="제목" name="title" className={style.MemoTitle} ></input>
                </div>
                <div className={style.TextInput}>
                    <textarea type="text" placeholder="메모를 입력하세요..." name="text" className={style.MemoText} rows="6" maxlength="500" ></textarea>
                </div>
                <div className={style.IconContainer} >
                
                    <img className={style.StarIcon} src='/img/img+memo/gray_star.png' />
                    <img className={style.TrashIcon} src='/img/img+memo/gray_trashbin.png' onClick={memoDelete} />
                </div>
            </div>
            ))}
        </div>

    );
}

export default MemoPreview;