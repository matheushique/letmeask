import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button'

import '../styles/auth.scss';


export function NewRoom() {

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustracao simbolizando pegunstas e respostas" />
                <strong>Crie salas de Q&amp; A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="digite o codigo da sala"
                         />
                         <Button type="submit">
                                Criar sala
                         </Button>   
                    </form>
                    <p>
                        Quer entrar numa sala existente?<Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}