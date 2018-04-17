import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import Info from 'UI/Info';
import ButtonControlPane from 'UI/ButtonControlPane';

import Loading from 'Animation/Loading';
import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import SlideUD from 'Animation/SlideUD';

import UserManagerWindow from "Windows/UserManager";

import {
  view as SingleOptionQuestions,
  actions as SingleOptionQuestionsActions
} from 'Connected/SingleOptionQuestions';
import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';

import TextAndImag from 'UI/TextAndImag';
import SingleQuestion from 'UI/SingleQuestion';
import changeAlpToNum from 'Algorithm/changeAlpToNum';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class QiangHua extends React.PureComponent {

  constructor( props ){
    super( props );

    this.questions = [];
    this.state = {
      end: false
    };
  }

  loadQuestions = ( ) => {
    this.props.loadPortContent({
      url: "/api/logicQianghua",
      body: {
        username: this.props.username
      },
    });
    this.props.loadQuestions({
      url: "/api/logicQianghua.php",
      body: {
        username: this.props.username
      },

      parser: response => {
        var all = [];
        for( var i = 0 ; i < response.timu.length ; i++ ){
          response.timu[i].map ( one => all.push(one) )
        }
        //console.log(all)
        return all.map(one => ({
           questionId: one.id,
           options: [one.op_one , one.op_two , one.op_three , one.op_four , one.op_five],
           rightKey: changeAlpToNum( one.answer ),
           question: one.question,
           analysis: one.analysis,
         }) )

      }
    })
  }



  submitQuestions = () => {
    const {
      username,
      content,
      questions,
      submitQuestionState,
      submiting,
      lockAndShow
    } = this.props;
    console.log(questions)
    var submitTime = submitQuestionState.resolved;
    if( submiting ){
      return;
    }

    var question_id = "";
    var RightOrWrong = "";
    for ( var i = 0 ; i < questions.length ; i++ ){
      question_id += `${questions[i].questionId}*`;
      if( questions[i].choosed !== questions[i].rightKey ){
        RightOrWrong += `${1}*`;
      }
      if( questions[i].choosed == questions[i].rightKey ){
        RightOrWrong += `${0}*`;
      }

    }

    console.log(username,content.chapter_name,question_id,RightOrWrong)
    this.props.submitQuestions({
      url: "/api/logicQianghuaTongji",
      body: {
        username: username,
        dalei: content.chapter_name,
        question_id: question_id,
        RightOrWrong: RightOrWrong
        //time: submitTime + 1
      }
    });
    //if( ( ( submitTime + 1 ) & 1 ) === 0 ){
      for( var i = 0; i < questions.length ; i++ ){
        lockAndShow( questions[i].questionId );
      }
    //}
  }

 componentDidMount(){
   this.loadQuestions();
 }


  render(){
    const { end } = this.state;
    const {
      submitQuestionState,
      loadQuestionState,
      loadContent,
      loadContentState,
      ined,
      questions,
      content,
      setChoice
    } = this.props;
    //console.log(questions,content)
    console.log(this.props)

    return (
      <React.Fragment>
        <Prompt
          when={end==false}
          message="you need to do it again, are you sure to quit?"
        />
        {content.flag == 1 ?
        <div>

        <div className = {style.pageTitle}> 强化练习 </div>

        <div className = {style.logic_knowledge}>
          <Loading
            loading = {loadQuestionState.pending}
            wasLoaded = {loadQuestionState.resolved}
            lastFailed = {loadQuestionState.lastFailed}
            reloader = {this.loadQuestions}
            center
          >
            <SlideRL play={ined}>
              <h4 className = {style.dalei}> {content.chapter_name} </h4>
              <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test"/>
              <Button className = {style.button} text = {"确认提交"} onClick={this.submitQuestions}/>
            </SlideRL>
          </Loading>
        </div>
      </div>
      :
      content.flag == 2 ? <Info info = "您还没有完成入口测试，请先完成入口测试！"/> :
      <Info info = "您还没有完成重点习题，请先完成重点习题！"/>
    }


      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
    submitQuestionState: {
      onResolved: function(){
        //this.nextStep()
      },
      onRejected: function(){
        this.props.alert( "失败" )
      }
    },

  }),
  protect({
    logined: {
      satisfy: l => l === true,
      block(){
        const { openWindow , history, closeMask , openMask } = this.props;
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
  }),
  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
      questions: state.SingleOptionQuestions.content,
      loadQuestionState: state.SingleOptionQuestions.loadState,
      submitQuestionState: state.SingleOptionQuestions.submitState,
      content: state.PortTest.content,
      loadContentState: state.PortTest.loadState,
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch )
    })
  )],
  QiangHua
);