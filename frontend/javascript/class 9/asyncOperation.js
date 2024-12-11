// //Synchronus code
// console.log("Start");
// console.log("Middle");
// console.log("End");

// //Asynchronus code

// console.log("Start");
// setTimeout(() => console.log("Middle"), 2000);
// console.log("End");
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((error) => console.log("Error", error));

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
