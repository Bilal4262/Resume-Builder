document.getElementById("shareBtn")!.addEventListener("click", () => {
    alert("Link shared!");
  });
  
  document.getElementById("generateBtn")!.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
  
    const preview = document.getElementById("resumePreview")!;
    preview.innerHTML = `
      <h2 class="preview-heading">${name}</h2>
      <h3 class="preview-subheading">${title}</h3>
      <p><strong>Summary:</strong> ${summary}</p>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Work Experience:</strong> ${workExperience}</p>
    `;
  });
  
  document.getElementById("downloadBtn")!.addEventListener("click", () => {
    const resumeContent = document.getElementById("resumePreview")!.innerHTML;
    const blob = new Blob([resumeContent], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.pdf";
    link.click();
    alert("PDF downloaded!");
  });
  