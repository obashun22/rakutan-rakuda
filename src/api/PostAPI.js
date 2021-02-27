import axios from 'axios';

export const getAllPosts = () => {
  return axios.get('http://localhost:3000/api/v1/posts/');
};

export const getLatestPosts = () => {
  return axios.get('http://localhost:3000/api/v1/posts/latest');
};

export const getSearchPosts = (keyword) => {
  return axios.get('http://localhost:3000/api/v1/posts/search', {
    params: {
      keyword: keyword
    }
  });
};

export const postNewPost = (lecture, teacher, category, year, term, comment, evaluation, cause) => {
  return axios.post('http://localhost:3000/api/v1/posts', {
    lecture: lecture,
    teacher: teacher,
    category: category,
    year: year,
    term: term,
    comment: comment,
    evaluation: evaluation,
    cause: cause,
  });
};