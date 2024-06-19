let noButtonClickCount = 0;
const messages = [
    "Anh bảo không nhấn nút 'Không' rồi",
    "Em không nghe lời anh à",
    "Em không được nhấn nút 'Không' nữa",
    "Lêu lêu nút 'Không' biến mất rồi ấn 'Có' điii"
];

const images = [
    "img/images.jpg",
    "img/7006ac9f2950f58788af543101a4fc28.jpg",
    "img/tải xuống.jpg",
    "img/tải xuống (1).jpg"
];

function noButtonClicked() {
    if (noButtonClickCount < messages.length - 1) {
        document.getElementById("message").innerText = messages[noButtonClickCount];
    } else {
        document.getElementById("message").innerText = messages[noButtonClickCount];
        document.getElementById("noButton").style.display = "none";
        document.getElementById("yesButton").disabled = false;
    }

    showImage(images[noButtonClickCount]);
    noButtonClickCount++;
    enlargeYesButton();
    shrinkNoButton();
}

function enlargeYesButton() {
    const yesButton = document.getElementById("yesButton");
    yesButton.style.transform = `scale(${1 + noButtonClickCount * 0.1})`;
}

function shrinkNoButton() {
    const noButton = document.getElementById("noButton");
    noButton.style.transform = `scale(${1 - noButtonClickCount * 0.1})`;
}

function showImage(src) {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = '';
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Cute image";
    imageContainer.appendChild(img);
}

function yesButtonClicked() {
    document.getElementById("message").innerText = "Anh xin lỗi vì anh hong được tinh tế như mấy bạn khác, cái này chắc em sẽ vui được 1 tí nè anh mong em sẽ bỏ qua cho anh nha anh còn thiếu sót nhiều điều lắm, anh mong em sẽ cho anh cơ hội nhaaaaaa.";
    document.getElementById("yesButton").disabled = true;
    showImage("img/tải xuống (2).jpg");
}
