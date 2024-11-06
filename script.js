const quizData = [
    { question: "Câu hỏi 1: Thủ đô của Việt Nam là gì?", a: "Hà Nội", b: "TP Hồ Chí Minh", c: "Đà Nẵng", d: "Hải Phòng", correct: "a" },
    { question: "Câu hỏi 2: Đội bóng nào giành chức vô địch World Cup 2018?", a: "Pháp", b: "Brazil", c: "Đức", d: "Argentina", correct: "a" },
    { question: "Câu hỏi 3: Ai là tác giả của cuốn sách 'Harry Potter'?", a: "J.R.R. Tolkien", b: "George R.R. Martin", c: "J.K. Rowling", d: "C.S. Lewis", correct: "c" },
    { question: "Câu hỏi 4: Kim loại nào có ký hiệu hóa học là Fe?", a: "Đồng", b: "Sắt", c: "Bạc", d: "Vàng", correct: "b" },
    { question: "Câu hỏi 5: Nước nào có diện tích lớn nhất thế giới?", a: "Mỹ", b: "Canada", c: "Nga", d: "Trung Quốc", correct: "c" },
    { question: "Câu hỏi 6: Ai là nhà phát minh ra bóng đèn?", a: "Albert Einstein", b: "Nikola Tesla", c: "Thomas Edison", d: "Isaac Newton", correct: "c" },
    { question: "Câu hỏi 7: Quốc gia nào nổi tiếng với kim tự tháp?", a: "Ai Cập", b: "Brazil", c: "Mexico", d: "Ấn Độ", correct: "a" },
    { question: "Câu hỏi 8: Sông dài nhất thế giới là gì?", a: "Sông Nile", b: "Sông Amazon", c: "Sông Mississippi", d: "Sông Yangtze", correct: "a" },
    { question: "Câu hỏi 9: Loài động vật nào là loài nhanh nhất trên cạn?", a: "Hổ", b: "Ngựa vằn", c: "Chim ưng", d: "Gai châu Phi", correct: "d" },
    { question: "Câu hỏi 10: Mặt trăng có bao nhiêu ngày quay quanh trái đất?", a: "27,3 ngày", b: "30 ngày", c: "24 ngày", d: "28 ngày", correct: "a" },
    { question: "Câu hỏi 11: Đơn vị tiền tệ của Nhật Bản là gì?", a: "Won", b: "Yuan", c: "Yên", d: "Ringgit", correct: "c" },
    { question: "Câu hỏi 12: Ai là người sáng lập ra Microsoft?", a: "Steve Jobs", b: "Bill Gates", c: "Mark Zuckerberg", d: "Larry Page", correct: "b" },
    { question: "Câu hỏi 13: Quả táo có bao nhiêu calo trong mỗi 100g?", a: "40 calo", b: "50 calo", c: "60 calo", d: "52 calo", correct: "d" },
    { question: "Câu hỏi 14: Cái gì thường không thể thiếu trong bữa sáng ở nhiều quốc gia?", a: "Pizza", b: "Sushi", c: "Bánh mì", d: "Pancakes", correct: "c" },
    { question: "Câu hỏi 15: Công trình nào được xem là kỳ quan của thế giới cổ đại?", a: "Vạn Lý Trường Thành", b: "Đền Parthenon", c: "Kim tự tháp Giza", d: "Đấu trường Colosseum", correct: "c" },
    { question: "Câu hỏi 16: Thực phẩm nào chứa nhiều vitamin C nhất?", a: "Cam", b: "Dứa", c: "Ổi", d: "Táo", correct: "c" },
    { question: "Câu hỏi 17: Vật liệu nào là dẫn điện tốt nhất?", a: "Nhôm", b: "Vàng", c: "Cuối", d: "Đồng", correct: "d" },
    { question: "Câu hỏi 18: Người đầu tiên bước chân lên mặt trăng là ai?", a: "Buzz Aldrin", b: "Yuri Gagarin", c: "Neil Armstrong", d: "Michael Collins", correct: "c" },
    { question: "Câu hỏi 19: Hệ Mặt trời của chúng ta có bao nhiêu hành tinh?", a: "7", b: "9", c: "8", d: "10", correct: "c" },
    { question: "Câu hỏi 20: Đô thị nào lớn nhất thế giới theo dân số?", a: "Tokyo", b: "New York", c: "Shanghai", d: "Delhi", correct: "a" },
];


let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const exitBtn = document.getElementById("exitBtn");
const finalScore = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");
const homeBtn = document.getElementById("homeBtn"); // Nút Màn hình chính

startBtn.addEventListener("click", startGame);
exitBtn.addEventListener("click", () => window.close());
restartBtn.addEventListener("click", restartGame);
homeBtn.addEventListener("click", goToHomeScreen); // Thêm sự kiện cho nút Màn hình chính

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        nextBtn.style.display = "none";
        loadQuestion();
    } else {
        showResult();
    }
});

function startGame() {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    ["a", "b", "c", "d"].forEach(option => {
        const button = document.createElement("button");
        button.innerText = currentQuestion[option];
        button.classList.add("answer-button");
        if (option === currentQuestion.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct;
    
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score += 10;
        correctAnswers++;
        scoreDisplay.innerText = score;
    } else {
        selectedButton.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

function showResult() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";
    finalScore.innerText = `Điểm của bạn là: ${score}`;
    saveScore(score); // Lưu điểm số vào lịch sử
}



function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    scoreDisplay.innerText = score;
    resultScreen.style.display = "none";
    startGame();
}

function goToHomeScreen() {
    resultScreen.style.display = "none"; // Ẩn màn hình kết quả
    startScreen.style.display = "block"; // Hiển thị màn hình chính
    currentQuestionIndex = 0; // Đặt lại chỉ số câu hỏi về 0
    score = 0; // Đặt lại điểm số
    scoreDisplay.innerText = score; // Cập nhật điểm số
}

function saveScore(score) {
    fetch('http://localhost:3000/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerName: 'Tên người chơi', score: score }) // Điều chỉnh tên người chơi nếu cần
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        loadScoreHistory(); // Tải lại lịch sử điểm số sau khi lưu thành công
    })
    .catch(error => console.error('Lỗi khi lưu điểm số:', error));
}


const toggleHistoryBtn = document.getElementById("toggleHistoryBtn");
const scoreHistory = document.getElementById("scoreHistory");

// Thêm sự kiện click cho nút mở/đóng lịch sử
toggleHistoryBtn.addEventListener("click", () => {
    // Kiểm tra trạng thái hiển thị của thanh lịch sử và thay đổi nó
    if (scoreHistory.style.display === "none" || scoreHistory.style.display === "") {
        scoreHistory.style.display = "block"; // Hiển thị lịch sử điểm số
    } else {
        scoreHistory.style.display = "none"; // Ẩn lịch sử điểm số
    }
});


function loadScoreHistory() {
    fetch('http://localhost:3000/scores')
        .then(response => response.json())
        .then(data => {
            const scoreList = document.getElementById('scoreList');
            scoreList.innerHTML = ''; // Xóa danh sách điểm trước khi hiển thị lại

            if (data && Array.isArray(data)) {
                data.forEach(score => {
                    const li = document.createElement('li');
                    li.innerText = `Người chơi: ${score.playerName}, Điểm: ${score.score}`;
                    scoreList.appendChild(li);
                });
            }
        })
        .catch(error => console.error('Lỗi khi tải lịch sử điểm số:', error));
}
