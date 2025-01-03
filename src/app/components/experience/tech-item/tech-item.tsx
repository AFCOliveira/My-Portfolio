import Image from "next/image";
import "./tech-item.scss";
interface Props {
  name: string;
  imageUrl: string;
}
export const TechItem = ({ name, imageUrl }: Props) => {
  return (
    <div className="tech-item">
      <div className="item">
        <Image
          className="img"
          width={24}
          height={24}
          alt={`${name}-icon`}
          src={imageUrl}
        />
        <p className="text-dark-blue text-md mr-2">{name}</p>
      </div>
    </div>
  );
};