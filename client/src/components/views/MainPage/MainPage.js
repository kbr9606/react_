import React, { useState, useRef } from 'react';
import style from "./MainPage.module.css";
import Folder from "./Folder.js";
import FileItem from "./FileItem.js";
function MainPage () {
    
    return(
        <div id={style.contents}>
            <div id={style.contents_wrap}>

                    <div className={style.recent_folder}>
                            <p className={style.recent_folder_title}>최근폴더</p>

                            <div className={style.select_folders}>
                                <button className={style.clicked}>전체</button>
                                <span>|</span>
                                <button>내 폴더</button>
                                <span>|</span>
                                <button>팀 폴더</button>
                            </div>

                            <div className={style.folderBoard}>
                                
                                < Folder />

                                < Folder />

                                < Folder />

                            </div>
                    </div>

                    <div className={style.recent_file}>
                            <p className={style.recent_file_title}>최근파일</p>
                            <div className={style.recent_file_list}>

                                <div className={style.file_property}>
                                    <p className={style.file_title_type}>파일명</p>
                                    <p className={style.file_title_uploader}>업로더</p>
                                    <p className={style.file_title_date}>날짜</p>
                                    <p className={style.file_title_size}>파일 사이즈</p>
                                </div>

                                <FileItem />
                                <FileItem />
                                <FileItem />
                                <FileItem />
                                <FileItem />
                                <FileItem />
                                <FileItem />
                                <FileItem />
                                

                            </div>
                    </div>
            </div>
        </div>
    )
}


export default MainPage;

// 정보 동적으로 받기 (map 사용하기)