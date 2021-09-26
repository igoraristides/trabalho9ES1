import styled from "styled-components";

export const Container = styled.div`
    display: block;
    width: 100%;
    padding: 40px 10px;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
  }

  .progressbar {
    position: relative;
    width: 100%;
    counter-reset: listCounter;
  }
  .progressbar li {
    float: left;
    margin-right: 10px;
    position: relative;
    text-align: center;
    font-weight: 400;
    counter-increment: listCounter;
  }
  label {
    display: none;
  }
  .progressbar li label {
    color: #4d4d4e;
  }

  .progressbar .activeLabel {
    font-size: 15px;
    line-height: 19px;
    display: inline-block;
    color: #4d4d4e;
    margin-left: 10px;
    font-weight: bold;
  }

  .progressbar li:before {
    /* CSS for creating steper block before the li item*/
    content: counter(listCounter);
    height: 40px;
    width: 40px;
    color: #4d4d4e;
    background-color: #fff;
    border-radius: 100px;
    line-height: 40px;
    display: flex;
    text-align: center;
    z-index: 2;
    margin: 0 auto 0 auto;
    justify-content: center;
    font-weight: bold;
  }

  .progressbar li:after {
  }
  .progressbar li:first-child:after {
    content: none;
  }
  .progressbar li.active {
  }
  .progressbar li.active::before {
    content: counter(listCounter);
    background-color: #00045d;
    font-weight: bold;
    font-size: 13px;
    color: #fff;
  }
  .progressbar li.active:after {
  }
`;

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
