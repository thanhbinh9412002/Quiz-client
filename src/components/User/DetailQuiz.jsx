import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import _ from 'lodash';
import { getDataQuiz, postSubmitQuiz } from '../../services/ApiFunction';
import './scss/DetailQuiz.scss'
import Question from './Question';
import ModalResult from './ModalResult';

const DetailQuiz = () => {
    const param = useParams();
    const location = useLocation();
    // console.log(location)
    const quizId = param.id;

    const [isShowModalResult, setIsShowModalResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState({});

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        fetchQuestions();
    },[quizId])

    const fetchQuestions = async() =>{
        let res = await getDataQuiz(quizId);
        if(res && res.EC === 0){
            let raw =  res.DT;
            let data = _.chain(raw)
                        .groupBy("id")
                        .map((value, key) => {
                            let answers = [];
                            let questionDescription, image = null;
                            value.forEach((item, index) =>{
                                if(index === 0){
                                    questionDescription = item.description;
                                    image = item.image;
                                }
                                item.answers.isSelected = false;
                                answers.push(item.answers);
                            })
                            return {questionId: key, answers, questionDescription, image }
                        })
                        .value();
            setDataQuiz(data);
        }
    }

    const handlePrev = () =>{
        if(index-1 <0) return;

        setIndex(index-1);
    }

    const handleNext = () =>{
        if(dataQuiz && dataQuiz.length > index+1)
            setIndex(index+1);
    }

    const handleFinishQuiz = async() =>{
        let payload = {
            quizId: +quizId,
            answers: []
        };
        let answers = [];
        if(dataQuiz && dataQuiz.length > 0){
            dataQuiz.forEach(question =>{
                // let object = {};
                let questionId = question.questionId;
                let userAnswerId = [];
                question.answers.forEach(a =>{
                    if(a.isSelected === true){
                        userAnswerId.push(a.id)
                    }
                })
                answers.push({
                    questionId : +questionId,
                    userAnswerId : userAnswerId
                })
            })
            payload.answers = answers;

            let res = await postSubmitQuiz(payload);
            console.log('res:', res)
            if(res && res.EC === 0){
                setIsShowModalResult(true)
                setDataModalResult({
                    countCorrect: res.DT.countCorrect,
                    countTotal:  res.DT.countTotal,
                    quizData: res.DT

                })
            }
            else{
                alert("sorry")
            }
        }
    }

    const handleCheckBox = (answerId, questionId) =>{
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(item => +item.questionId === +questionId)
        if(question && question.answers){
            let b = question.answers.map(item => {
                if(item.id === +answerId){
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
            question.answers = b;
        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
        if(index > -1){
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    }

  return (
    <div className='detail-quiz-container'>
        <div className='left-container'>
           <div className='title'>
                Quiz {quizId}: {location?.state?.quizTitle}
           </div>
           <div className='q-body'>
                <img src="" alt="" />
           </div>
           <div className='q-content'>
                <Question index={index} handleCheckBox={handleCheckBox}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}/>
           </div>
           <div className='footer'>
                <button className='btn btn-secondary' onClick={()=>handlePrev()}>Prev</button>
                <button className='btn btn-primary' onClick={()=>handleNext()}>Next</button>
                <button className='btn btn-warning' onClick={()=>handleFinishQuiz()}>Finish</button>
            </div>
        </div>
        <div className='right-container'>
             count down
        </div>
        <ModalResult show={isShowModalResult}
                    setShow={setIsShowModalResult}
                    dataModalResult={dataModalResult}/>
    </div>
  )
}

export default DetailQuiz