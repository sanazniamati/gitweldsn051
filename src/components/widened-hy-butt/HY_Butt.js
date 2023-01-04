import { Stage, Layer } from "react-konva";
import { useState } from "react";
import LeftShape from "./LeftShape";
import BottomShape from "./BottomShape";
import RightShape from "./RightShape";

export default function HY_Butt() {
  //Right shape
  const [bRightShape, setBRightShape] = useState(196);
  const [t1, setT1] = useState(347 - bRightShape);
  const [y1RightShape, setY1RightShape] = useState(261);
  const [y2RightShape, setY2RightShape] = useState(265);
  const [y3RightShape, setY3RightShape] = useState(273);
  const [y4RightShape, setY4RightShape] = useState(276);
  const [r, setR] = useState(150);
  const [ySPRightShape, setYSPRightShape] = useState(410);
  const [yCPRightShape, setYCPRightShape] = useState(207);
  //left shape
  const [aLeftShape, setALeftShape] = useState(114);
  const [x1LeftShape, setX1LeftShape] = useState(52);
  const [x2LeftShape, setX2LeftShape] = useState(55);
  const [x3LeftShape, setX3LeftShape] = useState(61);
  const [x4LeftShape, setX4LeftShape] = useState(64);
  //bottomShape
  const [xCoordinateLeftShape, setXCoordinateLeftShape] = useState(0);
  const [xCoordinateRightShape, setXCoordinateRightShape] = useState(0);
  const [bDistance, setBDistance] = useState(144);

  const handelIncB = () => {
    setBDistance(bDistance + 10);
    setXCoordinateLeftShape(xCoordinateLeftShape - 5);
    setXCoordinateRightShape(xCoordinateRightShape + 5);
  };
  const handelDecB = () => {
    setBDistance(bDistance - 10);
    setXCoordinateLeftShape(xCoordinateLeftShape + 5);
    setXCoordinateRightShape(xCoordinateRightShape - 5);
  };
  const handelIncR = () => {
    setR(r + 5);

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
    console.log("t1:" + e.target.value);
    setBRightShape(347 - e.target.value);
    console.log("BRightShape =" + (347 - e.target.value));
    if (t1 > 151) {
      setY1RightShape(y1RightShape - (193 - (347 - e.target.value)) / 2);
      console.log(
        "Y1RightShape =" + (y1RightShape - (193 - (347 - e.target.value)) / 2)
      );
      setY2RightShape(y2RightShape - (193 - (347 - e.target.value)) / 2);
      setY3RightShape(y3RightShape - (193 - (347 - e.target.value)) / 2);
      setY4RightShape(y4RightShape - (193 - (347 - e.target.value)) / 2);
    }
  };
  return (
    <>
      <button onClick={handelIncB}>b +</button>
      <button onClick={handelDecB}> b - </button>
      <button onClick={handelIncR}>R + </button>
      <button onClick={handelDecR}> R - </button>
      <button onClick={handelDecT1}>t1 -</button>
      <input type={"number"} onChange={handelOnChangeT1} value={t1} />
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelIncT2}> t2 +</button>
      <button onClick={handelDecT2}> t2 -</button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        draggable={true}
        style={{ background: "lightgray" }}
      >
        <Layer>
          <LeftShape
            xCoordinateLeftShape={xCoordinateLeftShape}
            aLeftShape={aLeftShape}
            x1LeftShape={x1LeftShape}
            x2LeftShape={x2LeftShape}
            x3LeftShape={x3LeftShape}
            x4LeftShape={x4LeftShape}
          />
          <BottomShape
            xCoordinateRightShape={xCoordinateRightShape}
            xCoordinateLeftShape={xCoordinateLeftShape}
            bDistance={bDistance}
            aLeftShape={aLeftShape}
          />
          <RightShape
            xCoordinateRightShape={xCoordinateRightShape}
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
