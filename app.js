document.getElementById("shareBtn").addEventListener("click", function () {
    alert("Link shared!");
});
document.getElementById("generateBtn").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var summary = document.getElementById("summary").value;
    var skills = document.getElementById("skills").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var preview = document.getElementById("resumePreview");
    preview.innerHTML = "\n      <h2 class=\"preview-heading\">".concat(name, "</h2>\n      <h3 class=\"preview-subheading\">").concat(title, "</h3>\n      <p><strong>Summary:</strong> ").concat(summary, "</p>\n      <p><strong>Skills:</strong> ").concat(skills, "</p>\n      <p><strong>Education:</strong> ").concat(education, "</p>\n      <p><strong>Work Experience:</strong> ").concat(workExperience, "</p>\n    ");
});
document.getElementById("downloadBtn").addEventListener("click", function () {
    var resumeContent = document.getElementById("resumePreview").innerHTML;
    var blob = new Blob([resumeContent], { type: "application/pdf" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.pdf";
    link.click();
    alert("PDF downloaded!");
});
