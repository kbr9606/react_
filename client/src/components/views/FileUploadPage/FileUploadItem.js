import React from "react";
import style from './FileUpload.module.css';


function FileUploadItem(props) {



    



    return ( 
            <div className={style.FileContainer}>
        
                    
                        <div className={style.logo_title}>
                            
                            
                            <img src="/img/filepage/fileimg.png"/>
                            
                            
                                
                        
                        
                            
                            <div className={style.filetitle}>
                                <form action="." method="post">
                                    <input type="text"  class={style.title}  value="파일 이름"/> 
                                </form>                                
                            </div>

                            <div className = {style.starimg}>
                                <img src = "/img/starLine123.png"/>
                                <div className = {style.trashimg}>
                                    <img src = "/img/trashLine123.png" />
                                </div>
                            </div>
                            
                
                            



                                
                                
                        </div>                                
                    
                
            </div>
    )
}

export default FileUploadItem


/*<form action="." method="post">*/