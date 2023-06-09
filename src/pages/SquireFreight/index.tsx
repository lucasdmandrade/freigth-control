import Logo from "../../assets/icons/Logo";
import Check from "../../assets/icons/Check";
import CheckedCircle from "../../assets/icons/CheckedCircle";
import { Divisor } from "../../components/Divisor/styles";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Header";
import {
  Container,
  FreightContainer,
  FreightHalt,
  FreightHaltDescription,
  FreightHaltStops,
  FreightSearchContainer,
  SearchInput,
} from "./styles";
import { useCallback, useEffect, useState } from "react";
import MainButton from "../../components/MainButton";
import { fetchCargo } from "../../api/Cargo";
import { CargoInfo } from "../../api/Cargo/types";
import { toast, ToastContainer } from "react-toastify";
import { errorToast, successToast } from "../../utils/toastConfigs";

const SquireFreight = () => {
  const [freightId, setFreightId] = useState<number>();
  const [freightData, setFreightData] = useState<CargoInfo>();

  const fetch = useCallback(() => {
    if (!freightId) return;

    fetchCargo(freightId)
      .then(({ data }) => {
        console.log("response", data);
        setFreightData(data.info);
      })
      .catch(({ response }) => toast(response.data.message, errorToast));
  }, [freightId]);

  useEffect(() => {
    console.log("freightId: ", freightId);
  }, [freightId]);

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Header />
      <FreightSearchContainer>
        <SearchInput
          onChange={({ target }) => setFreightId(parseInt(target.value))}
          placeholder="Digite o código do pedido"
        />
        <MainButton onClick={fetch} width="7rem">
          Buscar
        </MainButton>
      </FreightSearchContainer>

      <FreightContainer>
        <FreightHalt>
          <Check width={50} height={50} checked />
          <FreightHaltStops>Franca (SP)</FreightHaltStops>
        </FreightHalt>

        <Divisor width="50px" color="#525252" />

        <FreightHalt>
          <Logo width={80} height={50} />
          <FreightHaltStops>Ribeirão Preto (SP)</FreightHaltStops>
        </FreightHalt>

        <Divisor width="50px" color="#525252" />

        <FreightHalt>
          <Check width={50} height={50} />
          <FreightHaltStops>Campinas (SP)</FreightHaltStops>
        </FreightHalt>
      </FreightContainer>
      <FreightHaltDescription>
        Seu pedido saiu de Franca (SP) dia 25/04 as 16:45, passou por Ribeirão
        Preto (SP) dia 26/04 as 9:20 e esta a caminho de Campinas (SP)
      </FreightHaltDescription>
    </Container>
  );
};

export default SquireFreight;
