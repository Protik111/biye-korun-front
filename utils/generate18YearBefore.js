export function generate18YearBefore() {
    let currentDate = new Date();
    const year = currentDate.getFullYear() - 18;
    const month = currentDate.getMonth();
    const day = currentDate.getDate();

    const targetDate = new Date(year, month, day);

    // Use toLocaleDateString with a specific format
    const convertedDate = targetDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    return convertedDate;
}
