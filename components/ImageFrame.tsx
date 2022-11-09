import type { Image } from "../islands/Playground.tsx";

interface ImageFrameProps {
  image: Image;
}

export function ImageFrame(props: ImageFrameProps) {
  return (
    <div>
      <img src={props.image.src} />
      <div>{props.image.dhash}</div>
    </div>
  );
}
