import { Anton } from "next/font/google";
import Image from "next/image";


const anton = Anton({ weight: "400", subsets: ["latin"] });
const MemeDisplay = ({
  background,
  textareas,
}: {
  background: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  textareas: {
    id: string;
    top: number;
    left: number;
    width: number;
    height: number;
    color: string;
    fontSize: number;
    text: string;
  }[];
}) => {
  return (
    <div className="relative">
      <Image
        src={background.src}
        width={background.width}
        height={background.height}
        alt={background.alt}
      />
      {textareas.map((textArea) => (
        <div
          key={textArea.id}
          className="absolute"
          style={{
            top: textArea.top,
            left: textArea.left,
            width: textArea.width,
            height: textArea.height,
          }}
        >
          <div
            className={`${anton.className} text-center text-${textArea.color} text-stroke-white`}
            style={{ lineHeight: "1.1", fontSize: textArea.fontSize }}
          >
            {textArea.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemeDisplay