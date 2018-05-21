import React from 'react';
import style from 'style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from 'UI/Button';

import {
  view as LearningTypeSelect,
  actions as LearningTypeSelectActions
} from 'Connected/LearningTypeSelect';
import {
  view as EnglishArticle,
  actions as EnglishArticleActions
} from 'Connected/EnglishArticle';
import {
  view as PortTest,
  actions as PortTestActions
} from 'Connected/PortTest';


import protect from 'direct-core/protect';
import asyncProcessControl from 'direct-core/asyncProcessControl';
import makePage from 'direct-core/makePage';
import applyHOCs from 'direct-core/applyHOCs';

class Shengcinanju extends React.PureComponent {
  constructor( props ){
    super( props );
    this.state = {
      getArticleId: false,
    }
  }

  componentDidMount(){
    // this.loadArticleId();
    this.loadShengCi();
    this.loadNanJu();
  }

  loadShengCi = () => {
    this.props.loadPortContent({
      url: "/api/eng_getUserWord",
      body: {
        username:  this.props.username,
        ariticleId: 18,
        // articleId: this.props.articleId2,
      }
    })
  }

  loadNanJu = () => {
    this.props.loadPortContent3({
      url: "/api/eng_engToCh",
      body: {
        username:  this.props.username,
        articleId: 18,
        // articleId: this.props.articleId2,
      }
    });
  }

  loadArticleId = () => {
    this.props.loadPortContent2({
      url: "/api/eng_getArticleId",
      body: {
        username:  this.props.username,
      }
    });
    this.setState({ getArticleId: true });
  }


  render(){

    const {
      setLearningType,
      learningType,
      articleId,
      articleId2,
      shengci,
      nanju,
    } = this.props;

    console.log(this.props.articleId2);
    // console.log(nanju);
    // console.log(shengci);

    return(
      <React.Fragment>
        <div>
          <div className={style.pageTitle}>本课生词：</div>
          <br/>
          <div className={style.chtoengall}>
            {
              shengci[0] == undefined?null:
              shengci.map((word, key)=>
              <div key = {key} >
                { word.word_l }
                <br/>
                { word.translate }
              </div>
              )
            }
          </div>

          <br/>



          <br/>
          <div className={style.pageTitle}>本课难句：</div>
          <br/>
          <div className={style.chtoengall}>
          {
            nanju == undefined?null:
            nanju.map((sentence, key)=>
            <div key = {key} >
              { sentence.english }
              <br/>
              { sentence.chinese }
            </div>
            )
          }
        </div>
          <br/>


          {/* <Button text="进入汉译英" onClick = {() => {setLearningType("英语汉译英")}}/> */}
          {
            <div className={style.ShowEngAndReturn}>
            <Button text="返回英语学习主页面" onClick={() => {setLearningType("英语主页面")}}/>
            &nbsp;&nbsp;
            <Button text="进入汉译英" onClick={() => {setLearningType("英语汉译英")} }/>
            </div>
          }
        </div>

      </React.Fragment>
    )
  }

}


export default applyHOCs([
  makePage,
  connect(
    state => ({
      learningType: state.LearningTypeSelect.learningType,
      username: state.UserManager.name,
      articleId: state.EnglishArticle.articleId,
      shengci: state.PortTest.content,
      nanju: state.PortTest.content3,
      articleId2: state.PortTest.content2.pre_artid,
    }),
    dispatch => ({
      ...bindActionCreators( EnglishArticleActions , dispatch ),
      ...bindActionCreators( LearningTypeSelectActions , dispatch ),
      ...bindActionCreators( PortTestActions , dispatch),
    })
  )],
  Shengcinanju
);
// export default Shengcinanju
