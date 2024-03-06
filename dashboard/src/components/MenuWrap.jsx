import logoDH from '../assets/img/logo-dh.png'

export default function MenuWrap() {

    return( 
        <header className="menu-wrap">
        <figure className="user">
            <div className="user-avatar">
                <img src={logoDH} alt="Logo Digital House	"/>
            </div>
            <figcaption>
                Digital House
            </figcaption>
        </figure>
        <nav>
            <section className="dicover">
                <h3>Opciones</h3>
                <ul>
                    <li>
                        <a href="#">
                            <i className="bi bi-film" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Películas
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-play-circle" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Cines
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-person" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Géneros
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-bar-chart"></i>
                            - Más populares
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-tags"></i>
                            - Promociones
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-graph-up"></i>
                            - Estadísticas
                        </a>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
    )
    
}