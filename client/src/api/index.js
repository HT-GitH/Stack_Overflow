import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("Profile")) {
//       req.headers.authorization = `Bearer ${
//         JSON.parse(localStorage.getItem("Profile")).token
//       }`;
//     }
//   });
export const logIn = (authData) => API.post('/user/login',authData)
export const signUp = (authData) => API.post('/user/SignUp',authData)
export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) => API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });