import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const Board = () => {
  let className = "bingo-ball__container";
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
  ];

  const [user, setUser] = useState("");

  const [chosen, setChosen] = useState('?');
  const [selectedNumbers, setSelectedNumbers] = useState(JSON.parse(localStorage.getItem('selectedNumbers')) || '');
  const chooseNumber = () => {
    let r;
    if(selectedNumbers.length < 75) {
      do {
        r = Math.floor(Math.random() * 75) + 1;
      }
      while (selectedNumbers.indexOf(r) > -1)
      setChosen(r)
      setSelectedNumbers([...selectedNumbers, r]);
    }
  };
  const reset = () => {
    setSelectedNumbers([]);
    setChosen('?');
    localStorage.removeItem('selectedNumbers');
  };
  useEffect(() => {
    localStorage.setItem("selectedNumbers", JSON.stringify(selectedNumbers));
  }, [selectedNumbers]);
  console.log(selectedNumbers);

  return (
    <Row>
      <Col xs={12} md={12} lg={3}>
        <div className="number-grid">
        <div className="selected__bingo-grid__row">
          <div>
            <div className="selected__bingo-ball">
              <div className="selected__bingo-ball__text">{chosen}</div>
            </div>
          </div>
        </div>
        <button onClick={chooseNumber}>Select Number</button>
        </div>
      </Col>
      <Col xs={12} md={12} lg={9}>
        <div className="bingo-grid">
          {numbers.map((number, index) =>
            number >= 1 && number <= 15 ? (
              <div className={`bingo-grid__row ${selectedNumbers.includes(number) ? "disactive" : ""}`} id={index+1} key={index}>
                <div className={className}>
                  <div className="bingo-ball bingo-ball">
                    <div className="bingo-ball__text">{number}</div>
                  </div>
                </div>
              </div>
            ): number >= 16 && number <= 30 ? (
              <div className={`bingo-grid__row blue ${selectedNumbers.includes(number) ? "disactive" : ""}`} id={index+1} key={index}>
                <div className={className}>
                  <div className="bingo-ball bingo-ball">
                    <div className="bingo-ball__text">{number}</div>
                  </div>
                </div>
              </div>
            ) : number >= 31 && number <= 45 ? (
              <div className={`bingo-grid__row green ${selectedNumbers.includes(number) ? "disactive" : ""}`} id={index+1} key={index}>
                <div className={className}>
                  <div className="bingo-ball bingo-ball">
                    <div className="bingo-ball__text">{number}</div>
                  </div>
                </div>
              </div>
            ) : number >= 46 && number <= 60 ? (
              <div className={`bingo-grid__row yellow ${selectedNumbers.includes(number) ? "disactive" : ""}`} id={index+1} key={index}>
                <div className={className}>
                  <div className="bingo-ball bingo-ball">
                    <div className="bingo-ball__text">{number}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`bingo-grid__row red ${selectedNumbers.includes(number) ? "disactive" : ""}`} id={index+1} key={index}>
                <div className={className}>
                  <div className="bingo-ball bingo-ball">
                    <div className="bingo-ball__text">{number}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Col>
      <Col xs={12} md={12} lg={12}>
        <div className='button-grid'>
        <button onClick={reset} className='reset'>Reset</button>
        </div>
      </Col>
    </Row>
  );
};

export default Board;
