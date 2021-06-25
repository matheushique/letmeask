import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button'


import '../styles/auth.scss';
import { database } from '../service/firebase';
import { useAuth } from '../hooks/useAuth';




export function NewRoom() {
    const { user } = useAuth();
    const history =useHistory()
    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })


        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustracao simbolizando pegunstas e respostas" />
                <strong>Crie salas de Q&amp; A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="digite o codigo da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
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
