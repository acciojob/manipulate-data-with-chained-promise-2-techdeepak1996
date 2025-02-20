function manipulateArray() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);  // Resolves with the input array
    }, 3000); // Resolves after 3 seconds
  });
}

// Function to update the content of the 'output' div
function updateOutput(content) {
  document.getElementById('output').textContent = content;
}

// Ensure the script runs after the DOM is fully loaded
window.onload = function() {
  manipulateArray()
    .then(arr => {
      // Filter out the odd numbers after 1 second
      return new Promise(resolve => {
        setTimeout(() => {
          const evenNumbers = arr.filter(num => num % 2 === 0);
          updateOutput(evenNumbers.join(',')); // Correct format
          resolve(evenNumbers); // Return even numbers for next step
        }, 1000); // Filters after 1 second
      });
    })
    .then(evenNumbers => {
      // Multiply the even numbers by 2 after another 2 seconds
      return new Promise(resolve => {
        setTimeout(() => {
          const doubled = evenNumbers.map(num => num * 2);
          updateOutput(doubled.join(',')); // Correct format
          resolve(doubled); // Resolve with the doubled numbers
        }, 2000); // Doubles after 2 seconds
      });
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
};