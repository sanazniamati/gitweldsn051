import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function RightShape({
  xCordinateRightShape,
  bRightShape,
  initialX,

  fRightShape,
  hRightShape,
  jRightShape,
  kRightShape,
  yBetaBigLine,
  xAdditinalLine,
  yBetaSmallLine,
  initialXQuadratic,
}) {
  return (
    <Group>
      <Shape
        x={xCordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(875, bRightShape);
          context.lineTo(initialX, bRightShape);
          context.lineTo(600, 425);
          context.lineTo(875, 425);
          context.lineTo(875, fRightShape);
          context.lineTo(895, hRightShape);
          context.lineTo(855, jRightShape);
          context.lineTo(875, kRightShape);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[875, bRightShape, 973, bRightShape]}
      />
      <Arrow
        x={xCordinateRightShape}
        points={[968, bRightShape + 4, 968, 422]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[875, 426, 973, 426]}
      />
      <Text
        x={xCordinateRightShape + 936}
        y={kRightShape - 20}
        text={"t1"}
        fontSize={40}
      />
      {/*    beta */}
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(598, yBetaBigLine);
          context.quadraticCurveTo(
            initialXQuadratic,
            118,
            xAdditinalLine,
            yBetaSmallLine + 10
          );
          context.fillStrokeShape(shape);
        }}
        stroke="blue"
        strokeWidth={2}
      />
      <Arrow
        points={[586, yBetaBigLine + 5, 596, yBetaBigLine]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"red"}
        strokeWidth={3}
      />
      <Arrow
        points={[
          xAdditinalLine + 2,
          yBetaSmallLine + 10,
          xAdditinalLine + 10,
          yBetaSmallLine + 15,
        ]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtEnding={false}
        pointerAtBeginning={true}
        stroke={"red"}
        strokeWidth={3}
      />
      <Text x={623} y={103} text={"β"} fontSize={35} />
    </Group>
  );
}

export default RightShape;
