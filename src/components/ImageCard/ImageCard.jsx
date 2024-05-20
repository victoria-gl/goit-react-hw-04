import css from "./ImageCard.module.css";
const ImageCard = ({ likes, photo, descr, onImageClick }) => {
  return (
    <div className={css["card-wrapper"]}>
      <img
        className={css["image"]}
        src={photo}
        alt={descr}
        onClick={onImageClick}
      />
      <div className={css["stast-wrapper"]}>
        <p className={css["stats"]}>Likes: {likes}</p>
      </div>
    </div>
  );
};
export default ImageCard;
