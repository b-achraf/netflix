const API_KEY = "f26aba8d590e51fdaca19e4fca2979fd"
const requests = {
    fetchNetflixOriginals: `movie/550?api_key=${API_KEY}`,
    trendingNow: `discover/tv?api_key=${API_KEY}&with_networks=213`
}
export default requests