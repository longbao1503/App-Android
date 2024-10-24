const quizData = [
    {
        question: "Câu hỏi 1: Thủ đô của Việt Nam là gì?",
        a: "Hà Nội",
        b: "TP Hồ Chí Minh",
        c: "Đà Nẵng",
        d: "Hải Phòng",
        correct: "a"
    },
    {
        question: "Câu hỏi 2: Đội bóng nào giành chức vô địch World Cup 2018?",
        a: "Pháp",
        b: "Brazil",
        c: "Đức",
        d: "Argentina",
        correct: "a"
    },
    {
        question: "Câu hỏi 5: Ai là tác giả của cuốn sách 'Harry Potter'?",
        a: "J.R.R. Tolkien",
        b: "George R.R. Martin",
        c: "J.K. Rowling",
        d: "C.S. Lewis",
        correct: "c"
    },
    {
        question: "Câu hỏi 6: Kim loại nào có ký hiệu hóa học là Fe?",
        a: "Đồng",
        b: "Sắt",
        c: "Bạc",
        d: "Vàng",
        correct: "b"
    },
    {
        question: "Câu hỏi 7: Nước nào có diện tích lớn nhất thế giới?",
        a: "Mỹ",
        b: "Canada",
        c: "Nga",
        d: "Trung Quốc",
        correct: "c"
    },
    {
        question: "Câu hỏi 8: Đội bóng nào được gọi là 'Quỷ đỏ'?",
        a: "Arsenal",
        b: "Liverpool",
        c: "Manchester United",
        d: "Chelsea",
        correct: "c"
    },
    {
        question: "Câu hỏi 9: Sông nào dài nhất thế giới?",
        a: "Amazon",
        b: "Nile",
        c: "Yangtze",
        d: "Mississippi",
        correct: "b"
    },
    {
        question: "Câu hỏi 10: Ai là nữ diễn viên chính trong bộ phim 'Titanic'?",
        a: "Nicole Kidman",
        b: "Kate Winslet",
        c: "Meryl Streep",
        d: "Scarlett Johansson",
        correct: "b"
    },
    
];

let currentQuestionIndex = 0; // Chỉ số câu hỏi hiện tại
let score = 0; // Điểm số

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br>
    `;
}

function calculateScore() {
    const answer = document.querySelector(`input[name="answer"]:checked`);
    if (answer && answer.value === quizData[currentQuestionIndex].correct) {
        score++;
    }
}

submitBtn.addEventListener("click", () => {
    calculateScore();
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        resultContainer.innerText = `Bạn đã trả lời đúng ${score}/${quizData.length} câu hỏi!`;
        quizContainer.style.display = 'none'; // Ẩn câu hỏi
        submitBtn.style.display = 'none'; // Ẩn nút gửi
    }
});

// Tải câu hỏi đầu tiên khi ứng dụng khởi động
loadQuestion();
