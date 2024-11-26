import React from "react";
import "../../../css/sobrenosotros.css";
import logo from "../../../assets/img/cara.png"

export function SobreNosotros() {
    return (
        <div className="sobre-nosotros">
            <section className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4 text-golden">Sobre Nosotros</h1>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6 mb-4">
                            <img 
                                src={logo} 
                                alt="Nuestro equipo" 
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>

                        <div className="col-md-6">
                            <p className="lead">
                                En <strong>Expense</strong>, nos apasiona ayudarte a tomar control de tus finanzas personales. Somos un equipo dedicado de desarrolladores y diseñadores comprometidos con la creación de herramientas sencillas y efectivas para gestionar el dinero.
                            </p>
                            <p>
                                Aunque todavía estamos en una etapa de crecimiento y desarrollo, nuestras metas incluyen ofrecer a nuestros usuarios herramientas como gráficos interactivos, presupuestos inteligentes, alertas personalizadas, y una experiencia de usuario intuitiva.
                            </p>
                            <p>
                                Creemos que el conocimiento sobre cómo gestionar el dinero puede transformar vidas. Por eso, trabajamos cada día para brindarte las mejores herramientas posibles. ¡Gracias por confiar en nosotros y ser parte de nuestra comunidad!
                            </p>
                        </div>
                    </div>
                </div>
                
            </section>

           
            <footer className="bg-dark text-light text-center py-4">
                <p>&copy; 2024 Expense. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}
