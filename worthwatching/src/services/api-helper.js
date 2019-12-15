import axios from 'axios'
const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = "d2c1ad868a67300815d8e695d43da4ed"

 
export const SearchTvByTitle = async (title) => {
  const res = await axios.get(`${baseUrl}search/tv?api_key=${apiKey}&language=en-US&query=${title}&page=1`);
  return (res.data.results);
}

export const SearchTvById = async (id) => {
  const res = await axios.get(`${baseUrl}tv/${id}?api_key=${apiKey}&language=en-US`)
  return (res.data);
}