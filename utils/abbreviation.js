export function abbreviateName(fullName) {
  // Split the full name into individual words
  const words = fullName.split(" ");

  // Initialize an empty string for the abbreviation
  let abbreviation = "";

  // Loop through the words and take the first letter of each word
  for (const word of words) {
    abbreviation += word.charAt(0).toUpperCase();
  }

  return abbreviation;
}

// const fullName = "Julfikar Haidar";
// const abbreviation = abbreviateName(fullName);

// console.log(abbreviation); // This will output "JH"
