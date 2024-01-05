function checkPassword() {
    var enteredPassword = document.getElementById('password').value;
    var encodedPassword = btoa(enteredPassword);

    if (encodedPassword === 'ZGJ1dA==') {
        console.log("Input Password: ", enteredPassword, " & Result: SUCCESS");

        document.getElementById('password-overlay').style.display = 'none';

        // Redirect to the Google Docs link
        window.location.href = '/dbut';
    } else {
        alert('올바르지 않은 비밀번호입니다.');
        console.log("Input Password: ", enteredPassword, " & Result: FAIL");
        document.getElementById('password').value = '';
    }
}

document.getElementById('password').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

window.onload = function () {
    document.getElementById('password-overlay').style.display = 'flex';

    var userIpElement = document.getElementById('user-ip');
    // API에서 가져온 IP로 업데이트
    fetch('https://api.ip.pe.kr/json/')
        .then(response => response.json())
        .then(data => {
            userIpElement.textContent = data.ip || 'N/A';
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            userIpElement.textContent = 'N/A';
        });
};
