import fetch from "node-fetch";
// fetch('https://jsonplaceholder.typicode.com/posts')

//     .then(res => res.json())
//     .then(data => console.log(data))


// ----- SE PUEDE USAR TOP LEVEL AWAIT -----

// const loadData = async () => {
try {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
// };

// loadData();
