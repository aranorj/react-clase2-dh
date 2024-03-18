import avatar from '../../assets/img/sniper.jpg'
import avatar2 from '../../assets/img/avatar.jpg'
import john from '../../assets/img/john-wick.jpg'
import shazan from '../../assets/img/shazan.jpg'
import elephant from '../../assets/img/the-magicians-elephant.jpg'
import sayen from '../../assets/img/sayen.jpg'
import style from './Estrenos.module.css'
function Estrenos(){
return (
    <section className="content">
            <h2>Próximos estrenos</h2>
            <table className="table shadow p-3 mb-5 bg-body-tertiary rounded">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Director</th>
                        <th scope="col">Fecha de estreno</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>SUPER MARIO BROS</td>
                        <td> Aaron Horvath</td>
                        <td>09 ABR. 2023</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>PONYO Y EL SECRETO DE LA SIRENITA </td>
                        <td>Dan Fontain</td>
                        <td>11 MAY. 2023</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>THE MARVELS </td>
                        <td>Glor Medin</td>
                        <td>27 JUL. 2023</td>
                    </tr>
                </tbody>
            </table>

       <h2>Más populares</h2>
            <article className="person-boxes">
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src={avatar2} alt="Avatar"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">Avatar: The Way of Water</h2>
                        <p className={`bio-position ${style.infoboxes__icono}`}>Ciencia Ficción</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src={john} alt="john-wick"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">John Wick: Chapter 4</h2>
                        <p className="bio-position">Acción</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src={shazan} alt="shazan"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">Shazam! Fury of the Gods</h2>
                        <p className="bio-position">Fantasía</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src={sayen} alt="sayen"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">Sayen</h2>
                        <p className="bio-position">Acción</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src={elephant} alt="Avatar"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">The Magician´s Elephant</h2>
                        <p className="bio-position">Animación</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
                <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="box-avatar">
                        <img src={avatar} alt="Avatar"/>
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">Sniper: The White Raven</h2>
                        <p className="bio-position">Guerra</p>
                    </div>
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star"></i>
                        </button>
                        <button>
                            <i className="bi bi-chat"></i>
                        </button>
                        <button>
                            <i className="bi bi-envelope"></i>
                        </button>
                    </div>
                </div>
            </article>
        

        </section>
)
}

export default Estrenos