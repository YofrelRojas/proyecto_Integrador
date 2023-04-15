import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '9e8589df75ab.9e10cce3ce17adce04a3'


function App() {
    const [characters, setCharacters] = useState([]);
    const location = useLocation();
    const actualLocation = location.pathname === './';
    const navigate = useNavigate();

    const [access, setAccess] = useState(false);
    const email = 'rojasyofrel@gmail.com';
    const password = 'catblack'

    const login = (userData) => {
        if (userData.password === password && userData.email === email) {
            setAccess(true);
            navigate('/home')
        }
    }

    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    const onSearch = (id) => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert('¡No hay personajes con este ID!');
            }
        });
    }

    const onClose = (id) => {
        const chataractersFiltered = characters.filter(characters => characters.id !== Number(id))
        setCharacters(chataractersFiltered)
    }
    return ( <
            div className = 'App' > {
                actualLocation && ( <
                    Nav onSearch = { onSearch }
                    />
                )
            }

            <
            Routes >
            <
            Route path = '/'
            element = { < Form login = { login }
                / > } > </Route >
                <
                Route path = '/home'
                element = { < Cards characters = { characters }
                    onClose = { onClose }
                    /> }> <
                    /Route > <
                    Route path = '/about'
                    element = { < About / > } > < /Route>   <
                    Route path = '/detail/:id'
                    element = { < Detail / > } > < /Route>  

                    <
                    /Routes >  <
                    /div>
                );
            }

            export default App;