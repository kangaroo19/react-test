import { memo } from "react";
// PhotoOne.js

const PhotoOne = ({ message = "", photos = [] }) => {
    return (
      <div>
        <h1>PhotoOne</h1>
        <p>{message}</p>
        <ul>
          {photos.map(photo => {
            console.log(123)
            return (
              <li key={photo.id}>
                <img src={photo.url} alt={photo.title} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default memo(PhotoOne);