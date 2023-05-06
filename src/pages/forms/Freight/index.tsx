import { useCallback, useState } from "react";
import { RegisterCargo } from "../../../api/Cargo";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import { ListEnum } from "../../../utils/enuns/Methods";
import { FreightTypes } from "../../../utils/enuns/States";
import {
  Container,
  FormButton,
  FormFooter,
  FormHeader,
  FormInput,
  FormTitle,
  ContainerWithImage,
  FormSelector,
} from "./styles";

const Freight = () => {
  const [freightName, setFreightName] = useState("");
  const [freightHeight, setFreightHeight] = useState<number>();
  const [freightBreadth, setFreightBreadth] = useState<number>();
  const [freightLength, setFreightLength] = useState<number>();
  const [freightWeight, setFreightWeight] = useState<number>();
  const [freightType, setFreightType] = useState<FreightTypes>(1);

  const handleOptions = useCallback(
    (name: string, index: number) => (
      <option value={index} key={name}>
        {name}
      </option>
    ),
    []
  );

  const submitForm = useCallback(() => {
    if (
      !freightName ||
      !freightHeight ||
      !freightBreadth ||
      !freightLength ||
      !freightWeight ||
      !freightType
    )
      return;

    RegisterCargo(
      freightName,
      freightHeight,
      freightBreadth,
      freightLength,
      freightWeight,
      freightType
    )
      .then((response) => {
        window.alert(response);
        console.log("foi", response);
      })
      .catch((error) => window.alert(error.message));
  }, [
    freightBreadth,
    freightHeight,
    freightLength,
    freightName,
    freightType,
    freightWeight,
  ]);

  return (
    <Container>
      <Header />

      <ContainerWithImage>
        <Form>
          <FormHeader>
            <FormTitle>Cadastre sua carga</FormTitle>
          </FormHeader>

          <FormInput
            placeholder="Nome"
            onChange={({ target }) => setFreightName(target.value)}
          />
          <FormInput
            placeholder="Altura"
            onChange={({ target }) =>
              setFreightHeight(parseFloat(target.value))
            }
          />
          <FormInput
            placeholder="Largura"
            onChange={({ target }) =>
              setFreightBreadth(parseFloat(target.value))
            }
          />
          <FormInput
            placeholder="Comprimento"
            onChange={({ target }) =>
              setFreightLength(parseFloat(target.value))
            }
          />
          <FormInput
            placeholder="Peso"
            onChange={({ target }) =>
              setFreightWeight(parseFloat(target.value))
            }
          />
          <FormSelector
            onChange={({ target }) => setFreightType(parseInt(target.value))}
          >
            {ListEnum(FreightTypes, handleOptions)}
          </FormSelector>

          <FormFooter>
            <FormButton onClick={submitForm}>Cadastrar</FormButton>
          </FormFooter>
        </Form>
      </ContainerWithImage>
    </Container>
  );
};

export default Freight;
