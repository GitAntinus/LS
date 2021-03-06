import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import EngTest from 'Page/Learning/EnglishLearning/EngTest';
import EngLearningTypeSelect from 'Page/Learning/EnglishLearning/EngLearningTypeSelect';
import EngReview from 'Page/Learning/EnglishLearning/EngReview';
import EngChart from 'Page/Learning/EnglishLearning/EngChart';
import EnglishHelp from 'UI/Help/EnglishHelp';
import Button from 'UI/Button';
import Info from 'UI/Info';
//import LearningTypeSelect from 'UI/LearningTypeSelect';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

//import UserManagerWindow from "Windows/UserManager";
import {
  // view as UserManager,
  actions as UserManagerActions
} from 'Connected/UserManager';
import Login from 'Page/Login';
import  {
  view as SubjectSelect
} from 'Connected/SubjectSelect';

class EnglishLearning extends React.PureComponent {
  constructor( props ){
    super( props );

    this.type = ["词汇测试" , "进入学习" , "开始复习" , "统计图表", "查看帮助"];
  }

  render(){
    const{
      username,
      logined,
      newTo,
      choice
    } = this.props;
    //console.log(this.props);

    var user = sessionStorage.getItem("user");
    if(sessionStorage.getItem("user") == "undefined" || sessionStorage.getItem("user") == "" ){
      <Login/>
    }
    else{
      this.props.setUser(user,true);
      sessionStorage.setItem("user",user);
    }

    return (
      <React.Fragment>
      {
        logined !== true ?
          <div>
            <Info info = "您还没有登录，请先登录，再进行学习!"/>
            {/* <Login/> */}
          </div> :          

        <div className = {style.wholePage}>

          <div className = {style.pagetitle}>
            <div className = {style.title}> 学习系统 </div>
            <div className = {style.goback} onClick = {() => history.back()}> 返回 </div>
          </div>

        <div className = {style.subjectText}>
            <br/><img className = {style.picture} src = "/static/images/admin.jpg"/>
            <br/><div className = {style.username}> {username} </div><br/>
            <SubjectSelect text = {this.type} normalStyle = {style.normalText} choosedStyle = {style.chosedText} />
          </div>

          <div className = {style.mainContent}>
            {choice == 0 ?
              // newTo[0] == 1 ?
              <EngTest/> :
              // <Info info = {"您已经完成测试!"} /> :
             choice == 1 ? <EngLearningTypeSelect/> :
             choice == 2 ? <EngReview/> :
             choice == 3 ? <EngChart/>:
             <EnglishHelp/>
            }
          </div>


        </div>}
      </React.Fragment>
    );
  }
};

export default applyHOCs([
  asyncProcessControl({
  }),
  /*protect({
    logined: {
      satisfy: l => l === true,
      block: ({ openWindow , history, closeMask , openMask }) => {
        openWindow( UserManagerWindow,
          {
            width: '40%',
            height: '70%',
            position: {
              top: 'calc( 50% - 190px)',
              left: 'calc( 50% - 150px)'
              //top: 'calc( 50% - 190px)',
              //left: 'calc( 50% - 150px)'
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
      newTo: state.UserManager.newTo,
      choice: state.SubjectSelect.choice
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
      ...bindActionCreators( UserManagerActions , dispatch ),
    })
  )],
  EnglishLearning
);
