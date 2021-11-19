/**
 *  class Rect
 */

class Rect { 
    constructor(w, h) { // width, height
        this.w = w;
        this.h = h;
    }

    draw() {
        console.log(`Rect(w${this.w}, h=${this.h})를 그렸습니다.`);
    }
}

// test
const rect1 = new Rect(10, 20); // let으로 해도 됨
const rect2 = new Rect(100, 200);

rect1.draw(); // 결과 : Rect(w10, h=20)를 그렸습니다.
rect2.draw(); // 결과 : Rect(w100, h=200)를 그렸습니다.
