// import '../App.css';
import style from './MemoUpload.module.css'
import MemoPreview from './MemoPreview';
import React, { useRef, useEffect, useState } from 'react';


function MemoUpload() {

    const [uploadedMemos, setUploadedMemos] = useState([]);
    const [previewMemos, setPreviewMemos] = useState([]);



    const [countList, setCountList] = useState([0]);
    const [textValue, setTextValue] = useState("");
    const [titleValue, setTitleValue] = useState("");

      
    const onAddDetailDiv = () => {
      let countArr = [...countList]
      let counter = countArr.slice(-1)[0]
      counter += 1
      countArr[counter] = counter;
      setCountList(countArr)
    }


    // const handleSetTitleValue = (e) => {
    //     setTitleValue(e.target.value);
    //   };

    // const handleSetTextValue = (e) => {
    //     setTextValue(e.target.value);
    //   };

  return (
        <div id={style.contents}>
            <div id={style.contentsHeader}>
                <div id={style.headerName}>
                  <span id={style.headerName1}>내 폴더</span>
                  <span id={style.headerName2}> > </span>
                  <span id={style.headerName3}>Portfolio 자료</span>
                </div>
                <div id={style.headerSort}>
                  <div className={style.sort} id={style.sortLink}>링크</div>
                  <div className={style.sort} id={style.sortImg}>사진</div>
                  <div className={style.sort} id={style.sortFile}>파일</div>
                  <div className={style.sort} id={style.sortMemo}>메모</div>
                </div>
            </div>
            <div id={style.contents_wrap}>
                <div className = {style.container}>    
                    <button className={style.MemoBtn} onClick={onAddDetailDiv}>
                        <img src="/img/img+memo/uploadmemo.png" />
                        <div>
                            메모 작성하기
                        </div>
                    </button>
                
                    <MemoPreview countList={countList}/>
                
                </div>
            </div>
        </div>

  );
}


export default MemoUpload;
