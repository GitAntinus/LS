import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import Info from 'UI/Info';
import ButtonControlPane from 'UI/ButtonControlPane';
import LogicTestChart from 'UI/LogicTestChart';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import {
  view as SingleSubjectTest,
  actions as SingleSubjectTestActions
} from 'Connected/SingleSubjectTest';

import changeAlpToNum from 'Algorithm/changeAlpToNum';
import decideNextQuestion from 'Algorithm/decideNextQuestion';
import logicTestRightRate from 'Algorithm/logicTestRightRate';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class EnglishTest extends React.PureComponent {

  constructor( props ){
    super( props );
  }

  loadQuestions = () => {
    this.props.loadQuestions({
      url: "/api/logicTest",

      /*parser: response => {
        function getRightKey( char ){
          char = char.toLowerCase();
          return char.charCodeAt(0) - "a".charCodeAt(0);
        }

        var all = [];
        all.concat( respose.easy );
        all.concat( respose.meddium );
        all.concat( respose.hard );
        return all.map( one => ({
          questionId: one.id,
          options: one.option,
          rightKey: getRightKey( one.answer ),
          question: one.question,
          analysis: one.analysis,
          type: one.type
        }))
      }*/
    })
  }


  submitQuestions = () => {
    const {
      username,
      questions,
      submitQuestionState,
      submiting,
    } = this.props;
    console.log(questions)

    var submitTime = submitQuestionState.resolved;
    if( submiting ){
      return;
    }

    //var right_rate0 , right_rate1 , right_rate2 , right_rate3 , right_rate4 , right_rate5 , right_rate6 , right_rate7 , right_rate8 ,
        //right_rate9 , right_rate10 , right_rate11 , right_rate12 , right_rate13 , right_rate14 = "";
    var right_rate0 = "";  var right_rate1 = ""; var right_rate2 = "";var right_rate3 = "";var right_rate4 = "";
    var right_rate5 = "";var right_rate6 = "";var right_rate7 = "";var right_rate8 = "";var right_rate9 = "";
    var right_rate10 = "";var right_rate11 = "";var right_rate12 = "";var right_rate13 = "";var right_rate14 = "";
    var right_rate = logicTestRightRate( questions );
    console.log(right_rate)

    right_rate0 += right_rate[0];
    right_rate1 += right_rate[1];
    right_rate2 += right_rate[2];
    right_rate3 += right_rate[3];
    right_rate4 += right_rate[4];
    right_rate5 += right_rate[5];
    right_rate6 += right_rate[6];
    right_rate7 += right_rate[7];
    right_rate8 += right_rate[8];
    right_rate9 += right_rate[9];
    right_rate10 += right_rate[10];
    right_rate11 += right_rate[11];
    right_rate12 += right_rate[12];
    right_rate13 += right_rate[13];
    right_rate14 += right_rate[14];
    //right_rate1 += right_rate[1];
    console.log(right_rate0 , Number(right_rate0))


    /*var right_rate = "";
    for ( var key in logicTestRightRate( questions) ){
      //right_rate += logicTestRightRate( questions)[key];
      //right_rate += ",";

      //right_rate = logicTestRightRate( questions)[key] + ",";
      //console.log(right_rate)
      right_rate = right_rate + logicTestRightRate( questions)[key] + " ";
    }*/
    //var right_rate = "1224";
    //var right_rate = "1 2 2 4";
    //logicTestRightRate(questions);
    //console.log(right_rate);
   this.props.submitQuestions({
      url: "/api/logicTestRightRate",
      body: {
        username: username,
        right_rate0: right_rate0,
        right_rate1: right_rate1,
        right_rate2: right_rate2,
        right_rate3: right_rate3,
        right_rate4: right_rate4,
        right_rate5: right_rate5,
        right_rate6: right_rate6,
        right_rate7: right_rate7,
        right_rate8: right_rate8,
        right_rate9: right_rate9,
        right_rate10: right_rate10,
        right_rate11: right_rate11,
        right_rate12: right_rate12,
        right_rate13: right_rate13,
        right_rate14: right_rate14,
        //right_rate: right_rate
        //right_rate: "1 3 3 4 4 5 5 5 5 5 5 5 5 5 5"
      }
    });
    //console.log(right_rate)

  }

  componentDidMount(){
    this.loadQuestions();
  }
  componentWillReceiveProps( NextProps ){
    if(this.props.testend !== NextProps.testend){
      this.submitQuestions()
    }
  }


  render(){
    const {
      submitQuestionState,
      loadQuestionState,
      ined,
      questions,
      next,
      forceNext,
      testend,
      username
    } = this.props;
    ///console.log(testend)

    //testend ? this.submitQuestions() : null;
    //this.submitQuestions();

    var all_type = ["逻辑语言" , "命题逻辑" , "词项逻辑" , "逻辑应用" , "演绎推理" , "归纳逻辑" ,
                    "假设" , "支持" , "削弱" , "评价" , "解释" , "推论" , "比较" , "描述" , "综合"];

    return (
      <React.Fragment>
        <Prompt
          when = {testend !== true}
          message = "you need to do it again, are you sure to quit?"
        />

        <div className={style.wrapper}>
            {  testend ?
               <div>
                 <Info info = "您的各类题型正确率统计如下："/>
                 <div className = {style.chart}>
                   <LogicTestChart  chartTitle = {all_type}
                                    chartData = {logicTestRightRate( questions)}
                   />
                 </div>
               </div>
                 :
                 <div>
                 <div className={style.question}>
                   <Loading
                      loading = {loadQuestionState.pending}
                      wasLoaded = {loadQuestionState.resolved}
                      lastFailed = {loadQuestionState.lastFailed}
                      reloader = {this.loadQuestions}
                      center
                   >
                     <SlideRL play = {ined}>
                        <SingleSubjectTest
                          submiter = { this.submitQuestions }
                          loader = {this.loadQuestions}
                        />
                     </SlideRL>
                  </Loading>

                   <Button className = {style.nextQuestion}
                           text = {"下一题"}
                           onClick = {forceNext}
                   />
                 </div>
              </div>
            }
        </div>
      </React.Fragment>
    );
  }
};

export default applyHOCs([

  /*protect({
    logined: {
      satisfy: l => l === true,
      block: ({ openWindow , history, closeMask , openMask }) => {
        openWindow( UserManagerWindow,
          {
            width: '380px',
            height: '300px',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
            },
            onCancel: () => history.goBack() || closeMask(),
            onSuccess: closeMask,
          }
        );
        openMask();
      }
    }
  }),*/
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      questions: state.SingleSubjectTest.content,
      loadQuestionState: state.SingleSubjectTest.loadState,
      submitQuestionState: state.SingleSubjectTest.submitState,
      lock: state.SingleSubjectTest.lock,
      show: state.SingleSubjectTest.show,
      testend: state.SingleSubjectTest.testendState
      //type: state.SingleSubjectTest.type,
      //level: state.SingleSubjectTest.level
    }),
    dispatch => ({
      ...bindActionCreators( SingleSubjectTestActions , dispatch ),
    })
  )],
  EnglishTest
);
