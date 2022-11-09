import { useState } from "preact/hooks";
import { ImageFrame } from "../components/ImageFrame.tsx";

export type Image = {
  src: string;
  dhash: string;
};

interface PlaygroundProps {}

export default function Playground(props: PlaygroundProps) {
  const [images, setImages] = useState<Image[]>([]);

  const handleUpload = (ev: Event) => {
    const { target } = ev;
    if (!target) {
      return;
    }
    const file = (target as any).files[0];

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async () => {
      if (!reader.result) {
        return;
      }

      const blob = new Blob([reader.result]);

      const fd = new FormData();
      fd.append("image", blob, file.name);

      const res = await fetch("/api/dhash", {
        method: "POST",
        body: fd,
      });
      const body = await res.json();

      const dhash = body && res.ok && body.hash;
      const url = URL.createObjectURL(blob);

      setImages([...images, { src: url, dhash }]);
    };
  };

  return (
    <div>
      <div>
        <input className="fileInput" type="file" onChange={handleUpload} />
      </div>
      <div class="mt-6">
        {images.map((img) => (
          <ImageFrame image={img} />
        ))}
      </div>
    </div>
  );
}
