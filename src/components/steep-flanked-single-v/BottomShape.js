import React from "react";
import { Arrow, Group, Line, Rect, Text } from "react-konva";
import useImage from "use-image";
import rect from "../../assets/rect.png";

function BottomShape({
  xCoordinateRightShape,
  yBetaBigLine,
  xCoordinateLeftShape,
  bDistance,
  width,
}) {
  const [image] = useImage(rect);
  return (
    <Group>
      {/*  b */}
      <Line
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[598 - 250, yBetaBigLine, 598 - 250, 554 - 229]}
      />
      <Line
        x={xCoordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[527 - 250, 423 - 229, 527 - 250, 554 - 229]}
      />
      <Arrow
        x={xCoordinateLeftShape}
        points={[530 - 250, 550 - 229, bDistance - 250, 550 - 229]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={555 - 250} y={555 - 229} text={"b"} fontSize={40} />

      <Rect
        x={xCoordinateLeftShape + 404 - 250}
        y={426 - 229}
        width={width}
        height={54}
        stroke={"blue"}
        strokeWidth={3}
        fillPatternImage={image}
      />
    </Group>
  );
}

export default BottomShape;
