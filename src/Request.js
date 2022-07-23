const key = '594fd8ebef9cf82c8c8035c58b93bd09'

const requets = {
    requestTopRate:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&&language=en-US&page=1`,
    requestLastest:`https://api.themoviedb.org/3/movie/latest?api_key=${key}&&language=en-US`,
    requestNowPlaying:` https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&&language=en-US&page=1`,
}
export default requets