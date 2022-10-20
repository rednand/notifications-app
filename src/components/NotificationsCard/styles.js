import styled from "styled-components";

export const NotificationsCard = styled.div`
  min-height: 4vh;
  color: black;
  background-color: #e5f0f7;
  margin: 2% 3%;
  padding: 3%;
  border-radius: 5px;
  display: flex;
  font-size: 14px;
  position: relative;

  &:hover {
    opacity: 0.8;
    background-color: #eaeff2;
  }
  .notification_card {
    padding: 0 1%;
    display: flex;
    flex-direction: column;
  }

  .notification_card--infos {
    text-align: start;
  }

  .notification_card--name {
    font-weight: bold;
    padding-right: 4px;
  }

  .notification-avatar {
    border-radius: 80px;
    width: 40px;
    margin-right: 10px;
  }

  .notification_card--group {
    color: #06659c;
    font-weight: 900;

    &:hover {
      cursor: pointer;
      color: hsl(230, 24%, 9.803921568627452%);
    }
  }

  .notification_card--post {
    color: #4d4c4c;
    font-weight: 700;
    padding-left: 4px;
  }

  .notification_card--message {
    border: 2px solid #e2dfdf;
    padding: 4%;
    border-radius: 5px;
    margin-top: 5%;
    line-height: 160%;
  }

  .notification_card--picture {
    margin-left: 32%;
    height: 40px;
    width: 40px;

    @media (max-width: 480px) {
      margin-left: 15%;
    }
  }

  .notification_card--circle {
    color: red;
    font-size: 10px;
    padding-left: 5px;
  }

  .notification_card--date {
    display: flex;
    width: 100%;
    color: rgb(163 163 163);
    padding-top: 8px;
    font-size: 12px;
  }
`;
