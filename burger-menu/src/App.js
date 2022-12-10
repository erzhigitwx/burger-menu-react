import React from "react";
import "./App.css";
import Menu from "./menu/Menu";

function App() {
  const [menuActive, setMenuActive] = React.useState(false)
  const items = [
    { value: "Home", href: "/main" },
    { value: "Detalization", href: "/Detalization" },
    { value: "Services", href: "/Services" },
    { value: "Games", href: "/Games" },
    { value: "To sell", href: "/Sell" },
    { value: "About us", href: "/Us" },
    { value: "Help", href: "/Help" },
  ];

  return (
    <div className="App">
      <nav className="burger__menu" onClick={() => setMenuActive(!menuActive)}>
        <div className={menuActive ? 'burger__btn__active' : 'burger__btn'} onClick={() => setMenuActive(!menuActive)} onScroll={!menuActive}>
          <span />
        </div>
      </nav>
      <main className={menuActive ? 'main__active ' : 'main'}>
      <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. vAliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit.Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit.Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit. Aliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. vAliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit.Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit.Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit. Aliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. vAliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit.Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit.Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit. Aliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. vAliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit.Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit.Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit. Aliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. vAliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit.Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit.Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit. Aliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. vAliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit.Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit.Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit.
        </p>
        <p>
          Aliqua officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit. Aliqua officia consequat
          nostrud ea pariatur laborum reprehenderit adipisicing magna mollit
          consequat velit. Aliqua officia consequat nostrud ea pariatur laborum
          reprehenderit adipisicing magna mollit consequat velit. Aliqua officia
          consequat nostrud ea pariatur laborum reprehenderit adipisicing magna
          mollit consequat velit. Aliqua officia consequat nostrud ea pariatur
          laborum reprehenderit adipisicing magna mollit consequat velit. Aliqua
          officia consequat nostrud ea pariatur laborum reprehenderit
          adipisicing magna mollit consequat velit.
        </p>
      </main>

      <Menu header={"MENU"} items={items} active={menuActive} setActive={setMenuActive} />
    </div>
  );
}

export default App;
