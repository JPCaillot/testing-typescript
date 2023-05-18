//THIS FILE IS BETTER READ UPSIDE DOWN
import { OtherStringUtils, calculateComplexity, toUpperCaseWithCallback } from "../../app/doubles/OtherUtils";

describe.skip('OtherUtils test suite', () => {

    describe('OtherStringUtils tests with spies', () => {
        let sut: OtherStringUtils;

        beforeEach(() => {
            sut = new OtherStringUtils();
        });

        test('Use a spy to track calls', () => {
            const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('asa');
            expect(toUpperCaseSpy).toBeCalledWith('asa');
        });
        test('Use a spy to track calls to other module', () => {
            const consoleLogSpy = jest.spyOn(console, 'log');
            sut.logString('abc');
            expect(consoleLogSpy).toBeCalledWith('abc');
        });
        test('Use a spy to replace the implementation of a method', () => {
            //sut as any just in case of emergency, not advisable to do this with private methods
            jest.spyOn(sut, 'callExternalService').mockImplementation(() => {
                console.log('calling mocked implementation!')
            });
            sut.callExternalService();
            //not checking anything, just demonstrating it can be changed
        });
    });

    describe('Tracking callbacks with Jest mocks', () => {

        //jest's ready to go mock
        const callBackMock = jest.fn();

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('calls callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('', callBackMock);
            expect(actual).toBeUndefined();
            expect(callBackMock).toBeCalledWith('Invalid argument!');
            expect(callBackMock).toBeCalledTimes(1);
        });
        it('calls callback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toBeCalledWith('called function with abc');
            expect(callBackMock).toBeCalledTimes(1);
        });

    });

    describe('Tracking callbacks', () => {

        //mock - an implemented function to keep track of the code workings
        let cbArgs = [];
        let timesCalled = 0;

        function callBackMock(arg: string) {
            cbArgs.push(arg);
            timesCalled++;
        }

        afterEach(() => {
            //cleaning up
            cbArgs = [];
            timesCalled = 0;
        });

        it('calls callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('', callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid argument!');
            expect(timesCalled).toBe(1);
        });
        it('calls callback for valid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('called function with abc');
            expect(timesCalled).toBe(1);
        });

    });

    it('ToUpperCase calls callback for invalid argument', () => {
        //fake: a simpler, substitute function for the method so it's able to be called
        const actual = toUpperCaseWithCallback('', () => {});
        expect(actual).toBeUndefined();
    });
    it('ToUpperCase calls callback for valid argument', () => {
        const actual = toUpperCaseWithCallback('abc', () => {});
        expect(actual).toBe('ABC');
    });

    it('Calculates complexity', () => {
        //stub: an incomplete object just for functionality sake
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someOtherInfo'
            }
        }

        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(10);
    })
});