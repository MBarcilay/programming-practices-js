import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Gallery_form.css';

const Gallery_form = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  return (
    <div id="gallery_form-div">
      <form id="gallery-form" action="">
        <legend>You can upload your photos here</legend>
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        {files.length > 0 && (
          <div>
            <h4>Uploaded files:</h4>
            <ul>
              {files.map((file) => (
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default Gallery_form;
