/**
 * effects_and_animations.js
 *
 * This file provides responsive functionality for effects_and_animations.html.
 */

// Runs once the page is settled
$(document).ready(() => {
  // Fade Effects
  fadeOut();
  fadeIn();
  fadeToggle();

  // Slide Effects
  slideUp();
  slideDown();
  slideToggle();
  stopEffect();

  // Movement Animations
  moveLeftAndShrink();
  moveRightAndExpand();
  moveClockwise();
});

/**
 * Fades out the div element with the "fade-and-slide-box" ID
 */
const fadeOut = () => {
  $("#fade-out-button").on("click", () => {
    $("#fade-and-slide-box").fadeOut(2000, () => {
      disableFadeOutAndSlideUpButtons();
      enableFadeInAndSlideDownButtons();
    });
  });
};

/**
 * Fades in the div element with the "fade-and-slide-box" ID
 */
const fadeIn = () => {
  $("#fade-in-button").on("click", () => {
    $("#fade-and-slide-box").fadeIn(2000, () => {
      disableFadeInAndSlideDownButtons();
      enableFadeOutAndSlideUpButtons();
    });
  });
};

/**
 * Toggles the fade effect for the div element with the "fade-and-slide-box" ID
 */
const fadeToggle = () => {
  $("#fade-toggle-button").on("click", () => {
    $("#fade-and-slide-box").fadeToggle(2000, () => {
      if ($("#fade-and-slide-box").css("display") === "none") {
        disableFadeOutAndSlideUpButtons();
        enableFadeInAndSlideDownButtons();
      } else {
        disableFadeInAndSlideDownButtons();
        enableFadeOutAndSlideUpButtons();
      }
    });
  });
};

/**
 * Slides up the div element with the "fade-and-slide-box" ID
 */
const slideUp = () => {
  $("#slide-up-button").on("click", () => {
    $("#fade-and-slide-box").slideUp(2000, () => {
      disableFadeOutAndSlideUpButtons();
      enableFadeInAndSlideDownButtons();
    });
  });
};

/**
 * Slides down the div element with the "fade-and-slide-box" ID
 */
const slideDown = () => {
  $("#slide-down-button").on("click", () => {
    $("#fade-and-slide-box").slideDown(2000, () => {
      disableFadeInAndSlideDownButtons();
      enableFadeOutAndSlideUpButtons();
    });
  });
};

/**
 * Toggles the slide effect for the div element with the "fade-and-slide-box"
 * ID
 */
const slideToggle = () => {
  $("#slide-toggle-button").on("click", () => {
    $("#fade-and-slide-box").slideToggle(2000, () => {
      if ($("#fade-and-slide-box").css("display") === "none") {
        disableFadeOutAndSlideUpButtons();
        enableFadeInAndSlideDownButtons();
      } else {
        disableFadeInAndSlideDownButtons();
        enableFadeOutAndSlideUpButtons();
      }
    });
  });
};

/**
 * Stops the fade/slide effect of div element with the "fade-and-slide-box" ID
 */
const stopEffect = () => {
  $("#stop-button").on("click", () => {
    $("#fade-and-slide-box").stop();
  });
};

/**
 * Moves the div element with the "movement-box" ID to the left and shrinks it
 */
const moveLeftAndShrink = () => {
  $("#move-left-and-shrink-button").on("click", () => {
    $("#movement-box").animate({
      height: "6.2rem",
      left: 0,
      opacity: "1",
      width: "6.2rem",
    });
  });
};

/**
 * Moves the div element with the "movement-box" ID to the right and expands it
 */
const moveRightAndExpand = () => {
  $("#move-right-and-expand-button").on("click", () => {
    $("#movement-box").animate({
      height: "18.5rem",
      left: 500,
      opacity: "0.5",
      width: "18.5rem",
    });
  });
};

/**
 * Moves the div element with the "movement-box" ID clockwise
 */
const moveClockwise = () => {
  $("#move-clockwise-button").on("click", () => {
    const movementBox = $("#movement-box");
    movementBox.animate({
      left: 300,
    });
    movementBox.animate({
      top: 300,
    });
    movementBox.animate({
      left: 0,
      top: 300,
    });
    movementBox.animate({
      left: 0,
      top: 0,
    });
  });
};

/**
 * Enables the button elements with the "fade-out-button" and "slide-up-button"
 * IDs
 */
const enableFadeOutAndSlideUpButtons = () => {
  $("#fade-out-button").removeAttr("disabled").text("Fade Out");
  $("#slide-up-button").removeAttr("disabled").text("Slide Up");
};

/**
 * Disables the button elements with the "fade-out-button" and
 * "slide-up-button" IDs
 */
const disableFadeOutAndSlideUpButtons = () => {
  $("#fade-out-button").attr("disabled", "disabled").text("Box is invisible!");
  $("#slide-up-button").attr("disabled", "disabled").text("Box is invisible!");
};

/**
 * Enables the button elements with the "fade-in-button" and
 * "slide-down-button" IDs
 */
const enableFadeInAndSlideDownButtons = () => {
  $("#fade-in-button").removeAttr("disabled").text("Fade In");
  $("#slide-down-button").removeAttr("disabled").text("Slide Down");
};

/**
 * Disables the button elements with the "fade-in-button" and
 * "slide-down-button" IDs
 */
const disableFadeInAndSlideDownButtons = () => {
  $("#fade-in-button").attr("disabled", "disabled").text("Box is visible!");
  $("#slide-down-button").attr("disabled", "disabled").text("Box is visible!");
};
