// let x, y, z; // Statement 1
// x = 5; // Statement 2
// y = 6; // Statement 3
// z = x + y; // Statement 4

// console.log(z);

// spread operator

// var a = [1,2,3,4,5,6]
// b = [...a];

// console.log(b)

// Rest operator
// function hello(a,b ,c, ...d){
// console.log(a,b,c,d)
// }
// hello(1,2,3,4,5,6, 7)

//Destructing

// var a = [1 ,2 , 3]
// var [b,c,d,e] = a;

// console.log(b , c)

// var obj = {name : "Usama" , age: 24};
// var {age , name} = obj;
// console.log(age, `this is tha name ${name}`)

//promises
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("✅ Task completed successfully");
//   } else {
//     reject("❌ Task failed");
//   }
// });

// myPromise
//   .then(result => console.log(result))   // if resolved
//   .catch(error => console.error(error)) // if rejected
//   .finally(() => console.log("Promise ended")); // always runs

//Async and await

//   async function getPost() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await res.json();
//     console.log("Post:", data);
//   } catch (error) {
//     console.error("Error fetching post:", error);
//   } finally {
//     console.log("Fetch request done ✅");
//   }
// }

// getPost();

function fetchUser() {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve({ name: "Usama", age: 27 });
      } else {
        reject("Failure to fetch user");
      }
    }, 2000);
  });
}

async function getUser() {
  try {
    console.log("fetching Data");
    const user = await fetchUser();
    console.log("user fetched", user);
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("Request completed ✅");
  }
}
getUser();
