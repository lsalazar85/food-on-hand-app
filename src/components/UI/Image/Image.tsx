interface props {
  width: string;
  height: string;
  src: string;
  alt: string;
}

const Image = ({
  width, height, src, alt,
}: props) => (
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
