import style from './Statistics.module.css'
import {Link} from 'react-router-dom'

function Statistics(listado){
    return(
        <main className="content-wrap">
        <section className="content">
            <h2 className="mt-3">Estadísticas</h2>
            <div className="info-boxes">

            {listado.props.map((elemento, i) =>{
            return <div key={elemento.titulo + i} className="info-box">
                    <div className="box-icon">
                        <i className={elemento.icono + " " + style.infoboxes__icono} style={{color: elemento.colorIcono}}></i>
                    </div>

                    {/* <div className={style.boxContent}> */}
                    <div className="box-content">
                        <span className="big">{elemento.cifra}</span>
                        {elemento.titulo}
                    </div>
                    </div>
            })}
            </div>

            <button>
				<Link to="/">
                    Volver a Home
                </Link>
			</button>      
        </section>
        </main>
    )
}

export default Statistics;