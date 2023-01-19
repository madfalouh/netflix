const API_KEY="3e30337ff84caa6ac17cb43117915508"; 

const requests = {
fetchImages :"/movie/103416/images?api_key=3e30337ff84caa6ac17cb43117915508&language=en-US" , 
fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en-US`, 
fetchNetflixOriginals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-US` ,
fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28` ,
fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35` ,
fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=27` ,
fetchRomanceMovies :`/discover/movie?api_key=${API_KEY}&with_genres=10749` ,
fetchDocumentaries :`/discover/movie?api_key=${API_KEY}&with_genres=99` ,
}

export default requests
