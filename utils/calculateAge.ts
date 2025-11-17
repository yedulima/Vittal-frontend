export function calculateAge(dateString: string): number {
    const [day, month, year] = dateString.split('/').map(Number);

    const birthday = new Date(year, month - 1, day);
    const actualDate = new Date();

    let age = actualDate.getFullYear() - birthday.getFullYear();
    if (actualDate < new Date(actualDate.getFullYear(), month - 1, day)) {
        age--;
    }

    return age;
}