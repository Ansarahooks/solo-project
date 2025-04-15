const fs = require('fs');

function createMockDatabase(filename, data) {
  const jsonString = JSON.stringify(data, null, 2);

  fs.writeFileSync(filename, jsonString, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Successfully wrote data to file");
    }
  });
}

// const fakeData = {
//     users: [
//         { id: 1, name: "John Doe", email: "john.doe@example.com" },
//         { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
//     ],
//     products: [
//         { id: 101, name: "Laptop", price: 1200 },
//         { id: 102, name: "Keyboard", price: 75 },
//     ],
//     orders: []
// };

// createMockDatabase('mockData.json', fakeData);

module.exports = createMockDatabase;