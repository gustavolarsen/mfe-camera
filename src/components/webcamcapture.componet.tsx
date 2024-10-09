import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = useCallback(() => {
    const screenshot = webcamRef.current.getScreenshot();
    setImageSrc(screenshot);
  }, [webcamRef, setImageSrc]);

  return (
    <>
      <div>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          width={320}
          height={240}
          videoConstraints={{
            facingMode: "environment", // Para usar a câmera traseira ou desktop
          }}
        />
      </div>
      <button onClick={capture}>Capturar foto</button>
      <div>
        <img src={imageSrc} alt="Foto capturada" />
      </div>
    </>
  );
};

export default WebcamCapture;
