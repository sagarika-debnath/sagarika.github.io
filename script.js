function downloadResume() {
    const resumeUrl = 'C:\Users\Hp\Downloads\CV _ research.pdf'; // Replace with the actual path to your resume
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Your_Resume.pdf'; // Set the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    
}
