import React, { useState } from "react"
// import { Link } from "react-router-dom";
// import style from "../../../App.module.css"
import style from "./RightNav.module.css"
import TeamFolderBoard from "./TeamFolderBoard";

function RightNav1() {

    if (window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/findpassword' || window.location.pathname === '/resetpassword') return null;

    return (

            <div id={style.side_right}>

                <div className = {style.team_make}>
                    <div  className = {style.team_img}>
                        <img src="/img/teamMember.png" />
                    </div>
                    <div className = {style.teamfolder_text}>
                        <p>팀 폴더</p>
                    </div>

                    <button className={style.img_button}>
                        <img src='/img/common_img/plus_icon.svg' />
                    </button>

                    {/* <input type="button" className={style.img_button} /> */}
                </div>


                <TeamFolderBoard />
            </div>
    )
}

export default RightNav1;


        