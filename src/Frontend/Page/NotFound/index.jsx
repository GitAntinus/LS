import React from 'react';
import { connect } from 'react-redux';
import Button from 'UI/Button';
import style from 'style';

import makePage from 'direct-core/makePage';

import SlideLR from 'Animation/SlideLR';
import SlideRL from 'Animation/SlideRL';
import SlideDU from 'Animation/SlideDU';
import Fade from 'Animation/Fade';

class NotFoundPage extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      play1: false,
      play2: false
    };
  }

  showGoBack = () => {
    this.setState({
      play2: true
    })
  }

  showNotFound = () => {
    this.setState({
      play1: true
    });
  }

  render(){
    const { match , history , location , ined } = this.props;
    return (
      <div className={style.container}>
        <div className={style.goBackContainer}>
          <SlideDU play={this.state.play2}>
            <Button
              onClick={history.goBack}
              text="<-go back"
            />
          </SlideDU>
        </div>
        <div className={style.numberContainer}>
          <SlideLR play={ined} onEntered={this.showNotFound}>
            <div className={style.number}>
              404
            </div>
          </SlideLR>
        </div>
        <div className={style.textContainer}>
            <Fade play={this.state.play1} onEntered={this.showGoBack}>
              <div className={style.text}>
                Not Found
              </div>
            </Fade>
        </div>
      </div>
    );
  }
};

export default makePage( NotFoundPage );
