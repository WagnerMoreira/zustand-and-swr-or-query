// const options = {
//   headers: {
//     Authentication:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyMGY5ZTFmLWI5YTYtNGM5NS05ODA3LTgzNTFjNTc2NTdlYiIsInVzZXJuYW1lIjoid2FnbmVyIiwiaWF0IjoxNjc4MDUzMzE0fQ.5DUB3DLPsalZV64f_sfio39ejpaoqgA8XJiMspFS-8A",
//   },
// };

let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyMGY5ZTFmLWI5YTYtNGM5NS05ODA3LTgzNTFjNTc2NTdlYiIsInVzZXJuYW1lIjoid2FnbmVyIiwiaWF0IjoxNjc4MDUzMzE0fQ.5DUB3DLPsalZV64f_sfio39ejpaoqgA8XJiMspFS-8A",
};

const options = {
  method: "GET",
  headers: headersList,
};

// let response = await fetch("http://localhost:3001/api/tiles", options);

export const fetcher = (url) => fetch(url, options).then((res) => res.json());

export const API_BASE = "http://localhost:3001/api";
