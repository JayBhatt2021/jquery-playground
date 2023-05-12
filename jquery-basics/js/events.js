/**
 * events.js
 *
 * This file provides responsive functionality for events.html.
 */

// Runs once the page is settled
$(document).ready(() => {
  // Mouse Events
  hideText();
  showText();
  doubleClickToggle();
  mouseUpDownToggle();
  mouseMoveToggle();
  showProperties();

  // Mouse Coordinates
  trackMouseCoordinates();

  // Form Events
  handleInputEvents();
  handleSelectChange();
  handleFormSubmit();
});

/**
 * Hides the ".mouse-events-paragraph" (class) paragraph when the "Hide Text"
 * button is clicked
 */
const hideText = () => {
  $("#hide-text-button").on("click", () => {
    alert('"Hide Text" button clicked!');
    $(".mouse-events-paragraph").hide();
  });
};

/**
 * Shows the ".mouse-events-paragraph" (class) paragraph when the "Show Text"
 * button is clicked
 */
const showText = () => {
  $("#show-text-button").on("click", () => {
    alert('"Show Text" button clicked!');
    $(".mouse-events-paragraph").show();
  });
};

/**
 * Toggles the visibility of the ".mouse-events-paragraph" (class) paragraph
 * when the "Toggle Text (Double Click)" button is double-clicked
 */
const doubleClickToggle = () => {
  $("#double-click-toggle-button").on("dblclick", () => {
    $(".mouse-events-paragraph").toggle();
  });
};

/**
 * Toggles the visibility of the ".mouse-events-paragraph" (class) paragraph
 * when the "Toggle Text (Mouse Up and Down)" button is clicked
 */
const mouseUpDownToggle = () => {
  $("#mouse-up-down-toggle-button").on("mouseup", () => {
    $(".mouse-events-paragraph").toggle();
  }).on("mousedown", () => {
    $(".mouse-events-paragraph").toggle();
  });
};

/**
 * Toggles the visibility of the ".mouse-events-paragraph" (class) paragraph
 * when the "Toggle Text (Mouse Move)" button is hovered over
 */
const mouseMoveToggle = () => {
  $("#mouse-move-toggle-button").on("mousemove", () => {
    $(".mouse-events-paragraph").toggle();
  });
};

/**
 * Shows the ID, innerHTML, outerHTML, and className properties of the "Show
 * This Button's Properties" button to the user once it is clicked
 */
const showProperties = () => {
  $("#properties-button").on("click", (e) => {
    const message = `Button ID: ${e.currentTarget.id}\nButton innerHTML: ` +
      `${e.currentTarget.innerHTML}\nButton outerHTML: ` +
      `${e.currentTarget.outerHTML}\nButton Class Name: ` +
      `${e.currentTarget.className}`;
    alert(message);
  });
};

/**
 * Displays the current screen coordinate values of the mouse icon in the
 * "coordinates" (ID) h2 element
 */
const trackMouseCoordinates = () => {
  $(document).on("mousemove", (e) => {
    $("#coordinates").html(
      `X-Coordinate: ${e.clientX}, Y-Coordinate: ${e.clientY}`,
    ).css("color", "blue");
  });
};

/**
 * Turns the input element pink when focused upon and white when it loses focus
 * and displays current text value of the input element to the console
 */
const handleInputEvents = () => {
  $("input").on("focus", () => {
    $(":focus").css("background", "pink");
  }).on("blur", () => {
    $("input").css("background", "white");
  }).on("keyup", (e) => {
    console.log(e.target.value);
  });
};

/**
 * Alerts the user of the dropdown value he/she selected once the "gender" (ID)
 * select element detects a change
 */
const handleSelectChange = () => {
  $("select#gender").on("change", (e) => {
    alert(`"${e.target.value}" has been selected!`);
  });
};

/**
 * Submits the form without refreshing the page and alerts the user of the
 * values he/she typed in the "#name" and "#email" (IDs) input elements
 */
const handleFormSubmit = () => {
  $("#form").on("submit", (e) => {
    e.preventDefault();
    const name = $("input#name").val(), email = $("input#email").val();
    alert(`The name "${name}" and email "${email}" has been submitted!`);
  });
};
