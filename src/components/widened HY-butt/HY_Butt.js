import { Stage, Layer, Group, Image, Text } from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";
import LeftShape from "./LeftShape";
import BottomShape from "./bottomShape";
import RightShape from "./RightShape";

export default function HY_Butt() {
  // const url = "img.gif";
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };
  //Right shape

  const [bRightShape, setBRightShape] = useState(252);
  const [t1, setT1] = useState(403 - bRightShape);
  const [y1RightShape, setY1RightShape] = useState(317);
  const [y2RightShape, setY2RightShape] = useState(321);
  const [y3RightShape, setY3RightShape] = useState(329);
  const [y4RightShape, setY4RightShape] = useState(332);
  const [r, setR] = useState(150);
  const [ySPRightShape, setYSPRightShape] = useState(466);
  const [yCPRightShape, setYCPRightShape] = useState(263);
  //left shape
  const [aLeftShape, setALeftShape] = useState(492);
  const [x1LeftShape, setX1LeftShape] = useState(430);
  const [x2LeftShape, setX2LeftShape] = useState(433);
  const [x3LeftShape, setX3LeftShape] = useState(439);
  const [x4LeftShape, setX4LeftShape] = useState(442);

  //bottomShape
  const [xCordinateLeftShape, setXCordinateLeftShape] = useState(0);
  const [xCordinateRightShape, setXCordinateRightShape] = useState(0);
  const [bPlas, setBPlas] = useState(522);

  const handelIncB = () => {
    setBPlas(bPlas + 10);
    setXCordinateLeftShape(xCordinateLeftShape - 5);
    setXCordinateRightShape(xCordinateRightShape + 5);
  };
  const handelDecB = () => {
    setBPlas(bPlas - 10);
    setXCordinateLeftShape(xCordinateLeftShape + 5);
    setXCordinateRightShape(xCordinateRightShape - 5);
  };
  const handelIncR = () => {
    setR(r + 5);
    console.log("r" + r);
    setYSPRightShape(ySPRightShape + 5);
  };
  const handelDecR = () => {
    setR(r - 5);
    setYSPRightShape(ySPRightShape - 5);
  };
  const handelIncT1 = () => {
    setBRightShape(bRightShape - 10);
    setY1RightShape(y1RightShape - 5);
    setY2RightShape(y2RightShape - 5);
    setY3RightShape(y3RightShape - 5);
    setY4RightShape(y4RightShape - 5);
    setYCPRightShape(yCPRightShape - 10);
    setYSPRightShape(ySPRightShape - 10);
  };
  const handelDecT1 = () => {
    setBRightShape(bRightShape + 10);
    setY1RightShape(y1RightShape + 5);
    setY2RightShape(y2RightShape + 5);
    setY3RightShape(y3RightShape + 5);
    setY4RightShape(y4RightShape + 5);
    setYCPRightShape(yCPRightShape + 10);
    setYSPRightShape(ySPRightShape + 10);
  };
  const handelIncT2 = () => {
    setALeftShape(aLeftShape + 10);
    setX1LeftShape(x1LeftShape + 5);
    setX2LeftShape(x2LeftShape + 5);
    setX3LeftShape(x3LeftShape + 5);
    setX4LeftShape(x4LeftShape + 5);
  };
  const handelDecT2 = () => {
    setALeftShape(aLeftShape - 10);
    setX1LeftShape(x1LeftShape - 5);
    setX2LeftShape(x2LeftShape - 5);
    setX3LeftShape(x3LeftShape - 5);
    setX4LeftShape(x4LeftShape - 5);
  };
  const handelOnChangeT1 = (e) => {
    setT1(e.target.value);
    console.log(e.target.value);
    setBRightShape(403 - e.target.value);
    console.log("BRightShape =" + (403 - e.target.value));
    if (t1 > 151) {
      setY1RightShape(y1RightShape - (252 - (403 - e.target.value)) / 2);
      console.log(
        "Y1RightShape =" + (y1RightShape - (252 - (403 - e.target.value)) / 2)
      );
      setY2RightShape(y2RightShape - (252 - (403 - e.target.value)) / 2);
      setY3RightShape(y3RightShape - (252 - (403 - e.target.value)) / 2);
      setY4RightShape(y4RightShape - (252 - (403 - e.target.value)) / 2);
    }
    // else {
    //   setY1RightShape(y1RightShape + (151 - e.target.value) / 2);
    //   setY2RightShape(y2RightShape + (151 - e.target.value) / 2);
    //   setY3RightShape(y3RightShape + (151 - e.target.value) / 2);
    //   setY4RightShape(y4RightShape + (151 - e.target.value) / 2);
    // }
  };
  return (
    <>
      <label> t1: </label>
      <input type={"number"} onChange={handelOnChangeT1} value={t1} />
      <button onClick={handelIncB}>b +</button>
      <button onClick={handelDecB}> b - </button>
      <button onClick={handelIncR}>R + </button>
      <button onClick={handelDecR}> R - </button>
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelDecT1}>t1 -</button>
      <button onClick={handelIncT2}> t2 +</button>
      <button onClick={handelDecT2}> t2 -</button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handleMouseMove}
        onMouseOut={handelMouseOut}
        draggable={true}
        style={{ background: "lightgray" }}
      >
        <Layer>
          <Group>
            {/*<Image x={100} y={10} image={image} />*/}
            <Text text={text} x={10} y={50} fontSize={20} />
          </Group>
          <LeftShape
            xCordinateLeftShape={xCordinateLeftShape}
            aLeftShape={aLeftShape}
            x1LeftShape={x1LeftShape}
            x2LeftShape={x2LeftShape}
            x3LeftShape={x3LeftShape}
            x4LeftShape={x4LeftShape}
          />
          <BottomShape
            xCordinateRightShape={xCordinateRightShape}
            xCordinateLeftShape={xCordinateLeftShape}
            bPlas={bPlas}
            aLeftShape={aLeftShape}
          />
          <RightShape
            xCordinateRightShape={xCordinateRightShape}
            r={r}
            yCPRightShape={yCPRightShape}
            ySPRightShape={ySPRightShape}
            bRightShape={bRightShape}
            y1RightShape={y1RightShape}
            y2RightShape={y2RightShape}
            y3RightShape={y3RightShape}
            y4RightShape={y4RightShape}
          />
        </Layer>
      </Stage>
    </>
  );
}
