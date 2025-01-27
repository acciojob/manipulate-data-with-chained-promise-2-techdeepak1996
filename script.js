// Function that returns a promise resolving after 3 seconds with the array of numbers
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

    // Chaining promises as per the task
    manipulateArray()
      .then(arr => {
        return new Promise(resolve => {
          // Filter out the odd numbers after 1 second
          setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            updateOutput(`Even numbers: ${evenNumbers.join(', ')}`);
            resolve(evenNumbers);
          }, 1000); // Filters after 1 second
        });
      })
      .then(evenNumbers => {
        return new Promise(resolve => {
          // Multiply the even numbers by 2 after another 2 seconds
          setTimeout(() => {
            const doubled = evenNumbers.map(num => num * 2);
            updateOutput(`Doubled even numbers: ${doubled.join(', ')}`);
            resolve(doubled);
          }, 2000); // Doubles after 2 seconds
        });
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });