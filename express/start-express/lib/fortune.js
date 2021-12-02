const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise."
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortunes.length)
    return fortunes[idx]
}

/**
 * 전역 변수로 exports를 사용하였고 모듈 바깥에서 모듈에 있는 내용을 보려면 반드시 exports를 사용해야 한다.
 * getFortune함수는 공개하지만 forunes배열은 공개하지 않으며, 외부에서는 이 배열을 볼 수 없다.(자바의 캡슐화를 모방한것일까...)
 */