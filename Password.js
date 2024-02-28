function generatePassword(firstName, middleName, lastName) {
    //  first 2 characters from each name
    const firstChars = firstName.substring(0, 2);
    const middleChars = middleName.substring(0, 2);
    const lastChars = lastName.substring(0, 2);
    
    // Generate random 3-digit number
    const randomNumber = Math.floor(Math.random() * 900) + 100;
 // random number between 100 and 999
    
    // Concat the characters and random number
    const password = firstChars + middleChars + lastChars + randomNumber;
    
    return password;
}

// Example usage
const firstName = 'Sujit';
const middleName = 'Narayan';
const lastName = 'Waghmare';
const password = generatePassword(firstName, middleName, lastName);
console.log(password);                // Example output:    SuNaWa123
