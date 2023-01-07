import { Stage, Layer, Line } from "react-konva";
import { useState } from "react";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import BottomShape from "./BottomShape";
import { type } from "@testing-library/user-event/dist/type";
export default function SteepFlankedSingleV() {
  let f = 196;
  const [grad, setGrad] = useState(15);
  //LeftShape
  let [bLeftShape, setBLeftShape] = useState(0);
  let [y1LeftShape, setY1LeftShape] = useState(88);
  let [y2LeftShape, setY2LeftShape] = useState(93);
  let [y3LeftShape, setY3LeftShape] = useState(103);
  let [y4LeftShape, setY4LeftShape] = useState(109);
  const [t2, setT2] = useState(f - bLeftShape);
  let initialXLeftShape = 277 - t2 * Math.tan((grad * Math.PI) / 180);
  //RightShape
  let [bRightShape, setBRightShape] = useState(0);
  let [y1RightShape, setY1RightShape] = useState(88);
  let [y2RightShape, setY2RightShape] = useState(93);
  let [y3RightShape, setY3RightShape] = useState(103);
  let [y4RightShape, setY4RightShape] = useState(109);
  //calculate x,y for additional line
  let [yBetaSmallLine, setYBetaSmallLine] = useState(-78);
  let [yBetaBigLine, setYBetaBigLine] = useState(-81);
  const [t1, setT1] = useState(f - bRightShape);
  let initialX = t1 * Math.tan((grad * Math.PI) / 180) + 350;
  let xAdditionalLine = initialX + 65 * Math.tan((grad * Math.PI) / 180);
  let initiala = 10 * Math.cos((grad * Math.PI) / 180);
  // for calc b distance
  const [xCoordinateLeftShape, setXCoordinateLeftShape] = useState(0);
  const [xCoordinateRightShape, setXCoordinateRightShape] = useState(0);
  const [bDistance, setBDistance] = useState(346);
  const [width, setWidth] = useState(316);
  let initialXQuadratic = (xAdditionalLine + 360) / 2;
  const handelIncT2 = () => {
    setT2(f - bLeftShape);
    console.log("T2: " + t2);
    setBLeftShape(bLeftShape - 10);
    setY4LeftShape(y4LeftShape - 5);
    setY3LeftShape(y3LeftShape - 5);
    setY2LeftShape(y2LeftShape - 5);
    setY1LeftShape(y1LeftShape - 5);
  };
  const handelDecT2 = () => {
    setT2(f - bLeftShape);
    console.log("T2: " + t2);
    setBLeftShape(bLeftShape + 10);
    setY4LeftShape(y4LeftShape + 5);
    setY3LeftShape(y3LeftShape + 5);
    setY2LeftShape(y2LeftShape + 5);
    setY1LeftShape(y1LeftShape + 5);
  };
  const handelIncT1 = () => {
    setBRightShape(bRightShape - 10);
    setT1(f - bRightShape);
    setY4RightShape(y4RightShape - 5);
    setY3RightShape(y3RightShape - 5);
    setY2RightShape(y2RightShape - 5);
    setY1RightShape(y1RightShape - 5);
    setYBetaSmallLine(yBetaSmallLine - 10);
    setYBetaBigLine(yBetaBigLine - 10);
  };
  const handelDecT1 = () => {
    setBRightShape(bRightShape + 10);
    setT1(f - bRightShape);
    setY4RightShape(y4RightShape + 5);
    setY3RightShape(y3RightShape + 5);
    setY2RightShape(y2RightShape + 5);
    setY1RightShape(y1RightShape + 5);
    setYBetaSmallLine(yBetaSmallLine + 10);
    setYBetaBigLine(yBetaBigLine + 10);
  };
  const handelIncBeta = () => {
    setGrad(grad + 5);
  };
  const handelDecBeta = () => {
    setGrad(grad - 5);
  };
  const handelIncB = () => {
    setBDistance(bDistance + 10);
    setWidth(width + 10);
    setXCoordinateLeftShape(xCoordinateLeftShape - 5);
    setXCoordinateRightShape(xCoordinateRightShape + 5);
  };
  const handelDecB = () => {
    setBDistance(bDistance - 10);
    setWidth(width - 10);
    console.log(bDistance);
    setXCoordinateLeftShape(xCoordinateLeftShape + 5);
    setXCoordinateRightShape(xCoordinateRightShape - 5);
  };
  const handelOnChangeT1 = (e) => {
    setT1(e.target.value);
    if (e.target.value >= f) {
      setBRightShape(bRightShape - (e.target.value - f));
      setY1RightShape(y1RightShape - (e.target.value - f) / 2);
      setY2RightShape(y2RightShape - (e.target.value - f) / 2);
      setY3RightShape(y3RightShape - (e.target.value - f) / 2);
      setY4RightShape(y4RightShape - (e.target.value - f) / 2);
      setYBetaBigLine(yBetaBigLine - (e.target.value - f));
      setYBetaSmallLine(yBetaBigLine - (e.target.value - f));
    } else {
      setBRightShape(bRightShape + (f - e.target.value));
      setY1RightShape(y1RightShape + (f - e.target.value) / 2);
      setY2RightShape(y2RightShape + (f - e.target.value) / 2);
      setY3RightShape(y3RightShape + (f - e.target.value) / 2);
      setY4RightShape(y4RightShape + (f - e.target.value) / 2);
      setYBetaBigLine(yBetaBigLine + (f - e.target.value));
      setYBetaSmallLine(yBetaBigLine + (f - e.target.value));
    }
  };
  const handelOnChangeT2 = (e) => {
    setT2(e.target.value);
    if (e.target.value >= f) {
      setBLeftShape(bLeftShape - (e.target.value - f));
      console.log("t2: " + t2);
      console.log("bLeftShape: " + bLeftShape);
      setY1LeftShape(y1LeftShape - (e.target.value - f) / 2);
      console.log("y1LeftShape: " + y1LeftShape);
      setY2LeftShape(y2LeftShape - (e.target.value - f) / 2);
      console.log("y2LeftShape: " + y2LeftShape);
      setY3LeftShape(y3LeftShape - (e.target.value - f) / 2);
      console.log("y3LeftShape: " + y3LeftShape);
      setY4LeftShape(y4LeftShape - (e.target.value - f) / 2);
      console.log("y4LeftShape: " + y4LeftShape);
    } else {
      setBLeftShape(bLeftShape + (f - e.target.value));
      setY1LeftShape(y1LeftShape + (f - e.target.value) / 2);
      setY2LeftShape(y2LeftShape + (f - e.target.value) / 2);
      setY3LeftShape(y3LeftShape + (f - e.target.value) / 2);
      setY4LeftShape(y4LeftShape + (f - e.target.value) / 2);
    }
  };
  const handelOnChangeBeta = (e) => {
    setGrad(e.target.value);
  };

  const initialBDistance = 346;
  const handelOnChangeBDistance = (e) => {
    setBDistance(() => Number(e.target.value));
    if (e.target.value > initialBDistance) {
      console.log("bDistance: " + bDistance);
      setWidth(width + (e.target.value - initialBDistance));
      console.log("Width:" + width);
      setXCoordinateRightShape(
        xCoordinateRightShape + (e.target.value - initialBDistance) / 2
      );
      setXCoordinateLeftShape(
        xCoordinateLeftShape - (e.target.value - initialBDistance) / 2
      );
    } else {
      setWidth(width - (initialBDistance - e.target.value));
      setXCoordinateRightShape(
        xCoordinateRightShape - (initialBDistance - e.target.value) / 2
      );
      setXCoordinateLeftShape(
        xCoordinateLeftShape + (initialBDistance - e.target.value) / 2
      );
    }
  };

  return (
    <>
      <button onClick={handelDecT2}> t2 -</button>
      <input type={"number"} onChange={handelOnChangeT2} value={t2} />
      <button onClick={handelIncT2}> t2 +</button>
      <button onClick={handelDecBeta}> β - </button>
      <input type={"number"} onChange={handelOnChangeBeta} value={grad} />
      <button onClick={handelIncBeta}> β + </button>
      <button onClick={handelDecT1}>t1 -</button>
      <input type={"number"} onChange={handelOnChangeT1} value={t1} />
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelDecB}> b - </button>
      <input
        type={"number"}
        onChange={handelOnChangeBDistance}
        value={bDistance}
      />
      <button onClick={handelIncB}> b + </button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ background: "lightgray" }}
        draggable={true}
      >
        <Layer>
          <LeftShape
            xCoordinateLeftShape={xCoordinateLeftShape}
            bLeftShape={bLeftShape}
            y4LeftShape={y4LeftShape}
            y3LeftShape={y3LeftShape}
            y2LeftShape={y2LeftShape}
            y1LeftShape={y1LeftShape}
            initialXLeftShape={initialXLeftShape}
          />
          <RightShape
            xCoordinateRightShape={xCoordinateRightShape}
            bRightShape={bRightShape}
            initialX={initialX}
            y4RightShape={y4RightShape}
            y3RightShape={y3RightShape}
            y2RightShape={y2RightShape}
            y1RightShape={y1RightShape}
            yBetaBigLine={yBetaBigLine}
            xAdditionalLine={xAdditionalLine}
            initialXQuadratic={initialXQuadratic}
            yBetaSmallLine={yBetaSmallLine}
          />
          <BottomShape
            xCoordinateRightShape={xCoordinateRightShape}
            yBetaBigLine={yBetaBigLine}
            xCoordinateLeftShape={xCoordinateLeftShape}
            bDistance={bDistance}
            width={width}
          />
          {/*additinal line*/}
          <Line
            x={xCoordinateRightShape}
            stroke={"green"}
            strokeWidth={2}
            points={[
              initialX,
              bRightShape,
              xAdditionalLine,
              yBetaSmallLine + initiala,
            ]}
          />
        </Layer>
      </Stage>
    </>
  );
}
