/*// Map<employeeName, [baseSalary, experience, rating]> using map,for of loop

//Storing employee data (input)
const empData: Map<string, number[]> = new Map();
empData.set("Alice Johnson", [75000, 5, 4.2]);
empData.set("Bob Smith", [68000, 3, 3.8]);
empData.set("Carol Davis", [82000, 7, 4.5]);
empData.set("David Brown", [90000, 10, 2.0]);
empData.set("Eva Green", [60000, 2, 3.5]);


//Create empty Map to store hike percentages
let hikeMap: Map<string, number> = new Map();

// Calculate hike for each employee and store in hikeMap
for (const key of empData.keys()) {
  const data = empData.get(key)!;// get the array of values for the employee
  const baseSalary = data[0];
  const experience = data[1];
  const rating = data[2];

  const hikePercentage = calculateHike(baseSalary, experience, rating);
  hikeMap.set(key, hikePercentage);
}

console.log("Hike Percentage for each employee:");
console.log(hikeMap);


// Function to calculate hike percentage
function calculateHike(
  baseSalary: number,
  experience: number,
  rating: number
): number {
  let variablePayPercentage = 0;
  let bonus = 0;
  let reward = 0;

  if (rating >= 4) {
    variablePayPercentage = 15;
    bonus = 1500;
  } else if (rating >= 3) {
    variablePayPercentage = 10;
    bonus = 1200;
  } else {
    variablePayPercentage = 3;
    bonus = 300;
  }

  if (experience >= 5) {
    reward = 5000;
  }

  const hike =
    (baseSalary * variablePayPercentage) / 100 + bonus + reward;

  return (hike / baseSalary) * 100;
}*/




// Employee Interface
interface Employee {
    baseSalary: number;
    experience: number;
    rating: number;
}

// Map to store employee details
const empData: Map<string, Employee> = new Map();

empData.set("Alice Johnson", {
    baseSalary: 75000,
    experience: 5,
    rating: 4.2
});

empData.set("Bob Smith", {
    baseSalary: 68000,
    experience: 3,
    rating: 3.8
});

empData.set("Carol Davis", {
    baseSalary: 82000,
    experience: 7,
    rating: 4.5
});

empData.set("David Brown", {
    baseSalary: 90000,
    experience: 10,
    rating: 2.0
});

empData.set("Eva Green", {
    baseSalary: 60000,
    experience: 2,
    rating: 3.5
});

// Map to store hike percentages
const hikeMap: Map<string, number> = new Map();

// Calculate hike for each employee
for (const [employeeName, employee] of empData) {

    const hikePercentage = calculateHike(
        employee.baseSalary,
        employee.experience,
        employee.rating
    );

    hikeMap.set(employeeName, hikePercentage);
}

// Print hike percentages
console.log("Hike Percentage for each employee:");

for (const [employeeName, hike] of hikeMap) {
    console.log(`${employeeName} : ${hike.toFixed(2)}%`);
}

// Function to calculate hike
function calculateHike(
    baseSalary: number,
    experience: number,
    rating: number
): number {

    let variablePayPercentage = 0;
    let bonus = 0;
    let reward = 0;

    if (rating >= 4) {
        variablePayPercentage = 15;
        bonus = 1500;
    } else if (rating >= 3) {
        variablePayPercentage = 10;
        bonus = 1200;
    } else {
        variablePayPercentage = 3;
        bonus = 300;
    }

    if (experience >= 5) {
        reward = 5000;
    }

    const hike = (baseSalary * variablePayPercentage) / 100 + bonus + reward;

    return (hike / baseSalary) * 100;
}