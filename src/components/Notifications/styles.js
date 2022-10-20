import styled from "styled-components";

export const Notifications = styled.div`
  font-size: 11px;
  text-align: center;
  min-height: 90vh;
  padding: 1%;
  width: 45%;
  margin: 5% auto 2%;
  -webkit-box-shadow: -1px 2px 44px -20px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: -1px 2px 44px -20px rgba(0, 0, 0, 0.7);
  box-shadow: -1px 2px 44px -20px rgba(0, 0, 0, 0.7);

  .notification_title {
    width: 94%;
    display: flex;
    padding: 2% 3%;
    color: #000000;
    font-weight: 800;
    justify-content: space-between;
    align-items: baseline;

    h1 {
      span {
        background-color: #1b2e60;
        color: #fff;
        font-size: 18px;
        padding: 2px 12px 2px 8px;
        border-radius: 5px;
        margin-left: 10px;
      }
    }

    h2 {
      color: #5e5d5d;
      font-weight: 600;
      font-size: 15px;
      cursor: pointer;
    }
  }
  .notification_readed {
    background-color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 96%;
    box-shadow: none;
  }
`;
