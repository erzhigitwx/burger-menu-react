import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./menu.css";

const Menu = function ({ header, items, active, setActive }) {
  return (
    <div
      className={active ? "menu" : "menu__active"}
      onClick={() => setActive(!active)}
    >
      <div className="blur" />

      <div className="menu__content" onClick={e => e.stopPropagation()}>
        <div className="menu__header">{header}</div>

        <ul>
          {items.map((item) => (
            <ErrorBoundary>
              <li>
                <a href={item.href}>{item.value}</a>
              </li>
            </ErrorBoundary>
          ))}
        </ul>

        <div className="social">
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-vk"></a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
