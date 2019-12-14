import axios from 'axios'
const baseUrl = ""
const apiKey = "d2c1ad868a67300815d8e695d43da4ed"

 
export const SearchTvByTitle = async (title) => {
  const res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${title}&page=1`);
  return (res.data.results);
}