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

export const SearchSimilarTvById = async (id) => {
  const res = await axios.get(`${baseUrl}tv/${id}/similar?api_key=${apiKey}&language=en-US`)
  return (res.data.results);
}

export const SearchTrendingTv = async () => {
  const res = await axios.get(`${baseUrl}trending/tv/week?api_key=${apiKey}`)
  return (res.data.results)
}

export const SearchTvAiringToday = async () => {
  const res = await axios.get(`${baseUrl}tv/airing_today?api_key=${apiKey}&language=en-US`)
  return (res.data.results)
}

export const SearchTvCredits = async (id) => {
  constres = await axios.get(`${baseUrl}tv/${id}/credits?api_key=${apiKey}&language=en-US`)
  return (res.data.cast)
}