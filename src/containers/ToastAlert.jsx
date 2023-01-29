import {
  faCheckCircle,
  faCircleExclamation,
  faCircleXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/ToastAlert.scss";

export default function ToastAlert({ show, success, error, info, warning, text }) {
  return (
    <ul className={show ? "notifications" : "hide"}>
      <li
        className={
          success
            ? "success toast"
            : error
            ? "error toast"
            : info
            ? "info toast"
            : warning
            ? "warning toast"
            : "toast"
        }
      >
        <div className="column">
          <FontAwesomeIcon
            className="icon__alert"
            icon={
              success
                ? faCheckCircle
                : error
                ? faCircleXmark
                : info
                ? faCircleExclamation
                : warning
                ? faTriangleExclamation
                : null
            }
          ></FontAwesomeIcon>
          <span>
            {text}
          </span>
        </div>
      </li>
    </ul>
  );
}
