import { Footer } from "./styles";

export const FooterComponent = () => {
  return (
    <Footer>
      <div>
        <p> Challenge by </p>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
      </div>
      <div>
        <p>Coded by </p>
        <a rel="noreferrer" target="_blank" href="https://github.com/rednand">
          Renan Aguiar
        </a>
      </div>
    </Footer>
  );
};
