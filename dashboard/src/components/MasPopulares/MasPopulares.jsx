import avatar from '../../assets/img/sniper.jpg'
import avatar2 from '../../assets/img/avatar.jpg'
import john from '../../assets/img/john-wick.jpg'
import shazan from '../../assets/img/shazan.jpg'
import elephant from '../../assets/img/the-magicians-elephant.jpg'
import sayen from '../../assets/img/sayen.jpg'
import style from './MasPopulares.module.css'

function MasPopulares(){
return (
    <main className="content-wrap">
<section className="content">
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
    </main>
    
)
}

export default MasPopulares