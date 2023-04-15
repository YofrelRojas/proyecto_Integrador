
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '9e8589df75ab.9e10cce3ce17adce04a3'

const Detail = () => {
    const { id } = useParams(); 
    const [character,setCharacter] = useState({});
    

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
        }, [id]);// array de dependencia , super importante para que no te baneen de la API por un loop infinito



    return(
        <div>
            {
                character && <div>
                    <h2>{character?.name}</h2>
                    <h2>{character?.status}</h2>
                    <h2>{character?.species}</h2>
                    <h2>{character?.gender}</h2>
                    <h2>{character?.origin?.name}</h2>
                    <img src={character?.image} alt="" />
                </div>
                    
                    
                        
            }
        </div>
    )
}


export default Detail;