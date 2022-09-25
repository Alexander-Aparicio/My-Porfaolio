import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { Title, Ambiciones, Container } from "./AmbicionesStyles";
import CloseButton from "./CloseButton";

const AmbicionesLayout = () => {
  const { data, setData } = useContext(DataContext);

  return (
    <>
      {data.layout === "ambiciones" && data.active === true ? (
        <Container>
          <Title>Ambiciones</Title>

          <Ambiciones>
            Ser un crack en React JS usando Typescript 🧰.
            <br />
            Aprender y dominar React Native.
          </Ambiciones>

          <CloseButton handleState={() => setData({ active: false })}>
            cerrar
          </CloseButton>
        </Container>
      ) : null}
    </>
  );
};

export default AmbicionesLayout;
