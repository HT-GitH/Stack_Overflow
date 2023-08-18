import React from 'react'
import { useNavigate,useLocation, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  // const user = null;
  var User = useSelector((state) => (state.currentUserReducer)) 
  const navigate = useNavigate()

  const questionsList = useSelector((state) => state.questionsReducer);

  // var questionsList = [{ 
  //       _id: 1,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 2,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo db", "express js"],
  //       userPosted: "mano",
  //       userId: 1,
  //       askedOn: "jan 1",
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 2,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   },{ 
  //       _id: 3,
  //       upVotes: 3,
  //       downVotes: 2,
  //       noOfAnswers: 0,
  //       questionTitle: "What is a function?",
  //       questionBody: "It meant to be",
  //       questionTags: ["javascript", "R", "python"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userId: 1,
  //       answer: [{
  //           answerBody: "Answer",
  //           userAnswered: 'kumar',
  //           answeredOn: "jan 2",
  //           userId: 2,
  //       }]
  //   }]
  
  const location = useLocation()

  const redirect = ()=>{
    navigate('/Auth')
   }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>{
       location.pathname==='/' ?<h1>Top Questions</h1> : <h1>All Questions</h1>}
      <Link to={User===null ? redirect(): navigate("/AskQuestion")} className='ask-btn'>Ask Question</Link>
      </div>
    <div>{
      questionsList.data === null ?
      <h1>Loading...</h1>:
      <>
      <p> {questionsList.data.length} questions</p>
      <QuestionList questionList={questionsList.data} />
      </>
      }
    </div>
    </div>
  )
}

export default HomeMainbar
