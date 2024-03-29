import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function LeftShape({
  xCoordinateLeftShape,
  aLeftShape,
  x1LeftShape,
  x2LeftShape,
  x3LeftShape,
  x4LeftShape,
}) {
  return (
    <Group>
      <Line
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[0, -56, 0, 0]}
      />
      <Text
        x={xCoordinateLeftShape + x1LeftShape}
        y={-90}
        text={"t2"}
        fontSize={30}
      />
      <Arrow
        x={xCoordinateLeftShape}
        points={[0 + 3, -56, aLeftShape - 3, -56]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[aLeftShape, -56, aLeftShape, 0]}
      />

      <Shape
        x={xCoordinateLeftShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(0, 0);
          context.lineTo(x1LeftShape, 0);
          context.lineTo(x2LeftShape, 16);
          context.lineTo(x3LeftShape, -19);
          context.lineTo(x4LeftShape, 0);
          context.lineTo(aLeftShape, 0);
          context.lineTo(aLeftShape, 539);
          context.lineTo(x4LeftShape, 539);
          context.lineTo(x3LeftShape, 523);
          context.lineTo(x2LeftShape, 555);
          context.lineTo(x1LeftShape, 539);
          context.lineTo(0, 539);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
    </Group>
  );
}

export default LeftShape;
