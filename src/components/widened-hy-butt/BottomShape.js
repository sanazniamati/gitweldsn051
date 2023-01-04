import React from "react";
import { Arrow, Group, Line, Text } from "react-konva";

function BottomShape({
  xCoordinateLeftShape,
  xCoordinateRightShape,
  bDistance,
  aLeftShape,
}) {
  return (
    <Group>
      <Line
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={3}
        points={[aLeftShape, 539, aLeftShape, 606]}
      />
      <Text x={122} y={626} text={"b"} fontSize={30} />

      <Arrow
        x={xCoordinateLeftShape}
        points={[aLeftShape + 3, 606, bDistance, 606]}
        pointerLength={3}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[147, 539, 147, 606]}
      />
    </Group>
  );
}

export default BottomShape;
