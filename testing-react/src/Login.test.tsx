/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
import { act, fireEvent, render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import Login from "./Login";

describe('login component suite', () => {

    const loginServiceMock = {
        login: jest.fn()
    };
    const setTokenMock = jest.fn();
    let container: HTMLElement;

    const setup = () => {
        container = render(<Login 
            loginService={loginServiceMock}
            setToken={setTokenMock} 
        />).container;
    };
    beforeEach(() => {
        setup();
    })

    it('should render correctly the login component', () => {
        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
        expect(screen.queryByTestId('resultLabel')).not.toBeInTheDocument();
    });
    it('should render correctly - query by test id', () => {
        const inputs = screen.getAllByTestId('input');
        expect(inputs).toHaveLength(3);
        expect(inputs[0].getAttribute('value')).toBe('');
        expect(inputs[1].getAttribute('value')).toBe('');
        expect(inputs[2].getAttribute('value')).toBe('Login');
    });
    it('should render correctly - query by document query', () => {
        // const inputs = document.querySelectorAll('input');
        // eslint-disable-next-line testing-library/no-node-access
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(3);
        expect(inputs[0].value).toBe('');
        expect(inputs[1].value).toBe('');
        expect(inputs[2].value).toBe('Login');
    });
    //testing user interaction
    it('shows required message with incomplete credentials when clicking the button', () => {
        const inputs = screen.getAllByTestId('input');
        const loginButton = inputs[2];

        fireEvent.click(loginButton); //already wrapped by act under the hood

        const resultLabel = screen.getByTestId('resultLabel');
        expect(resultLabel.textContent).toBe('Username and password required!')
    });
    it('shows required message with incomplete credentials when clicking the button - with user click', () => {
        const inputs = screen.getAllByTestId('input');
        const loginButton = inputs[2];

        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => { //simulating change of state
            user.click(loginButton);
        });

        const resultLabel = screen.getByTestId('resultLabel');
        expect(resultLabel.textContent).toBe('Username and password required!');
    });

    //testing async updates
    it('doesnt log in successfully with wrong credentials', async () => {
        //alternative if it's bugging:
        // const result = Promise.resolve(undefined);
        // loginServiceMock.login.mockResolvedValueOnce(result);
        loginServiceMock.login.mockResolvedValueOnce(undefined);
        const inputs = container.querySelectorAll('input');

        const userNameInput = inputs[0];
        const passwordInput = inputs[1];
        const loginButton = inputs[2];
        
        fireEvent.change(userNameInput, { target: { value: 'someUser' }});
        fireEvent.change(passwordInput, { target: { value: 'somePassword' }});
        fireEvent.click(loginButton);
        
        // await result;
        expect(loginServiceMock.login).toBeCalledWith('someUser', 'somePassword');

        //WRONG - resultLabel doesn't exist yet, async
        //const resultLabel = screen.getByTestId('resultLabel');

        const resultLabel = await screen.findByTestId('resultLabel');
        expect(resultLabel.textContent).toBe('Invalid credentials');
    });
    it('doesnt log in successfully with wrong credentials - with user clicks', async () => {
        loginServiceMock.login.mockResolvedValueOnce(undefined);
        const inputs = container.querySelectorAll('input');

        const userNameInput = inputs[0];
        const passwordInput = inputs[1];
        const loginButton = inputs[2];
        
        act(() => {
            user.click(userNameInput);
            user.keyboard('someUser');

            user.click(passwordInput);
            user.keyboard('somePassword');
            
            user.click(loginButton);
        });

        expect(loginServiceMock.login).toBeCalledWith('someUser', 'somePassword');

        const resultLabel = await screen.findByTestId('resultLabel');
        expect(resultLabel.textContent).toBe('Invalid credentials');
    });
    it('logs in successfully with right credentials', async () => {
        loginServiceMock.login.mockResolvedValueOnce('1234');
        const inputs = container.querySelectorAll('input');

        const userNameInput = inputs[0];
        const passwordInput = inputs[1];
        const loginButton = inputs[2];
        
        fireEvent.change(userNameInput, { target: { value: 'someUser' }});
        fireEvent.change(passwordInput, { target: { value: 'somePassword' }});
        fireEvent.click(loginButton);
        
        expect(loginServiceMock.login).toBeCalledWith('someUser', 'somePassword');

        //WRONG - resultLabel doesn't exist yet, async
        //const resultLabel = screen.getByTestId('resultLabel');

        const resultLabel = await screen.findByTestId('resultLabel');
        expect(resultLabel.textContent).toBe('Successful login');
    });
});