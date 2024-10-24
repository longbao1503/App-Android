let stepCount = 0;
let stepGoal = null;

// Lấy các phần tử
const stepDisplay = document.getElementById('stepCount');
const goalDisplay = document.getElementById('goalCount');
const goalMessage = document.getElementById('goalMessage');

// Thêm bước khi nhấn nút
document.getElementById('addStepBtn').addEventListener('click', () => {
    stepCount++;
    stepDisplay.textContent = stepCount;

    checkGoal();
});

// Đặt mục tiêu bước chân hàng ngày
document.getElementById('setGoalBtn').addEventListener('click', () => {
    const goalInput = document.getElementById('goalInput').value;
    stepGoal = parseInt(goalInput, 10);

    if (isNaN(stepGoal) || stepGoal <= 0) {
        goalMessage.textContent = "Vui lòng nhập mục tiêu hợp lệ!";
        return;
    }

    goalDisplay.textContent = stepGoal;
    goalMessage.textContent = "";
    checkGoal();
});

// Kiểm tra nếu đạt mục tiêu
function checkGoal() {
    if (stepGoal && stepCount >= stepGoal) {
        goalMessage.textContent = "Chúc mừng! Bạn đã đạt mục tiêu!";
    } else {
        goalMessage.textContent = "";
    }
}

// Đặt lại số bước
document.getElementById('resetBtn').addEventListener('click', () => {
    stepCount = 0;
    stepDisplay.textContent = stepCount;
    goalMessage.textContent = "";
});


function checkGoal() {
    if (stepGoal && stepCount >= stepGoal) {
        goalMessage.textContent = "Congratulations! You've reached your goal!";
    } else {
        goalMessage.textContent = "";
    }
}


document.getElementById('resetBtn').addEventListener('click', () => {
    stepCount = 0;
    stepDisplay.textContent = stepCount;
    goalMessage.textContent = "";
});