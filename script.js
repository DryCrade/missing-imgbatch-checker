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

const extension = ".JPG";
let missing_file = [];

function checkFolder() {
    const from = parseInt(document.getElementById('from').value);
    const to = parseInt(document.getElementById('to').value);

    missing_file = []

    for (let i = from; i <= to; i++) {
        const fileName = "IMG_" + i + extension
        if(!(uploadedFiles.includes(fileName))) {
            missing_file.push(fileName)
        }
    }

    document.getElementById('result').innerHTML = missing_file.join(', ')
}