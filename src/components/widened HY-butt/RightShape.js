import { Arrow, Group, Line, Shape, Text } from "react-konva";

function RightShape({
  xCordinateRightShape,
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
        x={xCordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(147, 595);
          //start point
          context.lineTo(147, ySPRightShape);
          context.arcTo(147, yCPRightShape, 305, bRightShape, r);
          // context.quadraticCurveTo(552, 290, 683, 269);
          context.lineTo(439, bRightShape);
          //shekastegi
          context.lineTo(439, y1RightShape);
          context.lineTo(425, y2RightShape);
          context.lineTo(454, y3RightShape);
          context.lineTo(438, y4RightShape);
          context.lineTo(438, 420 - 17);
          context.lineTo(328, 420 - 17);
          // context.quadraticCurveTo(685, 426, 679, 447);
          context.arcTo(307, 409, 301, 430, 35);
          context.lineTo(301, 595);
          context.lineTo(230, 595);
          context.lineTo(227, 615);
          context.lineTo(219, 575);
          context.lineTo(214, 595);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[817 - 378, bRightShape, 876 - 378, bRightShape]}
      />
      <Text
        x={xCordinateRightShape + 848 - 378}
        y={330 - 17}
        text={"t1"}
        fontSize={30}
      />
      <Arrow
        x={xCordinateRightShape}
        points={[876 - 378, bRightShape + 3, 876 - 378, 417 - 17]}
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
        points={[817 - 378, 419 - 17, 876 - 378, 419 - 17]}
      />
      {/*    R */}
      <Text
        x={xCordinateRightShape + 555 - 378}
        y={yCPRightShape - 137 - 17}
        text={"R"}
        fontSize={40}
      />

      <Arrow
        x={xCordinateRightShape}
        points={[
          566 - 378,
          yCPRightShape - 107 - 17,
          566 - 378,
          ySPRightShape - 185 - 17,
        ]}
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
