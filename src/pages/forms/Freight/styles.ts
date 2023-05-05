import styled from "styled-components";

export const Container = styled.main``;

export const ContainerWithImage = styled.figure`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.2);
  background-image: url("https://img.freepik.com/fotos-premium/seu-pacote-esta-a-caminho-com-seguranca-foto-recortada-de-um-mensageiro-nao-identificavel-preenchendo-a-papelada-durante-uma-entrega_590464-20819.jpg?w=2000");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw;
  background-blend-mode: darken;
`;

export const FormHeader = styled.header`
  display: flex;
  margin-bottom: 15px;
`;

export const FormTitle = styled.h1`
  font-size: 1.5em;
  color: black;

  font-weight: 700;

  font-family: "Nunito Sans";
`;

export const FormInput = styled.input`
  padding: 13px 10px;

  border: 1px solid #ded2d9;
  border-radius: 5px;
  margin-top: 10px;
`;

export const FormSelector = styled.select`
  padding: 13px 10px;

  border: 1px solid #ded2d9;
  border-radius: 5px;
  margin-top: 10px;
`;

export const FormFooter = styled.footer`
  display: flex;
  margin-top: 15px;
  justify-content: center;
`;

export const FormButton = styled.button`
  background-color: #7f265b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 80%;

  &:hover {
    cursor: pointer;
  }
`;
