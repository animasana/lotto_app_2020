import React from "react";
import Lotto from "./Lotto";
import "./LottoReact.css";

const date = new Date();
const yyyy = date.getFullYear();
const mm = date.getMonth() + 1;
const dd = date.getDate();

const lottoObj = new Lotto();

function lottoToLines(lotto) {
  return lotto.split("\n").map((line, index) => (
    <span key={"line-" + index}>
      {line}
      <br />
    </span>
  ));
}

function LottoReactHooks(props) {
  const [lotto, setLotto] = React.useState(lottoObj.str());

  const handleClick = (event) => {
    event.preventDefault();
    setLotto(lottoObj.str());
  };

  return (
    <>
      <div className="lottoStyle">
        <span>
          {yyyy}년 {mm}월 {dd}일
        </span>
        <hr />
        <span>{props.name}</span>
        <hr />
        <span>{lottoToLines(lotto)}</span>
      </div>
      <div className="buttonStyle">
        <button onClick={handleClick}>로또 재발행</button>
      </div>
    </>
  );
}

export default LottoReactHooks;
