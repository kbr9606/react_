import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LinkBoard from './LinkBoard';
import style from './LinkStorePage.module.css';



function LinkStorePage () {

    const [linkListData, setLinkListData] = useState([]);

    useEffect(() => {
        // axios.get("//localhost:3000/data/linkRes.json")
        axios.get("http://3.37.214.20:8080/folder/member/1")
        .then((response) => {
            console.log('123', response)
            // setLinkListData(...linkListData, response.data.result)
            // 받은 (기존에 서버에 저장되어 있던) response를 linklist에 저장함
            console.log('여기는 useEffect', linkListData);
        })
        .catch((err) => console.log('오류남', err))
  },[]);


    const [Link, setLink] = useState('');
    
    const onLinkHandler = (event) => {
        setLink(event.currentTarget.value)
    }
    // input창의 내용

    const [LinkList, setLinkList] = useState([]);
    // 필요없음 : 서버에 추가하고, 이를 받아오는 형식임

    
    const OnEmbedLinkHandler = (event) => {
        event.preventDefault();
        let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if(regex.test(Link)) {
            axios.get("//localhost:3000/data/linkResPost.json")
            .then((response) => {
                setLinkListData(...linkListData, response.data.result)    
                // console.log("onEmbed", linkListData);
            })
            .catch(err => console.log(err))
        }
        else {
            console.log("not url");
            setLink("");
        }
    }

    // setLinkListData(On~)가 실행되면, 컴포넌트가 랜더링되는데, 그떄 다시 처음으로 돌아서 

        // useEffect(() => {
        //     let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        //     if(regex.test(Link)) {
        //         axios.get("//localhost:3000/data/linkResPost.json")
        //         .then((response) => {
        //             setLinkListData(...linkListData, response.data.result)    
        //         })
        //         .catch(err => console.log(err))
        //     }
        //     else {
        //         console.log("not url");
        //         setLink("");
        //     }    
        // }, [])

        // form (post)가 들어가야함 + axios.post()
        // post로 추가하면, 리렌더링 시켜서 새로운 linklistdata로 get 메서드를 실행하게끔 


    console.log('여기는 useEffect밖', linkListData);
    
    return(
        <div id={style.contents}>
            <div id={style.contents_wrap}>
                
                    <div id={style.myFolder}>
                            <span>내폴더</span>
                            <span>Portfolio자료</span>
                    </div>

                    <div id={style.linkStore}>

                        <div id={style.linkAdd}>
                            <form onSubmit={OnEmbedLinkHandler}>
                                <input type="text" onChange={onLinkHandler} id={style.linkInput} value={Link} placeholder=" URL을 붙여 넣으세요(https://...)"/>
                                <button type='submit' id={style.linkBtn}>링크 임베드</button>
                                {/* <button onClick={OnEmbedLinkHandler} id={style.linkBtn}>링크 임베드</button> */}
                            </form>
                        </div>
                        
                        <LinkBoard linkListData = {linkListData} />
                    </div>
                
            </div>
        </div>
    )
}


export default LinkStorePage;


// let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
//         if (regex.test(event.currentTarget.value)) {
//             setLink(event.currentTarget.value)
//         } else {
//             alert('Wrong URL');
//         }


// const OnEmbedLinkHandler = () => {
//     let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
//     if (regex.test(Link)) {
//         useEffect(() => {
//             axios.get("//localhost:3000/data/linkRes.json")
//             .then((response) => {
//                 setLinkListData(...linkListData, response.data.result)})
//             .catch(err => console.log(err))
//             }, []);
//     } else {
//         alert('Wrong URL');
//         setLink("");
//     }
//     // form (post)가 들어가야함 + axios.post()
//     // post로 추가하면, 리렌더링 시켜서 새로운 linklistdata로 get 메서드를 실행하게끔 

// }