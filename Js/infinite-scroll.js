    $(document).ready(function () {
        var imagesPerPage = 12; // Number of images to show per page
        var imagesToShow = 4; // Number of images to show when scrolling to the bottom
        var $resultContainer = $('.result-container'); // Container for the images
        var isLoading = false; // Flag to indicate if images are currently being loaded

        // Function to show the images based on the current page
        function showImages(page) {
            var startIndex = (page - 1) * imagesPerPage;
            var endIndex = startIndex + imagesPerPage;
            $resultContainer.find('.result-container-box').hide(); // Hide all images
            $resultContainer.find('.result-container-box').slice(startIndex, endIndex).show(); // Show the images for the current page
        }

        // Initial page load
        showImages(1);
        // Scroll event handler
        $(window).scroll(function () {
            var scrollHeight = $resultContainer.height() - $(window).height();
            var scrollTop = $(window).scrollTop();

            // Check if scrolled to the bottom of the container and not currently loading images
            if (scrollTop >= scrollHeight && !isLoading) {
                var currentPage = Math.ceil($resultContainer.find('.result-container-box:visible').length / imagesPerPage) + 1;
                var remainingImages = $resultContainer.find('.result-container-box:hidden').length;

                // Determine the number of images to show when scrolling to the bottom
                var imagesToScroll = Math.min(remainingImages, imagesToShow);

                if (remainingImages === 0) {
                    // All images have been loaded, so hide the loading GIF and return
                    $('.loading-container').hide();
                    return;
                }

                // Show the loading GIF
                $('.loading-container').show();

                // Set isLoading flag to true
                isLoading = true;

                // Simulate delay for demonstration purpose (replace with actual image loading logic)
                setTimeout(function () {
                    // Show the additional images
                    $resultContainer.find('.result-container-box:hidden').slice(0, imagesToScroll).show();

                    // Hide the loading GIF if all images have been loaded
                    if ($resultContainer.find('.result-container-box:hidden').length === 0) {
                        $('.loading-container').hide();
                    }

                    // Set isLoading flag to false
                    isLoading = false;
                }, 1000); // Replace with appropriate delay in milliseconds
            }
        });
    });
