export function generate18YearBefore() {
    let currentDate = new Date();
    const year = currentDate.getFullYear() - 18;
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    const targetDate = new Date(year, month, day);

    const monthFormat = targetDate.toLocaleDateString();

    // convert from 6/1/2005 to 2005/01/06

    const parts = monthFormat.split("/");

    //.slice(-2) method in JavaScript is used to extract the last two characters from a string
    const convertedDate = parts[2] + ',' + ('0' + parts[0]).slice(-2) + ',' + ('0' + parts[1]).slice(-2);

    return convertedDate;

}