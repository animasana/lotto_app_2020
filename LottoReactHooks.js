import React from "react";
import Lotto from "./Lotto";
import "./LottoReact.css";

function LottoReactHooks(props) {
  const [lotto, setLotto] = React.useState(new Lotto().toString());

  const strToLines = (str) => {
    return str.split("\n").map((line, index) => (
      <span key={"line-" + index}>
        {line}
        <br />
      </span>
    ));
  };

  const handleClick = (event) => {
    event.preventDefault();
    setLotto(lotto.str());
  };

  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return (
    <React.Fragment>
      <div className="lottoStyle">
        <span>
          {yyyy}년 {mm}월 {dd}일
        </span>
        <hr />
        <span>{props.name}</span>
        <hr />
        <span>{strToLines(lotto)}</span>
      </div>
      <div className="buttonStyle">
        <button onClick={handleClick}>로또 재발행</button>
      </div>
    </React.Fragment>
  );
}

export default LottoReactHooks;
