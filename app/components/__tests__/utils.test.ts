import { sortByKey } from '../utils';

describe('sortByKey tests', () => {
    describe('When list is empty', () => {
        describe('and key is undefined', () => {
            it('should return an empty list', () => {
                const sortedList = sortByKey([], undefined);
                expect(sortedList).toStrictEqual([]);
            });
        });

        describe('and key is defined', () => {
            it('should return an empty list', () => {
                const sortedList = sortByKey([], 'name');
                expect(sortedList).toStrictEqual([]);
            });
        });
    });

    describe('When list is not empty', () => {
        const list = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];
        describe('and key is undefined', () => {
            it('should return the input list', () => {
                const sortedList = sortByKey(list, undefined);
                expect(sortedList).toStrictEqual(list);
            });
        });

        describe('and key is defined', () => {
            it('should return the sorted list', () => {
                const expectedResult = [
                    { name: 'a' },
                    { name: 'b' },
                    { name: 'c' },
                ];
                const sortedList = sortByKey(list, 'name');
                expect(sortedList).toStrictEqual(expectedResult);
            });
        });
    });
});
