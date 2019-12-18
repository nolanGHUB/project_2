import axios from 'axios'
const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = process.env.REACT_APP_API_KEY


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
  const res = await axios.get(`${baseUrl}tv/${id}/credits?api_key=${apiKey}&language=en-US`)
  return (res.data.cast)
}

export const SearchIdForVideo = async (id) => {
  const res = await axios.get(`${baseUrl}tv/${id}/videos?api_key=${apiKey}&language=en-US`)
  return (res.data.results)
}

export const SearchDiscovery = async (genre, startDate, endDate) => {
  const res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=d2c1ad868a67300815d8e695d43da4ed&language=en-US&sort_by=popularity.desc&first_air_date.gte=1970-01-01&first_air_date.lte=2010-12-25&page=1&timezone=America%2FNew_York&with_genres=35&include_null_first_air_dates=false`)
  return (res.data);
}