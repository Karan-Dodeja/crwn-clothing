import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div>
      <DirectoryItemContainer>
        <BackgroundImage imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>SHop Now</p>
        </Body>
      </DirectoryItemContainer>
    </div>
  );
};

export default DirectoryItem;
