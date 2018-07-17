export const formatDate = (date) => {
    date = new Date(date);
    let day = [];
    let time = [];
    day.push(checkFirstZero(date.getDate()));
    day.push(checkFirstZero(date.getMonth()));
    day.push(date.getFullYear());
    time.push(checkFirstZero(date.getHours()));
    time.push(checkFirstZero(date.getMinutes()));
    let result = day.join('/') + ' ' + time.join(':');
    return result;
};

const checkFirstZero = (dateValue) => {
    return (dateValue < 10) ? '0' + dateValue : dateValue;
};