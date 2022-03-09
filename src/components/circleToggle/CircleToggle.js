import React from 'react';
import '../circleToggle/style.css';

function CircleToggle() {
  const circleToggle = React.createRef();
  const menu = React.createRef();
  const toggleMenu = () => {
    let menuToggle = circleToggle.current
    let menu = document.querySelector('.menu')
    menuToggle.onClick = function () {
      menu.classList.toggle('active')
      menuToggle.classList.toggle('active')
    }

    const list = document.querySelectorAll('li');

    function activeLink() {
      list.forEach((item) =>
        item.classList.remove('active'))
      this.classList.add('active')
    }

    list.forEach((item) =>
      item.addEventListener('click', activeLink))
  }

  const tttttt = () => {
    return <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
  }

  const tttttt2 = () => {
    return <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  }

  return (
    <div>
      <ul className="menu">
        <div className="circleToggle" ref={circleToggle}>
          <ion-icon name="add-outline"/>
        </div>
        <li style="--i:0" className="active"><a href="#">
          <ion-icon name="airplane-outline"/>
        </a></li>
        <li style="--i:1"><a href="#">
          <ion-icon name="arrow-back-outline"/>
        </a></li>
        <li style="--i:2"><a href="#">
          <ion-icon name="arrow-forward-outline"/>
        </a></li>
        <li style="--i:3"><a href="#">
          <ion-icon name="arrow-up-circle-outline"/>
        </a></li>
        <li style="--i:4"><a href="#">
          <ion-icon name="at-outline"/>
        </a></li>
        <li style="--i:5"><a href="#">
          <ion-icon name="apps-outline"/>
        </a></li>
        <li style="--i:6"><a href="#">
          <ion-icon name="arrow-down-outline"/>
        </a></li>
        <li style="--i:7"><a href="#">
          <ion-icon name="arrow-up-outline"/>
        </a></li>

        <div className="indicator"/>
      </ul>
      {toggleMenu()}
      {tttttt()}
      {tttttt2()}
    </div>

  )
    ;
}

export default CircleToggle;