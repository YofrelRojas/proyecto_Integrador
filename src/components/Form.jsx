import { useState } from "react";
import validation from "../validation";

const Form = ()=>{
    const [userData , setuserData] = useState({email:'',password:''});
    const [errors , setErrors ] = useState({});

    const handleChange = (event)=> {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value
        }))
    }

    return(
        <div>
            <form>
                <label htmlFor="email"  >Email: </label>
                <input type="email" name="email" value={userData.value} onChange={handleChange}/>
                {errors.email && <p style={{color:'pink'}}> {errors.email} </p>}
                <hr/>
                <label htmlFor="password" >Contraseña: </label>
                <input type="text" name="password" value={userData.value} onChange={handleChange}/>
                {errors.password && <p style={{color:'pink'}}> {errors.password} </p>}
                <button>Submit</button>
            </form>
        </div>
    )
};

export default Form ;