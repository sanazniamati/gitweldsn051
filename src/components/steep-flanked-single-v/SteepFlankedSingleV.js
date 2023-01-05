import { Stage, Layer, Line } from "react-konva";
import { useState } from "react";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import BottomShape from "./BottomShape";
export default function SteepFlankedSingleV() {
  //LeftShape
  let [bLeftShape, setBLeftShape] = useState(0);
  let [y1LeftShape, setY1LeftShape] = useState(317 - 229);
  let [y2LeftShape, setY2LeftShape] = useState(322 - 229);
  let [y3LeftShape, setY3LeftShape] = useState(332 - 229);
  let [y4LeftShape, setY4LeftShape] = useState(338 - 229);
  //RightShape
  let [bRightShape, setBRightShape] = useState(0);
  let [y1RightShape, setY1RightShape] = useState(88);
  let [y2RightShape, setY2RightShape] = useState(93);
  let [y3RightShape, setY3RightShape] = useState(103);
  let [y4RightShape, setY4RightShape] = useState(109);
  //calculate x,y for additional line
  let [yBetaSmallLine, setYBetaSmallLine] = useState(151 - 229);
  let [yBetaBigLine, setYBetaBigLine] = useState(148 - 229);
  const [grad, setGrad] = useState(15);
  let e = 193;
  const [t1, setT1] = useState(e - bRightShape);
  let initialX = t1 * Math.tan((grad * Math.PI) / 180) + 600 - 250;
  let xAdditionalLine = initialX + 65 * Math.tan((grad * Math.PI) / 180);
  let initiala = 10 * Math.cos((grad * Math.PI) / 180);
  // for calc b distance
  const [xCoordinateLeftShape, setXCoordinateLeftShape] = useState(0);
  const [xCoordinateRightShape, setXCoordinateRightShape] = useState(0);
  const [bDistance, setBDistance] = useState(596);
  const [width, setWidth] = useState(316);
  let initialXQuadratic = (xAdditionalLine + 360) / 2;
  const handelIncT2 = () => {
    setBLeftShape(bLeftShape - 10);
    setY4LeftShape(y4LeftShape - 5);
    setY3LeftShape(y3LeftShape - 5);
    setY2LeftShape(y2LeftShape - 5);
    setY1LeftShape(y1LeftShape - 5);
  };
  const handelDecT2 = () => {
    setBLeftShape(bLeftShape + 10);
    setY4LeftShape(y4LeftShape + 5);
    setY3LeftShape(y3LeftShape + 5);
    setY2LeftShape(y2LeftShape + 5);
    setY1LeftShape(y1LeftShape + 5);
  };
  const handelIncT1 = () => {
    setBRightShape(bRightShape - 10);
    setY4RightShape(y4RightShape - 5);
    setY3RightShape(y3RightShape - 5);
    setY2RightShape(y2RightShape - 5);
    setY1RightShape(y1RightShape - 5);
    setYBetaSmallLine(yBetaSmallLine - 10);
    setYBetaBigLine(yBetaBigLine - 10);
  };
  const handelDecT1 = () => {
    setBRightShape(bRightShape + 10);
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
  };

  return (
    <>
      <button onClick={handelDecT1}>t1 -</button>
      <input type={"number"} onChange={handelOnChangeT1} value={t1} />
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelIncT2}> t2 +</button>
      <button onClick={handelDecT2}> t2 -</button>
      <button onClick={handelIncBeta}> β + </button>
      <button onClick={handelDecBeta}> β - </button>
      <button onClick={handelIncB}> b + </button>
      <button onClick={handelDecB}> b - </button>
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
