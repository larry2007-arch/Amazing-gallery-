
        // Get the modal and its content elements
        var modal = document.getElementById("myModal");
        var modalImage = document.getElementById("modalImage");
        var modalVideo = document.getElementById("modalVideo");

        // Function to open the modal and display the selected media
        function openModal(element) {
            modal.style.display = "flex";
            if (element.tagName === 'IMG') {
                modalImage.src = element.dataset.src;
                modalImage.style.display = "block";
                modalVideo.style.display = "none";
                modalVideo.pause(); // Ensure video is paused
                modalVideo.currentTime = 0; // Reset video to the beginning
            } else if (element.tagName === 'VIDEO') {
                modalVideo.src = element.dataset.src;
                modalVideo.style.display = "block";
                modalVideo.play();
                modalImage.style.display = "none";
            }
        }

        // Function to close the modal
        function closeModal() {
            modal.style.display = "none";
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }

        // Close the modal when clicking outside of the content
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }

        // Close the modal when the user presses the Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                if (modal.style.display === "flex") {
                    closeModal();
                }
            }
        });
