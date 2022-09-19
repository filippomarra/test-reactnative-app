export const sortByKey = (list: any[], key: any): any[] => {
    return list.length && key
        ? list.slice().sort((a, b) => (a[key] > b[key] ? 1 : -1))
        : list;
};
