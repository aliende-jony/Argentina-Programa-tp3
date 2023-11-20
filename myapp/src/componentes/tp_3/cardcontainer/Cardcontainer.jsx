import Cdisponible from "../cDisponible/Cdisponible";
import Sku from "../sku/Sku";
import Descripcion from "../descripcion/Descripcion";
import Nombre from "../nombre/Nombre";
import Precio from "../precio/Precio";
import Image from "../../../assets/mg52.png"




function Cardcontainer(){
    return (
      <section className='ecommerce'>
        <div className='bienvenida'>
        <h1>Bienvenidos a la resolucion del ejercico N°3</h1>
        </div>
        
        <div className='product'>
        <img className="mot" src={Image}/>
          <Nombre/>
          <Descripcion/>
          <Precio/>
          <Sku/>
          <Cdisponible/>
        </div>
      </section>
    );
  }


export default Cardcontainer