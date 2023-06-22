// const DUMMY = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//       },
//       {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//       },
//       {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//       },
//       {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//       },
//     ];
    

// async function addMovieHandler (movie) {
//         console.log(movie);
//        const res = fetch('https://orderfood-a823c-default-rtdb.firebaseio.com/DUMMY.json', {method: 'POST',
//                body: JSON.stringify(movie),
//                headers:{'Content-Type': 'application/json'}})
//               }

// addMovieHandler(DUMMY)

// fetch('https://console.firebase.google.com/u/0/project/react-practice-bc8fe/database/react-practice-bc8fe-default-rtdb/data/movie.json').then((res)=>{

//     console.log(res)

// })


// fetch('https://console.firebase.google.com/u/0/project/react-practice-bc8fe/database/react-practice-bc8fe-default-rtdb/data/movies.json').then(async (response)=>{
//     const data = await response.json()

//     const transformedMovies = data.results.map(mov =>{
//       return{
//         id: mov.episode_id,
//         title: mov.title,
//         openingText: mov.opening_crawl,
//         releaseDate: mov.release_date
//       }
//     })
//     setMov(transformedMovies)
//     setIsLoading(false)
//   })