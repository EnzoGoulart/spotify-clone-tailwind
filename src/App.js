import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import sptLogo from './img/spotify-logo.png'
export default function App(){
  return (
    <div className="w-[100%]">
      <div className="bg-black flex justify-around px-3 py-4  w-full md:px-20 md:py-6 md:justify-between fixed">
        <img className="w-[100px] md:w-125px " src={sptLogo} alt="nada aqui"/>
        <FontAwesomeIcon icon={faBars} className="text-3xl text-white md:hidden cursor-pointer"/>
        <nav className=" hidden text-[18px] h-[30px] m-auto md:flex text-white w-[600px]  mr-0 justify-end cursor-pointer">
            <p className="px-4 hover:text-green-main">Premium</p>
            <p className="px-4 hover:text-green-main">Ajuda</p>
            <p className="px-4 hover:text-green-main">Baixar</p>
            <p className="px-4 hover:text-green-main border-white border-l-[2px] ">Inscrever-se</p>
            <p className="px-4 hover:text-green-main">Log In</p>
        </nav>
      </div>
      <main>
        <div className="bg-spotify-theme-mobile md:bg-spotify-theme bg-195% flex flex-col justify-center text-center py-40 px-4 bg-banner-mobile md:bg-banner md:bg-175% bg-purple-main">
          <h1 className=" text-green-main text-5xl md:text-8xl mb-10 font-bold mx-auto mt-[-50px]">Escutar<br/> muda tudo</h1>
          <p className="text-md md:text-lg mb-10 px-5 text-green-main">Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito</p>
          <a className="bg-green-main w-[60%] md:w-[30%] px-[10px] py-[10px] text-purple-main hover:bg-white mx-auto rounded-[100px]
          ease-in-out duration-500 font-bold
          " href="#">Obtenha o Spotify Free</a>
        </div>
      </main>
      <footer className="bg-black txt-white w-full flex md:flex-row justify-around py-5 flex-col mx-auto items-center md:items-start">
        <div className="w-[100px] md:w-125px ">
        <img className="w-[125px] md:w-125px " src={sptLogo} alt="nada aqui"/>
        </div>
        <div>
          <h3 className="pt-[10px] md:pt-0">Empresa</h3>
          <p className="footerP">Sobre</p>
          <p className="footerP">Empregos</p>
          <p className="footerP">For the Record</p>
        </div>
        <div>
          <h3>Comunidades</h3>
          <p className="footerP">Para Artistas</p>
          <p className="footerP">Desenvolvedores</p>
          <p className="footerP">Publicidade</p>
          <p className="footerP">Investidores</p>
          <p className="footerP">Fornecedores</p>
        </div>
        <div>
          <h3>Links Úteis</h3>
          <p className="footerP">Ajuda</p>
          <p className="footerP">Player da Web</p>
          <p className="footerP">Aplicativo móvel grátis</p>
        </div>
        <div>
        <h3>Legal</h3>
        <p className="footerP">Centro de Privacidade</p>
        <p className="footerP">Política de Privacidade</p>
        <p className="footerP">Cookies</p>
        <p className="footerP">Sobre anúncios</p>
        </div>
      </footer>
    </div>
  );
}
