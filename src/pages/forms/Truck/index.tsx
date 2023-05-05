import { useCallback, useState } from "react";
import { RegisterTruck } from "../../../api/Truck";
import { TruckStates } from "../../../api/utils/TruckStates";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import {
  Container,
  FormButton,
  FormFooter,
  FormHeader,
  FormInput,
  FormTitle,
  ContainerWithImage,
  FormSelector,
  FormOption,
} from "./styles";

const Truck = () => {
  const [model, setModel] = useState("");
  const [plate, setPlate] = useState("");
  const [year, setYear] = useState<number>();
  const [maxWeight, setMaxWeight] = useState<number>();
  const [truckState, setTruckState] = useState<number>(1);

  const ListOptions = () => {
    const FormOptionsGroup = [];
    const truckStatesQuantity = Object.keys(TruckStates).length / 2;

    for (let i = 1; i <= truckStatesQuantity; i++) {
      FormOptionsGroup.push(
        <FormOption value={i} key={TruckStates[i]}>
          {TruckStates[i]}
        </FormOption>
      );
    }

    return FormOptionsGroup;
  };

  const submitForm = useCallback(() => {
    console.log("values", maxWeight, model, plate, truckState, year);
    window.alert("f");

    if (!year || !maxWeight || !truckState) return;

    RegisterTruck(model, plate, year, maxWeight, truckState)
      .then((response) => {
        window.alert(response);
        console.log("foi", response);
      })
      .catch((error) => window.alert(error.message));
  }, [maxWeight, model, plate, truckState, year]);

  return (
    <Container>
      <Header />
      <ContainerWithImage>
        <Form>
          <FormHeader>
            <FormTitle>Cadastre seu caminhão</FormTitle>
          </FormHeader>

          <FormInput
            placeholder="Modelo"
            onChange={({ target }) => setModel(target.value)}
          />
          <FormInput
            placeholder="Placa"
            onChange={({ target }) => setPlate(target.value)}
          />
          <FormInput
            placeholder="Ano"
            onChange={({ target }) => setYear(parseInt(target.value))}
          />
          <FormInput
            placeholder="Peso maximo"
            onChange={({ target }) => setMaxWeight(parseFloat(target.value))}
          />

          <FormSelector
            name="status"
            id="status"
            onChange={({ target }) => setTruckState(parseInt(target.value))}
          >
            {ListOptions()}
          </FormSelector>

          <FormFooter>
            <FormButton onClick={submitForm}>Cadastrar</FormButton>
          </FormFooter>
        </Form>
      </ContainerWithImage>
    </Container>
  );
};

export default Truck;
