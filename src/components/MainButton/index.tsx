import { Button } from "./styles";

const MainButton = ({
  children,
  width,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <Button disabled={disabled} onClick={onClick} width={width}>
      {children}
    </Button>
  );
};

export default MainButton;
