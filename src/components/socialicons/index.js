import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a
              href={socialprofils.twitter}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaXTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a
              href={socialprofils.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a
              href={socialprofils.facebook}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a
              href={socialprofils.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a
              href={socialprofils.youtube}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a
              href={socialprofils.twitch}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
