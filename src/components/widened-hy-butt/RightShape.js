import { Arrow, Group, Line, Shape, Text } from "react-konva";

function RightShape({
  xCoordinateRightShape,
  r,
  ySPRightShape,
  bRightShape,
  y1RightShape,
  y2RightShape,
  y3RightShape,
  y4RightShape,
  yCPRightShape,
}) {
  return (
    <Group>
      <Shape
        x={xCoordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(147, 539);
          //start point
          context.lineTo(147, ySPRightShape);
          context.arcTo(147, yCPRightShape, 305, bRightShape, r);
          context.lineTo(439, bRightShape);
          //shekastegi
          context.lineTo(439, y1RightShape);
          context.lineTo(425, y2RightShape);
          context.lineTo(454, y3RightShape);
          context.lineTo(438, y4RightShape);
          context.lineTo(438, 347);
          context.lineTo(328, 347);
          context.arcTo(307, 353, 301, 374, 35);
          context.lineTo(301, 539);
          context.lineTo(230, 539);
          context.lineTo(227, 559);
          context.lineTo(219, 519);
          context.lineTo(214, 539);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
      <Line
        x={xCoordinateRightShape}
        stroke={"green"}
        strokeWidth={3}
        points={[439, bRightShape, 498, bRightShape]}
      />
      <Text
        x={xCoordinateRightShape + 510}
        y={y2RightShape}
        text={"t1"}
        fontSize={30}
      />
      <Arrow
        x={xCoordinateRightShape}
        points={[498, bRightShape + 3, 498, 347 - 3]}
        pointerLength={5}
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
        points={[817 - 378, 347, 876 - 378, 347]}
      />
      {/*    R */}
      <Text
        x={xCoordinateRightShape + 555 - 378}
        y={yCPRightShape - 137}
        text={"R"}
        fontSize={30}
      />

      <Arrow
        x={xCoordinateRightShape}
        points={[188, yCPRightShape - 107, 188, ySPRightShape - 185]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
    </Group>
  );
}

export default RightShape;
