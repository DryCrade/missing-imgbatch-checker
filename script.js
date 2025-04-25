const uploadForm = document.querySelector('.upload');
const resultDiv = document.getElementById('result');
let uploadedFiles = [];

uploadForm.addEventListener('submit', function(e) {

    e.preventDefault(); // Corrected to prevent default behavior

    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;

    // Store the names of the uploaded files
    uploadedFiles = Array.from(files).map(file => file.name);
    document.getElementById('uploadedFilesList').innerHTML = uploadedFiles.join(' &nbsp; ')
});

var extension = "." + document.getElementById('ext').value
let missing_file = [];

function checkFolder() {
    const from = parseInt(document.getElementById('from').value);
    const to = parseInt(document.getElementById('to').value);

    var extension = "." + document.getElementById('ext').value
    missing_file = []

    for (let i = from; i <= to; i++) {
        const fileName = "IMG_" + i + extension.toUpperCase()
        const fileNameLC = "IMG_" + i + extension.toLowerCase()
        if(!(uploadedFiles.includes(fileName) || uploadedFiles.includes(fileNameLC))) {
            missing_file.push(fileName)
        }
    }

    document.getElementById('result').innerHTML = missing_file.join(', ')
}