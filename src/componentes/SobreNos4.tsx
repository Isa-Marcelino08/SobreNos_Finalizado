import './SobreNos.css'; 
import img_ovelha1 from '../assets/img_ovelha1.png'; 
import img_ovelha2 from '../assets/img_ovelha2.png'; 
import img_4_99 from '../assets/img_4_99.png'; 
import img_faixaAzul from '../assets/faixa_azul.png'; 



export default function SobreNos4() {
  return (
     
     
    <div>
      
      <section className='sobreNos_tela4'>
     <div className="processo_grupo">
      <h1  className='titulo_processo'> Processo</h1>
      <p className='texto_Processo'> hgjgsadygsdvsdjggdtadevsghdjsgdysvdsgd </p>
      <img className='img_Processo1' src={img_ovelha1} alt="Imagem ovelha fundo roxo" />
      <img className='img_Processo2' src={img_ovelha2} alt="Imagem ovelha fundo verde" />
      <img className='img_Processo3' src={img_4_99} alt="Imagem quatro de noventa e nove rosa" />
      </div>

      <div className="faixa">
       
          <img className='img_faixaAzul' src={img_faixaAzul} alt="Faixa azul quatro de noventa e nove" />
      </div>
      </section> 

      <div className='video_sobreNos'>
        <iframe
          src="https://www.youtube.com/embed/qTHRJimrzfc"
          title="YouTube" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "100vh" }}
        > </iframe>
         
         
         </div>     

      

    </div>
  );
}
