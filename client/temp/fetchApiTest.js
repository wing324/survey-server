// API: https://rallycoding.herokuapp.com/api/music_albums

// method 1
// function fetchApi(){
//   fetch("https://rallycoding.herokuapp.com/api/music_albums")
//     .then( res => res.json() )
//     .then( data => console.log(data) )
// }
//
// fetchApi();

// await instead of promise
// method 2
// async function fetchApi(){
//   const res =  await fetch("https://rallycoding.herokuapp.com/api/music_albums");
//   const data = await res.json();
//
//   console.log(data);
// }
//
// fetchApi();

// method 3
const fetchApi = async () => {
  const res =  await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const data = await res.json();

  console.log(data);
}

fetchApi();
