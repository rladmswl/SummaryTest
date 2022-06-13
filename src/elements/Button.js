import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, is_center, is_right, children, margin, width } = props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  if (is_center) {
    return (
      <React.Fragment>
        <CenterButton onClick={_onClick}>{text? text : children}</CenterButton>
      </React.Fragment>
    );
  }

  // if (is_right) {
  //   return (
  //     <React.Fragment>
  //       <RightButton onClick={_onClick}>{text? text : children}</RightButton>
  //     </React.Fragment>
  //   );
  // }

  const styles = {
    margin: margin,
    width: width,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>{text? text: children}</ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100px',
  padding: 20,
};

// 로그인,  회원가입, 로그아웃, home
const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #000066;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;

// 업로드 하기, 로그인 하러 가기
const CenterButton = styled.button`
  width: 300px;
  background-color: #000066;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
`;

// const RightButton = styled.button`
//   width: 300px;
//   background-color: #000066;
//   color: #ffffff;
//   padding: 12px 0px;
//   box-sizing: border-box;
//   border: none;
// `;

// +버튼
const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #000066;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;