import { FC, PropsWithChildren } from "react";
import { FormCard } from "./styles";

const Form = ({ children }: PropsWithChildren) => (
  <FormCard>{children}</FormCard>
);

export default Form;
