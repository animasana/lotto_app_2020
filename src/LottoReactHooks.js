import React from 'react';
import Lotto from './Lotto';
import './LottoReact.css';

function LottoReactHooks(props) {    
    const lotto = new Lotto(5, 6, 45);
    const [lottoStr, setLottoStr] = React.useState(lotto.str());

    const handleClick = (event) => {
        event.preventDefault();
        setLottoStr(lotto.str());  
    }

    const strToLines = (str) => {
        return str.split('\n').map((line, index) => <span key={'line-' + index}>{line}<br /></span>);
    }

    const date = new Date();
    const yyyy = date.getFullYear();
    const mm   = date.getMonth() + 1;
    const dd   = date.getDate();

    return (
        <React.Fragment>
            <div className="lottoStyle">
                <span>{yyyy}년 {mm}월 {dd}일</span>            
                <hr />
                <span>{props.name}</span>                                
                <hr />                    
                <span>{strToLines(lottoStr)}</span>
                
            </div>
            <div className="buttonStyle">
                <button onClick={handleClick}>로또 재발행</button>
            </div>                        
        </React.Fragment>
    )
}

export default LottoReactHooks;