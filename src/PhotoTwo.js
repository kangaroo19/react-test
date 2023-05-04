import { memo } from "react";


const Message = memo(({ message }) => {
    console.log('Message')
    return <p>{message}</p>;
  });
  
  const ListItem = memo(({ photo }) => {
    console.log('ListItem')
    return (
      <li key={photo.id}>
        <img src={photo.url} alt={photo.title} />
      </li>
    );
  });
  
  const List = memo(({ photos }) => {
    console.log('List')
    return (
      <ul>
        {photos.map(photo => (
          <ListItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  });
  //input태그에 어떤 값 입력시 리랜더링되는데
  //phototwo 같은 경우 message만 리랜더링되면 좋은데
  //자식 컴포넌트(list,listitem)까지 리랜더링되서 
  //photoOne(114ms)의 리랜더링 속도보다 photoTwo(160ms)의 리랜더링 속도 느림

  //memo함수 사용하여 list,listitem의 불필요한 리랜더링 방지
  //photoOne(119ms),photoTwo(0.4ms)
  const PhotoTwo = ({ message = "", photos = [] }) => {
    return (
      <div>
        <h1>PhotoTwo</h1>
        <Message message={message} />
        <List photos={photos} />
      </div>
    );
  };
  
  export default memo(PhotoTwo);