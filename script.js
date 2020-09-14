function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const { useState } = React;
const { useSprings, interpolate, animated, useSpring } = ReactSpring;
const { useDrag } = ReactUseGesture;
const rootElement = document.getElementById("root");
const imgData = [
{
  name: "oussama.vue",
  detail:
  "From can't to can 🤘 Laravel/VueJs/Angular/ASP.Net warrior",
  images: [
  "7.jpg",
  "8.jpg"],

  url:
  "22.jpg",
  profile:
  "001.jpg" },

{
  name: "musta apk",
  detail: "Android developer | Muştafa   Android Developer • Freelance ⚒ Java • Kotlin • C++ 💞",
  images: [
  "5.jpg",
  "6.jpg"],

  url:
  "23.jpg",
  profile:
  "5.jpg" },

{
  name: "haoui hamza |™ حمزة حوّي",
  detail:
  "mobile app developer",
  images: [
  "10.jpg",
  "11.jpg"],

  url:
  "24.jpg",
  profile:
  "9.jpg" },

{
  name: "Soheib BOUDALI | صهيب بودالي",
  detail: "Full stack web developer - AI researcher",images: [
  "13.jpg",
  "14.jpg"],

  url:
  "25.jpg",
  profile:
  "12.jpg" }];


const Card = props => {
  const { _x, _y, num, index, data, active, setActive } = props;
  const cardIndex = num - index;
  const offset = cardIndex * 276 + 80;
  const [{ x, y, scale }, set] = useSpring(() => ({
    x: _x + offset,
    y: _y,
    scale: active ? 2.4 : 1 }));

  const [{ posX, posY, proScale, blur }, setPro] = useSpring(() => ({
    posX: 0,
    posY: 0,
    proScale: 1.2,
    config: { mass: 2 },
    blur: 0 }));

  const handleClick = () => {
    if (num === index) {
      if (!active) {
        set({ scale: 2.2 });
        setPro({ posX: -53, posY: -337, proScale: 2.5, blur: 4 });
        setActive(true);
      }
    }
  };
  set({ x: _x + offset, y: _y });
  if (num === index) {
    if (!active) {
      set({ scale: 1 });
      setPro({ posX: 0, posY: 0, proScale: 1, blur: 0 });
    }
  }
  return (
    React.createElement(animated.div, {
      id: "card",
      style: {
        transform: interpolate(
        [
        x.interpolate(x => `translateX(${x}px)`),
        y.interpolate(y => `translateY(${y}px)`)],

        (translateX, translateY) => `${translateX} ${translateY}`),

        zIndex: num === index ? 10 : 1 } },


    React.createElement(animated.div, {
      id: "imgContainer",
      style: {
        transform: scale.interpolate(s => `scale(${s})`) } },


    React.createElement(animated.img, {
      style: {
        width: "300%",
        userSelect: "none",
        transform: x.
        interpolate({ range: [-196, 356], output: [-380, -20] }).
        interpolate(x => `translate3d(${x}px, 0px, 0px)`) },

      src: data.url }),

    React.createElement(animated.div, {
      style: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        backdropFilter: blur.interpolate(x => ` blur(${x}px)`),
        backgroundColor: blur.
        interpolate({ range: [0, 4], output: [0, 0.3] }).
        interpolate(x => `rgba(0, 0, 0, ${x})`) } })),



    React.createElement(animated.img, {
      id: "profile",
      style: {
        transform: interpolate(
        [
        posX.interpolate(x => `translateX(${x}px)`),
        posY.interpolate(y => `translateY(${y}px)`),
        proScale.interpolate(y => `scale(${y})`)],

        (translateX, translateY, proScale) =>
        `${translateX} ${translateY} ${proScale}`),

        border: proScale.
        interpolate({ range: [1, 2.5], output: [6, 4] }).
        interpolate(x => `${x}px solid #fff`) },

      src: data.profile,
      onClick: handleClick })));



};
const heightOffset = 200;
const Info = props => {
  const { active, index, setActive } = props;
  const [{ y }, set] = useSpring(() => ({ y: !active ? -40 : 0 }));
  set({ y: !active ? -40 : 0 });
  return (
    React.createElement(React.Fragment, null,
    React.createElement(animated.div, {
      id: "cross",
      onClick: () => {
        setActive(false);
      },
      style: {
        transform: y.
        interpolate({ range: [-40, 0], output: [0, 1] }).
        interpolate(y => `scale(${y})`) } },


    React.createElement("div", { className: "close" })),

    React.createElement(animated.div, {
      style: { bottom: y.interpolate(y => `${y}vh`) },
      id: "infocontainer" },

    React.createElement("div", { id: "detailName" }, imgData[index].name),
    React.createElement("div", { id: "detailPro" }, imgData[index].detail),
    React.createElement("button", { id: "follow" }, "Follow"),
    React.createElement("button", { id: "message" }, "Message"),
    React.createElement("img", {
      id: "detailImage",
      src: imgData[index].images[0],
      style: { background: "#000" } }),

    React.createElement("img", {
      id: "detailImage",
      src: imgData[index].images[1],
      style: { background: "#2174f3" } }))));




};
const Head =
React.createElement(React.Fragment, null,
React.createElement("div", {
  style: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between" } },


React.createElement("h1", { id: "el", style: { color: "#ffffff" } }, "KHALi App"),
React.createElement("div", { id: "user" })),

React.createElement("div", { id: "nav" },
React.createElement("div", { id: "el", style: { color: "#ffffff" } }, "Top picks"),


React.createElement("div", { id: "el", style: { color: "#ffffff" } }, "Recent"),
React.createElement("div", { id: "el", style: { color: "#ffffff" } }, "Collections"),
React.createElement("div", { id: "el" }, "Explore")));

function App() {
  const [{ x, y }, set] = useState(() => ({ x: 0, y: heightOffset }));
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const bind = useDrag(
  ({ down, movement: [x, y], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    if (!active) {
      if (trigger && !down) {
        if (!(index + dir * -1 >= imgData.length || index + dir * -1 < 0)) {
          setIndex(index + dir * -1);
        }
        set({ x: 0, y: heightOffset });
      } else {
        set({ x: down ? x : 0, y: heightOffset });
      }
    }
  });

  return (
    React.createElement("div", _extends({ id: "app" }, bind()),
    Head,
    imgData.map((data, i) => {
      return (
        React.createElement(Card, {
          key: i,
          _x: x,
          _y: y,
          num: i,
          index: index,
          data: data,
          active: active,
          setActive: setActive }));


    }),
    React.createElement(Info, { active: active, index: index, setActive: setActive })));


}

ReactDOM.render(
React.createElement(App, null),
rootElement);