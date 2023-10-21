import React, { useState } from "react";
import {
  LeftArrow,
  Number,
  NumberDiv,
  Numbers,
  OuterWrapper,
  RightArrow,
} from "./style";
import UserCard from "../usercard/UserCard";
import { UsersMain } from "../../style/Container";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
function ClickShow({ displayNumber, data }) {
  const [showNumber, setShowNumber] = useState(0);
  let numbersToBeDisplayed = Math.ceil(data?.length / displayNumber);


  const numberArray = new Array(numbersToBeDisplayed);
  for (let i = 0; i < numberArray?.length; i++) {
    numberArray[i] = i;
  }

  const firstIndex = showNumber * displayNumber;

  const lastIndex = showNumber * displayNumber + displayNumber;

  const dataToBeDisplayed = data.slice(firstIndex, lastIndex);

  return (
    <OuterWrapper>
      <UsersMain>
        {dataToBeDisplayed?.map((user) => {
          return (
            <UserCard
              user={user}
              key={user.id}
            />
          );
        })}
      </UsersMain>

      <NumberDiv>
        <LeftArrow
          onClick={() => {
            if (showNumber > 0) {
              setShowNumber(showNumber - 1);
            } else {
              setShowNumber(showNumber);
            }
            window.scrollTo(0, 0);
          }}
        >
          <AiFillCaretLeft />
        </LeftArrow>
        <Numbers>
          {numberArray.map((num) => {
            return (
              <Number
                numStyle={num === showNumber ? "do" : "no"}
                key={num}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setShowNumber(num);
                }}
              >
                {num}
              </Number>
            );
          })}
        </Numbers>
        <RightArrow
          onClick={() => {
            if (showNumber < numberArray.length - 1) {
              setShowNumber(showNumber + 1);
            } else {
              setShowNumber(showNumber);
            }
            window.scrollTo(0, 0);
          }}
        >
          <AiFillCaretRight />
        </RightArrow>
      </NumberDiv>
    </OuterWrapper>
  );
}

export default ClickShow;
