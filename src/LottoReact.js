import React from 'react';
import Lotto from './Lotto';
import './LottoReact.css';

class LottoReact extends React.Component {
    lotto = new Lotto(5, 6, 45);

    state = {                    
        lottoString: this.lotto.str(),                        
    };          

    clickHandler = (e) => {
        e.preventDefault();
        this.setState({lottoString: this.lotto.str()});  
    };

    strToLines = (str) => {
        return str.split('\n').map((line, index) => <span key={'line-' + index}>{line}<br /></span>);
    }
    
    render() {                   
        const date = new Date();
        const yyyy = date.getFullYear();
        const mm   = date.getMonth() + 1;
        const dd   = date.getDate();
        
        const { name } = this.props;
        const { lottoString } = this.state;

        return (                        
            <React.Fragment>
                <div className="lottoStyle">
                    <span>{yyyy}년 {mm}월 {dd}일</span>            
                    <hr />
                    <span>{name}</span>                                
                    <hr />                    
                    <span>{this.strToLines(lottoString)}</span>
                    
                </div>
                <div className="buttonStyle">
                    <button onClick={this.clickHandler}>로또 재발행</button>
                </div>                        
            </React.Fragment>
        );        
    }
}

export default LottoReact;