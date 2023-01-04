import { Arrow, Group, Line, Shape, Text } from "react-konva";

function LeftShape({ xCordinateLeftShape, b, f, h, j, k }) {
  return (
    <Group>
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[154, b, 248, b]}
      />
      <Arrow
        x={xCordinateLeftShape}
        points={[155, b + 3, 155, 424]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[154, 426, 248, 426]}
      />
      <Text
        x={xCordinateLeftShape + 168}
        y={k - 20}
        text={"t2"}
        fontSize={40}
      />

      <Shape
        x={xCordinateLeftShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(250, b);
          context.lineTo(412, b);
          context.lineTo(527, 425);
          context.lineTo(250, 425);
          context.lineTo(250, f);
          context.lineTo(269, h);
          context.lineTo(232, j);
          context.lineTo(250, k);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
    </Group>
  );
}

export default LeftShape;
