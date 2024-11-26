import './Home.css'
import { Acercade } from '../../common/Acercade/Acercade'
import "../../../css/home.css"

export function Home() {
    return (
        <>
            <div className='banner text-white'>
                <h2>EXPENSE</h2><br />
                <p>
                    ¡Controla tus gastos de manera fácil y efectiva!
                    Bienvenido a Expense, tu nueva herramienta para gestionar tus finanzas personales. Nuestra aplicación ha sido diseñada con el objetivo de ayudarte a llevar un registro preciso de tus gastos diarios. Gracias a nuestra interfaz intuitiva, podrás registrar tus gastos de forma rápida y sencilla.

                    ¿Te gustaría saber a dónde se va tu dinero cada mes?
                    Aunque todavía estamos trabajando en algunas características, te ofrecemos un espacio para ingresar tus datos de gastos y categorizarlos. En el futuro, podrás visualizar gráficas dinámicas que te ayudarán a obtener una visión más completa de tus gastos.
                    <br /><br /><br /><br />
                </p>
            </div>
            <Acercade />
        </>
    )
}