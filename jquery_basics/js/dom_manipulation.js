/**
 * dom_manipulation.js
 *
 * This file provides responsive functionality for dom_manipulation.html.
 */

// Runs once the page is settled
$(document).ready(() => {
  // List Manipulation
  appendNewListElementToRegularList();
});

/**
 * Sets the text and background color of the paragraph element with the
 * "dom-paragraph" class
 */
const setDomParagraphColor = () => {
  $("p.dom-paragraph").css({ color: "red", background: "#ccc" });
};

/**
 * Adds the "my-class" class to the paragraph element with the
 * "html-dom-paragraph" class
 */
const addHtmlDomParagraphClass = () => {
  $("p.html-dom-paragraph").addClass("my-class");
};

/**
 * Removes the "my-class" class from the paragraph element with the
 * "html-dom-paragraph" class
 */
const removeHtmlDomParagraphClass = () => {
  $("p.html-dom-paragraph").removeClass("my-class");
};

/**
 * Toggles the inclusion of "my-class" class in the paragraph element with the
 * "html-dom-paragraph" class
 */
const toggleHtmlDomParagraphClass = () => {
  $("p.html-dom-paragraph").toggleClass("my-class");
};

/**
 * Wraps each paragraph element in the current page with an h1 element
 */
const wrapEachParagraphWithAnH1Element = () => {
  $("p").wrap("<h1>");
};

/**
 * Wraps all paragraph elements in the current page with an h1 element
 */
const wrapAllParagraphsWithAnH1Element = () => {
  $("p").wrapAll("<h1>");
};

/**
 * Appends the paragraph element with the "dom-paragraph" class to the
 * paragraph element with the "html-dom-paragraph" class
 */
const appendDomToHtmlDomParagraph = () => {
  $(".dom-paragraph").appendTo(".html-dom-paragraph");
};

/**
 * Prepends the paragraph element with the "dom-paragraph" class to the
 * paragraph element with the "html-dom-paragraph" class
 */
const prependDomToHtmlDomParagraph = () => {
  $(".dom-paragraph").prependTo(".html-dom-paragraph");
};

/**
 * Sets the text of the div element with the "my-div" class
 */
const setMyDivText = () => {
  const myDiv = $("#my-div");
  myDiv.text("myDiv text has been set!");
  alert(myDiv.text());
};

/**
 * Sets the HTML of the div element with the "my-div" class
 */
const setMyDivHtml = () => {
  const myDiv = $("#my-div");
  myDiv.html("<h2>myDiv HTML has been set!</h2>");
  alert(myDiv.html());
};

/**
 * Appends a preset list element to the unordered list with the "regular-list"
 * ID
 */
const appendToRegularList = () => {
  $("ul#regular-list").append("<li>Appended List Item</li>");
};

/**
 * Prepends a preset list element to the unordered list with the "regular-list"
 * ID
 */
const prependToRegularList = () => {
  $("ul#regular-list").prepend("<li>Prepended List Item</li>");
};

/**
 * Adds a preset paragraph element before the unordered list with the
 * "regular-list" ID
 */
const addParagraphBeforeRegularList = () => {
  $("ul#regular-list").before("<p>Before the Regular List</p>");
};

/**
 * Adds a preset paragraph element after the unordered list with the
 * "regular-list" ID
 */
const addParagraphAfterRegularList = () => {
  $("ul#regular-list").after("<p>After the Regular List</p>");
};

/**
 * Empties the unordered list with the "regular-list" ID of list elements
 */
const clearRegularList = () => {
  $("ul#regular-list").empty();
};

/**
 * Detaches the unordered list with the "regular-list" ID from the HTML DOM
 * entirely
 */
const detachRegularList = () => {
  $("ul#regular-list").detach();
};

/**
 * Appends the text inputted in the input element with the
 * "new-list-element-field" ID as a list element to the unordered list with the
 * "regular-list" ID after the Enter button is pressed
 */
const appendNewListElementToRegularList = () => {
  $("#new-list-element-field").on("keyup", (e) => {
    if (e.which === 13) {
      e.preventDefault();
      $("ul#regular-list").append(`<li>${e.target.value}</li>`);
    }
  });
};

/**
 * Prints the value of each list element of the unordered list with the
 * "regular-list" ID to the console
 */
const printRegularListElements = () => {
  const regularListArray = $("ul#regular-list li").toArray();
  $.each(regularListArray, (_, regularListValue) => {
    console.log(regularListValue);
  });
};

/**
 * Populates the unordered list with the "user-list" ID with preset users
 */
const populateUserList = () => {
  const userArray = ["Jay", "Allison", "Bob", "Sam"];
  $.each(userArray, (_, userListValue) => {
    $("ul#user-list").append(`<li>${userListValue}</li>`);
  });
};

/**
 * Allows Facebook to open in a new tab once its link is clicked
 */
const allowFacebookToOpenInNewTab = () => {
  $("a#facebook-link").attr("target", "_blank");
};

/**
 * Prevents Facebook to open in a new tab once its link is clicked
 */
const preventFacebookToOpenInNewTab = () => {
  $("a#facebook-link").removeAttr("target");
};

/**
 * Alerts the user of the href value of the anchor element with the
 * "facebook-link" ID
 */
const displayFacebookLinkHref = () => {
  alert($("a#facebook-link").attr("href"));
};
