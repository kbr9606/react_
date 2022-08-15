// import '../App.css';
import ImagePreview from './ImagePreview';
import style from './ImageUpload.module.css'
import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react';


function ImageUpload() {


    const [uploadedImages, setUploadedImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const uploadBoxRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        const uploadBox = uploadBoxRef.current;
        const input = inputRef.current;
        
        const handleFiles = (files) => {
          for (const file of files) {
            if (!file.type.startsWith("image/")) continue;
            const reader = new FileReader();
            reader.onloadend = (e) => {
              const result = e.target.result;
              if (result) {
                setUploadedImages((state) => [...state, result]);
              }
            };
            reader.readAsDataURL(file);
          }
        };
        
        const changeHandler = (event) => {
          const files = event.target.files;
          handleFiles(files);
        };
        
        const dropHandler = (event) => {
          event.preventDefault();
          event.stopPropagation();
          const files = event.dataTransfer.files;
          handleFiles(files);
        };
        
        const dragOverHandler = (event) => {
          event.preventDefault();
          event.stopPropagation();
        };
        
        uploadBox.addEventListener("drop", dropHandler);
        uploadBox.addEventListener("dragover", dragOverHandler);
        input.addEventListener("change", changeHandler);
        
        return () => {
          uploadBox.removeEventListener("drop", dropHandler);
          uploadBox.removeEventListener("dragover", dragOverHandler);
          input.removeEventListener("change", changeHandler);
        };
    });
      
    useEffect(() => {
        const imageJSXs = uploadedImages.map((image, index) => {
          const isDeleteImage = (element) => {
            return element === image;
          };
          const deleteFunc = () => {
            uploadedImages.splice(uploadedImages.findIndex(isDeleteImage), 1);
            setUploadedImages([...uploadedImages]);
            onDeleteImg();
          };
          const bookmarkFunc = () => {
            onBookmarkImg();
          };
          return <ImagePreview image={image} bookmarkFunc={bookmarkFunc} deleteFunc={deleteFunc} key={index} />;
        });
        setPreviewImages(imageJSXs);
    }, [uploadedImages]);

    

    useEffect(() => {
      axios.get("http://3.37.214.20:8080/folder/:folderId/images")
      .then((response) => {
          console.log('123', response)
      })
      .catch((err) => console.log('오류남', err))
},[]);

    


    const onChangeImg = async (e) => {
      e.preventDefault();
      
      if(e.target.files){
        const uploadFile = e.target.files[0]
        const formData = new FormData()
        formData.append('files',uploadFile)
        
        await axios({
          method: 'post',
          url: 'http://3.37.214.20:8080/folder/image',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
    }

    const onDeleteImg = async (e) => {

      // axios.patch("http://3.37.214.20:8080/folder/image/trash/:imageId/:memberId")
      // .then((response) => {
      //     console.log('123', response)
      // })
      // .catch((err) => console.log('오류남', err))

      e.preventDefault();
      
      if(e.target.files){
        const uploadFile = e.target.files[0]
        const formData = new FormData()
        formData.append('files',uploadFile)
        
        await axios({
          method: 'patch',
          url: 'http://3.37.214.20:8080/folder/image/trash/:imageId/:memberId',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
    }

    const onBookmarkImg = async (e) => {

      // axios.post("http://3.37.214.20:8080/folder/image/bookmark/:fileId/:memberId")
      // .then((response) => {
      //     console.log('123', response)
      // })
      // .catch((err) => console.log('오류남', err))
      
      e.preventDefault();
      
      if(e.target.files){
        const uploadFile = e.target.files[0]
        const formData = new FormData()
        formData.append('files',uploadFile)
        
        await axios({
          method: 'post',
          url: 'http://3.37.214.20:8080/folder/image/bookmark/:fileId/:memberId',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
    }
   


  return (
    <div id={style.contents}>
        <div id={style.contents_wrap}>
          <div className = {style.container}>
              <form method="post">
                  <label className={style.label} ref={uploadBoxRef} htmlFor="ImgInput">
                      <div className={style.inner}>드래그 또는 클릭하여 업로드</div> 
                  </label>
                  <input id='ImgInput' className = {style.ImgInput} ref={inputRef} multiple accept="image/*" type="file" name="chooseFile" onChange={onChangeImg} />
                  <div className={style.preview_container}>{previewImages}</div>
              </form>
          </div>
        </div>
      </div>
  );
}

export default ImageUpload;
