import { SyntheticEvent, useState } from "react";
import LoginService from './services/LoginService';

type LoginProps = {
    loginService: LoginService;
    setToken: (token: string) => void;
};

export default function Login({ loginService, setToken }: LoginProps) {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginResult, setLoginResult] = useState<string>('');

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(userName + ' ' + password);
        if (userName && password) {
            const loginResponse = await loginService.login(userName, password);
            console.log(loginResponse);
            if (loginResponse) {
                setLoginResult('Successful login');
                setToken(loginResponse)
            } else {
                setLoginResult('Invalid credentials');
            }
        } else {
            setLoginResult('Username and password required!');
        }
    }

    function renderLoginResult() {
        if (loginResult) {
            return <label data-testid='resultLabel' >{loginResult}</label>
        }
    }

    return (
        <div role="main">
            <h2>Please login</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Username</label>
                <input data-testid='input'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                /><br/>
                <label>Password</label>
                <input data-testid='input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <input data-testid='input' type='submit' value='Login' />
            </form><br/>
            {renderLoginResult()}
        </div>
    );
}