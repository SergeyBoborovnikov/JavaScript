document.getElementById('open-modal-btn').addEventListener('click', function () {
    document.getElementById('modalPopup').classList.add('open')
});

document.getElementById("close-modal-btn").addEventListener("click", function () {
    document.getElementById("modalPopup").classList.remove("open")
});