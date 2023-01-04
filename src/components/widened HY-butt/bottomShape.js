import React from "react";
import { Arrow, Group, Line, Text } from "react-konva";

function BottomShape({
  xCordinateLeftShape,
  xCordinateRightShape,
  bPlas,
  aLeftShape,
}) {
  return (
    <Group>
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[aLeftShape - 378, 612 - 17, aLeftShape - 378, 679 - 17]}
      />
      <Text x={500 - 378} y={643 - 17} text={"b"} fontSize={30} />

      <Arrow
        x={xCordinateLeftShape}
        points={[aLeftShape - 2 - 378, 679 - 17, bPlas - 378, 679 - 17]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[524 - 378, 612 - 17, 524 - 378, 679 - 17]}
      />
    </Group>
  );
}

export default BottomShape;
