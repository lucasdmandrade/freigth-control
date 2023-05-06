import { useCallback, useState } from "react";
import { RegisterUser } from "../../../api/User";
import Form from "../../../components/Form";
import Header from "../../../components/Header";
import { ListEnum } from "../../../utils/enuns/Methods";
import { UserGroups } from "../../../utils/enuns/States";
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

const User = () => {
  const [userName, setUserName] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userDocument, setUserDocument] = useState("");
  const [userType, setUserType] = useState(1);

  const submitForm = useCallback(() => {
    if (
      !userName ||
      !userNickname ||
      !userEmail ||
      !userPassword ||
      !userPhone ||
      !userDocument ||
      !userType
    )
      return;

    RegisterUser(
      userName,
      userNickname,
      userEmail,
      userPassword,
      userPhone,
      userDocument,
      userType
    )
      .then((response) => {
        window.alert(response);
        console.log("foi", response);
      })
      .catch((error) => window.alert(error.message));
  }, [
    userDocument,
    userEmail,
    userName,
    userNickname,
    userPassword,
    userPhone,
    userType,
  ]);

  const handleOptions = useCallback(
    (name: string, index: number) => (
      <option value={index} key={name}>
        {name}
      </option>
    ),
    []
  );

  return (
    <Container>
      <Header />

      <ContainerWithImage>
        <Form>
          <FormHeader>
            <FormTitle>Cadastre novo cliente</FormTitle>
          </FormHeader>

          <FormInput
            placeholder="Nome"
            onChange={({ target }) => setUserName(target.value)}
          />

          <FormInput
            placeholder="Usuario"
            onChange={({ target }) => setUserNickname(target.value)}
          />

          <FormInput
            placeholder="Email"
            onChange={({ target }) => setUserEmail(target.value)}
          />

          <FormInput
            type={"password"}
            placeholder="Senha"
            onChange={({ target }) => setUserPassword(target.value)}
          />

          <FormInput
            type={"tel"}
            placeholder="Numero de telefone"
            onChange={({ target }) => setUserPhone(target.value)}
          />

          <FormInput
            placeholder="CPF/CNPJ"
            onChange={({ target }) => setUserDocument(target.value)}
          />

          <FormSelector
            onChange={({ target }) => setUserType(parseInt(target.value))}
          >
            {ListEnum(UserGroups, handleOptions)}
          </FormSelector>

          <FormFooter onClick={submitForm}>
            <FormButton>Cadastrar</FormButton>
          </FormFooter>
        </Form>
      </ContainerWithImage>
    </Container>
  );
};

export default User;
