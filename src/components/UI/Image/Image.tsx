import { ImageProps } from '../../../interfaces';

const Image = ({ width, height, src, alt }: ImageProps) => (
  <div
    style={{
      width: `${width}`,
      height: `${height}`,
    }}
    className="imageContainer"
  >
    <img src={src} alt={alt} />
  </div>
);

export default Image;
