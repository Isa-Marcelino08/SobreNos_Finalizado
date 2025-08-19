import './SobreNos.css'; 
import logo_grupo from '../assets/fourOfNinetyNine_Logo.png'; 

export default function SobreNos2() {
  return (
     
     
    <div className='container_Sobrenos2'>      
      <section className='sobreNos_tela2'>
        <div className='quatro_de_noventa'>
          <h1  className='titulo_Grupo1'> Four of </h1>
          <h1  className='titulo_Grupo2'> ninety-nine</h1>
          <p className='texto_Grupo'> hgjgsadygsdvsdjggdtadevsghdjnkjdchdgcs <br /> dbgcsgbsgskgifsgiigifgsgdysvdsgd <br /> ghafythvshgvdskutadfshg</p>
          <img className='logo_grupo' src={logo_grupo} alt="Logo da marca" />
        </div>
      </section>      
    </div>
  );
}
