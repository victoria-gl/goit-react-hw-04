import css from "./ImageCard.module.css";

const ImageCard = ({ picture, onClick }) => {
  return (
    <div className={css.thumb}>
      <img
        className={css.image}
        src={picture.urls.small}
        alt={picture.description}
        id={picture.id}
        onClick={() => onClick(picture.id)}
      />
    </div>
  );
};

export default ImageCard;
