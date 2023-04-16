import { incremented, useAppDispatch, useAppSelector } from "../..";
import AlbumDescription, { AlbumDescriptionProps } from "./AlbumDescription";
import AlbumImage from "./AlbumImage";
import AlbumNumber from "./AlbumNumber";

const albumStyle = {
  display: "flex",
  alignItems: "center",
  margin: "30px 20px 30px 20px",
  fontSize: "12px",
  background: "#353a45",
  padding: "10px",
};

export interface AlbumProps {
  number: number;
  coverImageUrl: string;
  description: AlbumDescriptionProps;
}

const Album = ({ number, coverImageUrl, description }: AlbumProps) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.value);

  const onButtonClick = () => {
    console.log("click");
    dispatch(incremented());
  };

  return (
    <div style={albumStyle}>
      <AlbumNumber value={number} />
      <AlbumImage imageUrl={coverImageUrl} />
      <AlbumDescription
        title={description.title}
        artist={description.artist}
        price={description.price}
      />
      <button onClick={onButtonClick}>guziczek</button>
      <span>{value}</span>
    </div>
  );
};

export default Album;
