import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import Button from 'UI/Button';
import Info from 'UI/Info';
import ButtonControlPane from 'UI/ButtonControlPane';
//import SingleQuestion from 'UI/SingleQuestion';

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
import LogicChapterError from 'UI/LogicChapterError';
import changeAlpToNum from 'Algorithm/changeAlpToNum';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class SimulationTest extends React.PureComponent {

  constructor( props ){
    super( props );

    this.questions = [];
    this.state = {
      end: false,
    };
  }

  loadQuestions = ( ) => {
    this.props.loadQuestions({
      url: "/api/logicSimulationTest",

      parser: response => {
        var all = [];
        all.push(response.luojiyuyan,response.mingtiluoji,response.cixiangluoji,response.luojiyingyong,response.yanyituili,response.guinaluoji,
          response.jiashe,response.zhichi,response.xueruo,response.pingjia,response.jieshi,response.tuilun,response.bijiao,response.miaoshu,response.zonghe
        )
        var all_questions = [];
        for(var i = 0 ; i < all.length ; i++){
          all[i].map((onetype,key) => all_questions.push(onetype))
        }
        //console.log(all)
        console.log(all_questions)
        return all_questions.map(one => ({
           questionId: one.id,
           type: one.type,
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
      if( questions[i].choosed !== undefined && questions[i].choosed.toString() === questions[i].rightKey ){
        RightOrWrong += `${0}*`;
      }
      else {
        RightOrWrong += `${1}*`;
      }

    }

    console.log(username,content.chapter_name,question_id,RightOrWrong)
  //  this.props.submitQuestions({
    //  url: "/api/logicCeShiTongJi",
      //body: {
      //  username: username,
      //  dalei: content.chapter_name,
      //  question_id: question_id,
      //  RightOrWrong: RightOrWrong
        //time: submitTime + 1
    //  }
  //  });
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
      setChoice,
    } = this.props;
    console.log(questions)
    var chapter_name = ["逻辑语言" , "命题逻辑" , "词项逻辑" , "逻辑应用" , "演绎推理" , "归纳逻辑" ,
                        "假设" , "支持" , "削弱" , "评价" , "解释" , "推论" , "比较" , "描述" , "综合"];
    //for (var i = 0 ; i < )

    return (
      <React.Fragment>
        <Prompt
          when={end==false}
          message="you need to do it again, are you sure to quit?"
        />

        <div className = {style.moniceshi}> 模拟测试 </div>

        <Loading  lastFailed = {loadQuestionState.lastFailed}
                  reloader = {this.loadQuestions}
                  center
        >
        <SlideRL play={ined}>
          <div>
            <h4 className = {style.dalei}> {content.chapter_name} </h4>

           <SingleOptionQuestions loader = {this.loadQuestions} subject = "logic_test"/>
           <strong align = "center"><div style = {{"color":"red"}}>点击确认提交，查看正确答案</div></strong>
           <Button className = {style.submitButton} text = {"确认提交"} onClick = {this.submitQuestions}/>
        </div>
             {/* {
              // question
              questions.map(onequestion =>
              <div>{console.log(onequestion.type)}
              <h5>{onequestion.type}</h5>

              <SingleQuestion key = {onequestion.questionId} {...onequestion} subject = "logic_test" onSetChoice={( cid ) => setChoice( onequestion.questionId , cid )}/>
              </div>
            )
            } */}


        </SlideRL>
        </Loading>


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
      chapter_name: state.LearningTypeSelect.chapter_name,
      ceshiData: state.ZhentiPerYearTongji.tongji,
      chapterData: state.ZhentiAllYearTongji.tongji
    }),
    dispatch => ({
      ...bindActionCreators( SingleOptionQuestionsActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch ),
      //...bindActionCreators( ZhentiPerYearTongjiActions , dispatch ),
      //...bindActionCreators( ZhentiAllYearTongjiActions , dispatch ),
      //...bindActionCreators( LearningTypeSelectActions , dispatch )
    })
  )],
  SimulationTest
);
