import './SobreNos.css'; 
import img_anaJulia from '../assets/anaJu.png'; 
import img_anaCarolina from '../assets/anaCarol.png';
import img_isa from '../assets/isa.png'; 
import img_lauren from '../assets/lauren.png'; 
import img_faixaRosa from '../assets/faixa_rosa.png'; 





export default function SobreNos3() {
  return (

    <div>
         <section className='sobreNos_tela3'>
      <div className='quatro_de_noventa'>
      <h1  className='titulo_int'> Integrantes</h1>


      <div className="integrantes">
  <div className="anaJulia"> 
    <img className='img_int' src={img_anaJulia} alt="ana julia imagem" />
    <h4 className="nome_anajulia">Ana Julia</h4>
  </div>

  <div className="isa"> 
    <img className='img_int' src={img_isa} alt="isa imagem" />
    <h4 className="nome_isa">Isabely K</h4>
  </div>

  <div className="anaCarol"> 
    <img className='img_int' src={img_anaCarolina} alt="ana Carol imagem" />
    <h4 className="nome_anaCarol">Ana Carolina</h4>
  </div>

  <div className="Lauren"> 
    <img className='img_int' src={img_lauren} alt="lauren imagem" />
    <h4 className="nome_lauren">Lauren</h4>
  </div>
</div>
</div>


      <div className="faixa_rosa">
          <img className='img_faixaRosa' src={img_faixaRosa} alt="Faixa rosa quatro de noventa e nove" />
      </div>     
      </section>
      </div>
  );
}
