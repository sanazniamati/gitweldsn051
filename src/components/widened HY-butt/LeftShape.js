import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function LeftShape({
  xCordinateLeftShape,
  aLeftShape,
  x1LeftShape,
  x2LeftShape,
  x3LeftShape,
  x4LeftShape,
}) {
  return (
    <Group>
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[0, 56, 0, 0]}
      />
      <Text
        x={xCordinateLeftShape + aLeftShape - 440}
        y={11}
        text={"t2"}
        fontSize={20}
      />
      <Arrow
        x={xCordinateLeftShape}
        points={[0, 0, aLeftShape - 380, 0]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[aLeftShape - 378, 56, aLeftShape - 378, 0]}
      />

      <Shape
        x={xCordinateLeftShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(0, 56);
          //
          context.lineTo(x1LeftShape - 378, 56);
          context.lineTo(x2LeftShape - 378, 72);
          context.lineTo(x3LeftShape - 378, 37);
          context.lineTo(x4LeftShape - 378, 56);
          //
          context.lineTo(aLeftShape - 378, 56);
          context.lineTo(aLeftShape - 378, 595);
          context.lineTo(x4LeftShape - 378, 595);
          context.lineTo(x3LeftShape - 378, 579);
          context.lineTo(x2LeftShape - 378, 611);
          context.lineTo(x1LeftShape - 378, 595);
          context.lineTo(0, 595);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        // fill="lightgrey"
        stroke="red"
        strokeWidth={3}
      />
    </Group>
  );
}

export default LeftShape;
