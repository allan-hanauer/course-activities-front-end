import "./Hero.css";
const Hero = () => {
  const hello = () => {
    alert("Bem-Vindo");
  };
  return (
    <>
      <div>
        <h1 className="title-hero">
          Deposite o seu
          <br /> futuro global agora!
        </h1>
        <p className="parag-hero">
          Domine as finanças utilizadas pelas empresas mais inovadoras do mundo
          e<br /> encare seu novo desafio profissional, evoluindo em comunidade
          com os
          <br /> melhores experts.
        </p>
        <button onClick={hello}>Boas Vindas</button>
      </div>
    </>
  );
};

export default Hero;
