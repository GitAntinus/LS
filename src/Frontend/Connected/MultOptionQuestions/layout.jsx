import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import Checkbox from 'react-bootstrap';

import judgeWhichOption from 'Algorithm/judgeWhichOption';
import AppearUD from 'Animation/AppearUD';
import style from 'style';


class MultOptionQuestions extends React.PureComponent {
  constructor( props ){
    super( props );

    //this.options =  ["A 概念混淆" , "B 条件不充分" , "C 无法推出" , "D 以偏概全" , "E 非黑即白" , "F 因果无关" , "G 目的达不到" , "K 论据不成立" , "L 条件不必要" , "M 类比不当" , "N 不当假设" , "O 自相矛盾" , "P 存在他因" , "Q 措施不可行"];
    this.left_options = ["A 概念混淆" , "B 条件缺失" , "C 推断不出" , "D 以偏概全" , "E 非黑即白" , "F 因果无关" , "G 目的达不到"];
    this.right_options = ["K 论据不成立" , "L 条件不必要" , "M 类比不当" , "N 不当假设" , "O 自相矛盾" , "P 存在他因" , "Q 措施不可行"];
    this.state = {
      //color: "",
      lock: false,
      exampleShow: false,
      analysisShow: false,
      answerShow: false
    }
  }



  render(){
    const {
      name,
      example_article,
      article_analysis
    } = this.props;
    //console.log(this.props)
    var TextStyle1 = [];
    var TextStyle2 = [];
    if(this.state.lock){
      for(var i = 0 ; i < 7 ; i++){
        var right_option_num = judgeWhichOption(article_analysis);

        right_option_num.map((one) => {
          if(one < 7){TextStyle1[one] = style.right_Option;}
          else {TextStyle2[one-7] = style.right_Option;}
        })

    }
  }


    return (
      <div className="container">
        {/*<div className = {style.option_area}
        >
        {this.options.map( (oneOption , key) =>
          <div key = {key}>
            <input className = {style.checkbox} type="checkbox" readOnly = {this.state.lock ? "readonly" : ""}/>
            <label className = {TextStyle[key]}> {oneOption} </label><br/>
          </div>
        )}
      </div>*/}

        <div className = {style.leftOption}>
        {this.left_options.map( (oneOption , key) =>
          <div key = {key} style={{"background":"red"}}>
            <input className = {style.checkbox} type="checkbox" readOnly = {this.state.lock ? 'readonly' : ''}/>
            <label className = {TextStyle1[key]}> {oneOption} </label><br/>
          </div>
        )}
      </div>

      <div className = {style.rightOption}>
      {this.right_options.map( (oneOption , key) =>
        <div key = {key}>
          <input className = {style.checkbox} type="checkbox" />
          <label className = {TextStyle2[key]}> {oneOption} </label><br/>
        </div>
      )}
    </div>


     {/*<div className={style.commit}>
       <label onClick = { () => this.setState({lock: true})}> 确认提交 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({analysisShow: !this.state.analysisShow}) }> 答案解析 </label><br/>
       <label onClick = { () => this.setState({exampleShow: !this.state.exampleShow}) } > 参考范文 </label>&nbsp;&nbsp;&nbsp;
       <label > 谬误范例 </label><br/>
     </div>*/}
     <div className={style.commit}>
       <label onClick = { () => this.setState({lock: true})}> 确认提交 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({analysisShow: !this.state.analysisShow}) }> 答案解析 </label>&nbsp;&nbsp;&nbsp;
       <label onClick = { () => this.setState({exampleShow: !this.state.exampleShow}) } > 参考范文 </label>
     </div>

     {
       this.state.exampleShow ?
       <div className = {style.egArticle}>
         <p className = {style.article_title}>{name}</p>
         {example_article.map((onePara , key) =>
           <p key = {key}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara} </p>
         )}
       </div>
       :
       null
     }

     {
       this.state.analysisShow ?
       <div className = {style.egArticle}>

         {article_analysis.map((onePara , key) =>
         <div key = {key}>
           <p className = {style.type}> &nbsp;&nbsp;&nbsp;&nbsp;{onePara.error_type} </p>
           <p> &nbsp;&nbsp;&nbsp;&nbsp;{onePara.error_analysis} </p>
         </div>
         )}
       </div>
       :
       null
     }




      </div>


    );
  }
};

export default connect(
  state => ({
    example_article: state.WriteContent.example_article,
    article_analysis: state.PortTest.content,
    choice: state.ButtonExpand.choice,
    name: state.WriteContent.name,
  }),

)( MultOptionQuestions );