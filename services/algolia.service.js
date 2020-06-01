import axios from 'axios';

const config = {
  url : 'https://hn.algolia.com/api/v1/',
}

export async function getNews(searchType, params) {
  const urlParams = `?page=${params.page}&hitsPerPage=${params.hitsPerPage}`;
  const url = `${config.url}${searchType}${urlParams}`;
  const res = await axios.get(url);
  return res.data;
}