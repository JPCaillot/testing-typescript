import { Authorizer } from "../../../app/server_app/auth/Authorizer";
import { ReservationsDataAccess } from "../../../app/server_app/data/ReservationsDataAccess";
import { Server } from "../../../app/server_app/server/Server";

jest.mock('../../../app/server_app/auth/Authorizer');
jest.mock('../../../app/server_app/data/ReservationsDataAccess');
jest.mock('../../../app/server_app/handlers/LoginHandler');
jest.mock('../../../app/server_app/handlers/RegisterHandler');
jest.mock('../../../app/server_app/handlers/ReservationsHandler');

const requestMock = {
    url: '',
    headers: {
        'user-agent': 'jest-test'
    }
}
const responseMock = {
    end: jest.fn(),
    writeHead: jest.fn()
}
const serverMock = {
    listen: jest.fn(),
    close: jest.fn()
}

jest.mock('http', () => ({
    createServer: (cb: Function) => {
        cb(requestMock, responseMock);
        return serverMock;
        
    }
}));

describe('Server test suite', () => {

    let sut: Server

    beforeEach(() => {
        sut = new Server();
        expect(Authorizer).toBeCalledTimes(1);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should start server on port 8080 and end the request', async () => {
        await sut.startServer();

        expect(serverMock.listen).toBeCalledWith(8080);
        expect(responseMock.end).toBeCalled();
        //(res.end as any as jest.Mock).mock.calls.length as a way to debug on the app file
        //if you're dealing with async functions, make sure the timing is right if checks don't seem to work (console logs)
    });
});