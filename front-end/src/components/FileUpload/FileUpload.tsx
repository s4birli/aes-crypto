import React, { FC, useRef, useState } from "react";
import { uploadFile } from "../../context/index";
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
  InputLabel,
} from "./FileUpload.styles";
import { FileUploadProps } from "./FileUpload.types";

const FileUpload: FC<FileUploadProps> = () => {
  const fileInputField: any = useRef(null);
  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const handleNewFileUpload = (e: any) => {
    const file = e.target.files[0];
    uploadFile(file).then((result: any) => {
      if (result) {
        console.log(result);
      }
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUploadContainer>
          <InputLabel>{process.env.REACT_APP_NAME}</InputLabel>
          <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
            <i className="fas fa-file-upload" />
            <span> Upload a file</span>
          </UploadFileBtn>
          <FormField
            type="file"
            ref={fileInputField}
            onChange={handleNewFileUpload}
            title=""
            value=""
          />
        </FileUploadContainer>
      </form>
    </div>
  );
};

export default FileUpload;
