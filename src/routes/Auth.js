import { authService } from "myBase";
import React, { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const onChange = (event) => {
        // console.log(event.target.name);
        const {target: {name,value}} = event;
        if(name === "email"){
            setEmail(value)
        }else if(name === "password"){
            setPassword(value)
        }
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        // preventDefault() : 기본 행위가 실행되지 않기를 원한다
        // 원래는 새로고침인데 그거 안되게 하기

        try{
            let data;
            if(newAccount){
                // create account
                data = await authService.createUserWithEmailAndPassword(email, password)
            }else{
                // log in
                data = await authService.signInWithEmailAndPassword(email, password)
            }
            console.log(data);
        }catch(error){
            console.log(error);
        }
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={email}
                    onChange={onChange}
                />
                <input 
                    name = "password"
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password}
                    onChange={onChange}
                />
                <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
}
export default Auth;