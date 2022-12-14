import style from './TrashPage.module.css'
import React, { useEffect } from 'react';
import axios from 'axios';

function TrashPage() {

    useEffect(() => {
        axios.get("http://3.37.214.20:8080/trash/:memberId")
        .then((response) => {
            console.log('123', response)
        })
        .catch((err) => console.log('오류남', err))
  },[]);

  const onDeleteTrash = (e) => {
    axios.get("http://3.37.214.20:8080/trash/item")
    .then((response) => {
        console.log('123', response)
    })
    .catch((err) => console.log('오류남', err))
  }

    return (
        <div id={style.contents}>
            <div id={style.contents_wrap}>
                <div className={style.trashTitle}>
                    휴지통 목록
                </div>

                <div className = {style.container}>
                    <div className={style.trashInfoTitle}>
                        <div className={style.fileInfoTitle}>
                            파일명
                        </div>
                        <div className={style.uploaderInfoTitle}>
                            업로더
                        </div>
                        <div className={style.dateInfoTitle}>
                            삭제한 날짜
                        </div>
                        <div className={style.sizeInfoTitle}>
                            파일 사이즈
                        </div>
                        <div className={style.deleteInfoTitle}>
                            영구 삭제
                        </div>
                    </div>

                    <div className={style.trashInfo}>
                        <div className={style.fileInfo}>
                            <div className={style.fileIcon}>
                                <img src='img/fileIcon.png'></img>
                            </div>
                            <div className={style.fileName}>
                                Weekly Reports.docs
                            </div>
                        </div>
                        <div className={style.uploaderInfo}>
                            <img src='img/mainpage/userImage.png' className={style.uploaderImg}></img>
                        </div>
                        <div className={style.dateInfo}>
                            2022.07.16 - 12:42 AM
                        </div>
                        <div className={style.sizeInfo}>
                            20MB
                        </div>
                        <div className={style.deletIcon}>
                            <img src='img/bookmarkTrash.png' onClick={onDeleteTrash} className={style.trashIcon}></img>
                        </div>
                        
                    </div>
            
                </div>
            </div>
        </div>
    )
}

export default TrashPage;