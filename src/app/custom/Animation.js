import gsap from "gsap/all";

export default class Animation {
  constructor() {
    this._planets = document.querySelectorAll(".dots");
    this._scaleBtn = document.querySelector("#scale-button");
    this._positionBtn = document.querySelector("#position-button");
    this._stopBtn = document.querySelector("#stop-button");
    this._tl = gsap.timeline();
    this.flag = false;
    this._scaleBtn.addEventListener("click", () => {
      this._tl.pause(0).clear().add(this.scaleTimeline()).resume();
    });
    this._positionBtn.addEventListener("click", () => {
      this._tl.pause(0).clear().add(this.moveUpDownTimeline()).resume();
    });
    this._stopBtn.addEventListener("click", () => {
        this._tl.pause(0).clear();
      });
  }

  scaleTimeline() {
    const timeLine = gsap.timeline({
      repeat: -1,
    });
    timeLine.to(this._planets, {
      scale: 0.1,
      stagger: { each: 0.1, from: "edges" },
    });
    timeLine.to(this._planets, {
      scale: 1,
      stagger: { each: 0.1, from: "edges" },
    });
    return timeLine;
  }

  moveUpDownTimeline() {
    const timeLine = gsap.timeline({
      repeat: -1,
    });
    timeLine.to(this._planets, {
      y: "50px",
      stagger: { each: 0.1, from: "edges" },
    });
    timeLine.to(this._planets, {
      y: 0,
      stagger: { each: 0.1, from: "edges" },
    });
    return timeLine;
  }
}
