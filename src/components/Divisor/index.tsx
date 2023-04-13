import { Container, Divisor } from "./styles";

const DivisorComponent = ({
  width,
  justifyContent,
  color,
  removeMargin,
  removeBorder,
  height,
  backgroundColor,
}: {
  width: string;
  justifyContent?: string;
  color?: string;
  removeMargin?: boolean;
  height?: string;
  backgroundColor?: string;
  removeBorder?: boolean;
}) => {
  return (
    <Container justifyContent={justifyContent}>
      <Divisor
        width={width}
        height={height}
        color={color}
        removeMargin={removeMargin}
        backgroundColor={backgroundColor}
        removeBorder={removeBorder}
      />
    </Container>
  );
};

export default DivisorComponent;
