import React from 'react'
import TeamFolderItem from './TeamFolderItem';
import style from "./RightNav.module.css"

function TeamFolderBoard(props) {
  
    return (
        <div className = {style.teamfolder_board}>
            <TeamFolderItem />
            <TeamFolderItem />
            <TeamFolderItem />
        </div>
            
  )
}

export default TeamFolderBoard;