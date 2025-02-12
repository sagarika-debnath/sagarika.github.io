function downloadResume() {
    alert("Downloading Resume...");
}

 document.addEventListener("DOMContentLoaded", function () {
        const messages = ["My", "Name", "is", "Sagarika", "Debnath !"];
        let index = 0;
        const highlight = document.getElementById("highlight");

        if (!highlight) {
            console.error("Element with ID 'loadingText' not found!");
            return;
        }

        const changeText = setInterval(() => {
            highlight.textContent = messages[index];
            index++;

            if (index >= messages.length) {
                clearInterval(changeText); // Stop changing text when done
            }
        }, 500); // Change text every 500ms
});