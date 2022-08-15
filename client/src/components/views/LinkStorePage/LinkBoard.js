import React from "react";
import LinkItem from './LinkItem'
import style from './LinkStorePage.module.css';

function LinkBoard({ linkListData }) {
    console.log("onBoard", linkListData);
    // console.log("여기는 LinkBoard", linkListData);
    // linkListData.map((linkData) => console.log("123", linkData));
    return (
        <div id={style.linksBoard}>
            {linkListData.map((linkData) => <LinkItem key={linkData.linkId} link={linkData.url} name={linkData.name} uploadDate={linkData.uploadDate}/>)}
        </div>
    )
}

export default LinkBoard;