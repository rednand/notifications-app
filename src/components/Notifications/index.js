import { useEffect, useState } from "react";
import { NotificationsCard } from "../NotificationsCard/styles";
import { Notifications } from "./styles";
import data from "./data.json";

export const NotificationsComponent = () => {
  const [notifications, setNotifications] = useState([]);
  const [countnotifications, setCountnotifications] = useState(0);
  const [nameclass, setNameClass] = useState([
    "Anna Kim",
    "Nathan Peterson",
    "Kimberly Smith",
    "Risky Hasanuddin",
  ]);

  useEffect(() => {
    setNotifications(data.data);
  }, []);

  useEffect(() => {
    setCountnotifications(notifications.length - nameclass.length);
  }, [notifications, nameclass]);

  function handleNotifications(notifications) {
    setCountnotifications((notifications) => notifications - 1);
    setNameClass([...nameclass, notifications]);
  }

  return (
    <Notifications>
      <div className="notification_title">
        <h1>
          Notifications
          <span> {countnotifications > 0 ? countnotifications : 0}</span>
        </h1>
        <h2 onClick={() => setNameClass(data.data.map((name) => name.name))}>
          Mark all as read
        </h2>
      </div>

      {notifications.map((notifications) => (
        <NotificationsCard
          key={notifications.name}
          className={
            nameclass.includes(notifications.name)
              ? "notification_readed"
              : "notification_not--readed"
          }
          onClick={() => handleNotifications(notifications.name)}
        >
          <div>
            <img
              className="notification-avatar"
              src={notifications.img}
              alt={notifications.name}
            />
          </div>
          <div className="notification_card">
            <div className="notification_card--infos">
              <span className="notification_card--name">
                {notifications.name}
              </span>
              <span> {notifications.activity} </span>

              {notifications.group ? (
                <span className="notification_card--group">
                  {notifications.group}
                </span>
              ) : notifications.post ? (
                <span className="notification_card--post">
                  {notifications.post}
                </span>
              ) : (
                ""
              )}
              <span className="notification_card--circle">
                {nameclass.includes(notifications.name) ? "" : "●"}
              </span>
            </div>
            <div className="notification_card--date">{notifications.date}</div>
            {notifications.message ? (
              <p className="notification_card--message">
                {notifications.message}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          {notifications.picture ? (
            <img
              className="notification_card--picture"
              src={notifications.picture}
              alt={notifications.name}
            />
          ) : (
            ""
          )}
        </NotificationsCard>
      ))}
    </Notifications>
  );
};
