import Gallery_form from '../gallery-form/Gallery_form';

const Gallery = ({ uploadedFiles }) => {
  return (
    <div>
      <h2>Gallery</h2>
      {uploadedFiles.length > 0 ? (
        <div>
          <h4>Uploaded files:</h4>
          <ul>
            {uploadedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No files uploaded</p>
      )}
    </div>
  );
};

export default Gallery;
