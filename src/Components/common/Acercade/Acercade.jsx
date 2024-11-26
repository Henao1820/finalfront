import "../../../css/acercade.css";

export function Acercade() {
    
    const images = [
        'https://www.ceupe.com/images/easyblog_articles/4398/b2ap3_large_economia-nacional.jpg',
        'https://enfoquenoticias.com.mx/wp-content/uploads/2022/07/economia.png',
        'https://www.imf-formacion.com/uploads/media/21-9-large/00/4900-AdobeStock_13078181.jpg?v=1-0',
        'https://www.ceupe.com/images/easyblog_articles/4398/b2ap3_large_economia-nacional.jpg',
        'https://enfoquenoticias.com.mx/wp-content/uploads/2022/07/economia.png',
        'https://www.imf-formacion.com/uploads/media/21-9-large/00/4900-AdobeStock_13078181.jpg?v=1-0',
        'https://www.ceupe.com/images/easyblog_articles/4398/b2ap3_large_economia-nacional.jpg'
    ];

    return (
        <>
            <div className="acercade-page bg-dark text-light">
                <section className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8 align-self-center">
                            <h2 className="text-golden">Resumen Financiero</h2><br />
                            <p className="text-light">
                            Bienvenido a tu espacio personal de finanzas. Aquí podrás ver el seguimiento detallado de tus ingresos y gastos, tanto del mes como del año. Nuestro objetivo es proporcionarte herramientas visuales y fáciles de usar para que puedas tomar decisiones inteligentes sobre tu dinero.
                            </p>
                            <p className="text-light">
                                A través de nuestra aplicación, buscamos facilitarte el seguimiento de tus gastos y ayudarte a tomar el control de tu futuro financiero. Nuestro equipo está comprometido en seguir mejorando, añadiendo características como presupuestos inteligentes, gráficos dinámicos y alertas personalizadas.
                            </p>
                            <br /> <br />
                            <h3 className="text-golden" text-center>¿Qué puedes hacer aquí?</h3><br />
                            <p className="text-light">
                            ⚪ Visualiza tus gastos por categoría.
                            <br />
                            ⚪ Consulta tu saldo mensual y anual.
                            <br />
                            ⚪ Establece presupuestos y metas de ahorro.
                            <br />
                            ⚪ Analiza gráficos de tus finanzas para un mejor control.
                            </p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img 
                                src="../../../../src/assets/img/12.png" 
                                alt="foto"
                                className="img-fluid rounded shadow-lg"
                            />
                        </div>
                    </div>
                </section>

              <br />
                <div className="image-gallery">
                    <div className="image-track">
                        {images.concat(images).map((src, index) => (
                            <img 
                                key={index}
                                src={src}
                                alt={`Imagen ${index + 1}`}
                                className="image-item"
                            />
                        ))}
                    </div>
                </div>
                <br /><br /><br /><br />
                <footer className="bg-dark text-light text-center py-4">
                    <p>&copy; 2024 Expense. Todos los derechos reservados.</p>
                </footer>
            </div>
        </>
    );
}
