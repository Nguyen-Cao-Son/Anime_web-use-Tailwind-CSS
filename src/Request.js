const key = '594fd8ebef9cf82c8c8035c58b93bd09'

const requets = {
    requestRate : ` https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=${key}`,
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`

}
export default requets