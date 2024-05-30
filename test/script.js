// script.js
document.querySelector('.image-container').addEventListener('mouseenter', function() {
    const oldImage = document.querySelector('.image.old');
    const newImage = document.querySelector('.image.new');

    // Old image slides out to the right
    oldImage.style.transform = 'translateX(100%)';

    // Wait until the old image is out, then slide in the new image
    setTimeout(() => {
        newImage.style.transform = 'translateX(0)';
    }, 1000);  // This timeout should match the duration of the transition in CSS
});

document.querySelector('.image-container').addEventListener('mouseleave', function() {
    const oldImage = document.querySelector('.image.old');
    const newImage = document.querySelector('.image.new');

    // New image slides out to the right
    newImage.style.transform = 'translateX(100%)';

    // Wait until the new image is out, then slide in the old image
    setTimeout(() => {
        oldImage.style.transform = 'translateX(0)';
    }, 1000);  // This timeout should match the duration of the transition in CSS
});
