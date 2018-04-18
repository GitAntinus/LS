import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Prompt } from 'react-router';
import style from 'style';

import LogicTest from 'Page/Learning/LogicLearning/LogicTest';
import LearningTypeSelect from 'Page/Learning/LogicLearning/LearningTypeSelect';
import LogicReview from 'Page/Learning/LogicLearning/LogicReview';
import LogicHelp from 'UI/Help/LogicHelp';
import Button from 'UI/Button';
import Info from 'UI/Info';
//import LearningTypeSelect from 'UI/LearningTypeSelect';

import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

//import UserManagerWindow from "Windows/UserManager";
//import { view as UserManager } from 'Connected/UserManager';
import Login from 'Page/Login';
import  {
  view as SubjectSelect
} from 'Connected/SubjectSelect';

class LogicLearning extends React.PureComponent {
  constructor( props ){
    super( props );

    this.type = ["入口测试" , "进入学习" , "开始复习" , "查看帮助"];
  }

  render(){
    const{
      username,
      logined,
      newTo,
      choice
    } = this.props;
    //console.log(this.props);
    return (
      <React.Fragment>
      { logined == false ?  <Login/> :

        <div className = {style.wholePage}>

          <div className = {style.HUD}>
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
              newTo[1] == 1 ?
              <LogicTest/> : <Info info = {"您已经完成测试!"} /> :
             choice == 1 ? <LearningTypeSelect/> :
             choice == 2 ? <LogicReview/> : <LogicHelp/>
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
    })
  )],
  LogicLearning
);

/*class LogicSubject extends React.PureComponent {

  constructor( props ){
    super( props );

    this.subject = ["入口测试" , "进入学习" , "复习" , "数据统计" , "帮助"];
    this.state = {
      test : true,
      learning : false,
      review : false,
      statistics : false,
      help : false,
    }
  }

  showIntroduction = (num) => {
    num == 0 ? this.setState({test: true , learning: false , review: false , statistics: false , help: false }) :
    num == 1 ? this.setState({test: false , learning: true , review: false , statistics: false , help : false }) :
    num == 2 ? this.setState({test: false , learning: false , review: true , statistics: false , help : false }) :
    num == 3 ? this.setState({test: false , learning: false , review: false , statistics: true , help : false}) :
    this.setState({test: false , learning: false , review: false , statistics: false , help : true})

  }

  render(){
    const{
      username,
      logined
    } = this.props;
    //Request.getSession().setAttribute("username",username)
    //HttpServletRequest = ServletActionContext.getRequest();
    /*var customerId = sessionStorage.customerId;
    console.log(customerId)
    if(customerId == undefined){
      <UserManager loginOrSignup = "login"/>
    }*/
    /*console.log(sessionStorage.getItem("user"));
    if(sessionStorage.getItem("user") == "undefined"){
      <Login/>
    }*/
    //var customerId = sessionStorage.username;
    //var user = '$username'.val();
    //console.log(customerId)
    //console.log(session["username"])
    //Session["Name"] = username;

    /*var TextStyle = [];
    this.state.test ? TextStyle[0] = style.chosedText : TextStyle[0] = style.normalText;
    this.state.learning ? TextStyle[1] = style.chosedText : TextStyle[1] = style.normalText;
    this.state.review ? TextStyle[2] = style.chosedText : TextStyle[2] = style.normalText;
    this.state.statistics ? TextStyle[3] = style.chosedText : TextStyle[3] = style.normalText;
    this.state.help ? TextStyle[4] = style.chosedText : TextStyle[4] = style.normalText;

    if(logined){  sessionStorage.setItem("user",username); }

    return (
      <React.Fragment>
      {/*sessionStorage.getItem("user") == "undefined" ?
        <UserManager loginOrSignup = "login"  onCancel = {() => history.back()}/>:*/
        /*<div className = {style.wholePage}>

          <div className={style.HUD}>
            <div className={style.title}> 学习系统 </div>
          </div>

          <div className = {style.subjectText}>
            <br/><img className = {style.picture} src = "/static/images/admin.jpg"/>
            <br/><div className = {style.username}> 用户名 </div><br/>
            <div>
              {this.subject.map((sub , key) =>
                <div key = {key} className = {TextStyle[key]}
                    onMouseMove = { () => this.showIntroduction(key) }
                    onClick = { () => this.showIntroduction(key) }
                >{sub}</div>
              )}
            </div>
          </div>

          <div className = {style.mainContent}>
            {this.state.test ? <LogicTest/> :
            this.state.learning ? <div><KnowLedge/><Button text = {"点击进入重点题型"}/></div> :
            this.state.review ? <div>复习</div> :
            this.state.statistics ? <div>统计表单</div> :
            <LogicHelp/>}
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
/*  makePage,
  connect(
    state => ({
      logined: state.UserManager.logined,
      username: state.UserManager.name,
    }),
    dispatch => ({
      //...bindActionCreators( ButtonExpandActions , dispatch),
    })
  )],
  LogicSubject
);*/
