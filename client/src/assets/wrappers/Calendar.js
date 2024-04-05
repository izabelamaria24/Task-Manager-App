import styled from 'styled-components'

const Calendar = styled.section`
  input {
    font-family: Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: #ff462b;
  }

  .clearfix {
    clear: both;
  }

  .animate {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .calendar {
    border-radius: 4px;
    overflow: hidden;
    width: 50%;
    height: 450px;
    left: 50%;
    top: 50%;
    background-color: #ffffff;
    color: #333333;
  }

  @media (max-width: 768px) {
    .calendar {
      height: auto;
      width: 100%;
      display: grid;
      grid-template-rows: 20% 80%;
    }
  }

  .calendar h1,
  .calendar h2 {
    font-weight: 300;
    font-size: 26px;
    line-height: 28px;
    text-transform: uppercase;
    margin: 0 0 20px 0;
  }

  .calendar h1 span {
    display: block;
  }

  .calendar .col {
    position: relative;
    float: left;
    height: 100%;
  }


  .calendar .col .content {
    padding: 40px;
  }

  .calendar ul {
    margin: 0;
  }

  .calendar ul li {
    list-style: none;
  }

  .calendar .leftCol {
    width: 40%;
    background-color: #f48989;
  }
  
  @media (max-width: 768px) {
    .calendar .leftCol {
      width: 100%;
    }
  }

  .calendar .noteList li {
    color: #ffffff;
    margin-bottom: 10px;
  }

  .calendar .notes p,
  .calendar .notes input,
  .calendar .noteList li {
    font-weight: 300;
    font-size: 14px;
  }

  .calendar .notes p {
    border-bottom: solid 1px rgba(255, 255, 255, 0.4);
  }

  .calendar .notes input {
    background-color: #f48989;
    color: #ffffff;
    border: none;
    width: 200px;
  }

  .calendar .addNote,
  .calendar .removeNote {
    float: right;
    color: rgba(255, 255, 255, 0.4);
    font-weight: bold;
    margin-left: 20px;
  }

  .calendar .addNote:hover,
  .calendar .removeNote:hover {
    color: #ffffff;
  }

  .calendar .addNote {
    font-size: 16px;
  }

  .calendar .leftCol h1 {
    color: #ffffff;
    margin-bottom: 40px;
  }

  .calendar .rightCol {
    width: 60%;
  }
  
  @media (max-width: 768px) {
    .calendar .rightCol {
      width: 100%;
    }
  }

  .calendar .rightCol h2 {
    color: #c7bebe;
    text-align: right;
    margin-bottom: 70px;
  }

  .calendar .months li,
  .calendar .weekday li,
  .calendar .days li {
    float: left;
    text-transform: uppercase;
  }

  .calendar .months li a,
  .calendar .weekday li a,
  .calendar .days li a {
    display: block;
    color: #747978;
  }

  .calendar .months li a {
    font-size: 10px;
    color: #c7bebe;
    text-align: center;
    width: 32px;
    margin-bottom: 20px;
  }

  .calendar .months li .selected {
    font-weight: bold;
    color: #747978;
  }

  .calendar .weekday li a {
    width: 55px;
    text-align: center;
    margin-bottom: 20px;
    font-size: 12px;
  }

  .calendar .days li {
    width: 55px;
  }

  .calendar .days li a {
    width: 36px;
    height: 24px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    border-radius: 12px;
    margin: auto auto 10px;
    padding-top: 10px;
  }

  .calendar .days li a:hover {
    background-color: #eeede9;
  }

  .calendar .days li .selected {
    background-color: #f5a1a3 !important;
    color: #ffffff;
  }

  .calendar .days li .event {
    color: #f5a1a3;
  }

  /* placeholder color */

  ::-webkit-input-placeholder {
    color: #ffffff;
  }

  :-moz-placeholder {
    color: #ffffff;
  }

  ::-moz-placeholder {
    color: #ffffff;
  }

  :-ms-input-placeholder {
    color: #ffffff;
  }
`
export default Calendar