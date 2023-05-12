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
 * Sets the text and background color of the ".dom-paragraph" (class) paragraph
 * element
 */
const setDomParagraphColor = () => {
  $("p.dom-paragraph").css({ color: "red", background: "#ccc" });
};

/**
 * Adds the "my-class" class to the ".html-dom-paragraph" (class) paragraph
 */
const addHtmlDomParagraphClass = () => {
  $("p.html-dom-paragraph").addClass("my-class");
};

/**
 * Removes the "my-class" class from the ".html-dom-paragraph" (class)
 * paragraph
 */
const removeHtmlDomParagraphClass = () => {
  $("p.html-dom-paragraph").removeClass("my-class");
};

/**
 * Toggles the inclusion of the "my-class" class in the ".html-dom-paragraph"
 * (class) paragraph
 */
const toggleHtmlDomParagraphClass = () => {
  $("p.html-dom-paragraph").toggleClass("my-class");
};

/**
 * Wraps EACH paragraph element with an h1 element
 */
const wrapEachParagraphWithAnH1Element = () => {
  $("p").wrap("<h1>");
};

/**
 * Wraps ALL paragraph elements with an h1 element
 */
const wrapAllParagraphsWithAnH1Element = () => {
  $("p").wrapAll("<h1>");
};

/**
 * Appends the ".dom-paragraph" (class) paragraph element to the
 * ".html-dom-paragraph" (class) paragraph element
 */
const appendDomToHtmlDomParagraph = () => {
  $(".dom-paragraph").appendTo(".html-dom-paragraph");
};

/**
 * Prepends the ".dom-paragraph" (class) paragraph element to the
 * ".html-dom-paragraph" (class) paragraph element
 */
const prependDomToHtmlDomParagraph = () => {
  $(".dom-paragraph").prependTo(".html-dom-paragraph");
};

/**
 * Sets the text of the "#my-div" (ID) div element
 */
const setMyDivText = () => {
  const myDiv = $("#my-div");
  myDiv.text("myDiv text has been set!");
  alert(myDiv.text());
};

/**
 * Sets the HTML of the "#my-div" (ID) div element
 */
const setMyDivHtml = () => {
  const myDiv = $("#my-div");
  myDiv.html("<h2>myDiv HTML has been set!</h2>");
  alert(myDiv.html());
};

/**
 * Appends a preset list element to the "#regular-list" (ID) unordered list
 */
const appendToRegularList = () => {
  $("ul#regular-list").append("<li>Appended List Item</li>");
};

/**
 * Prepends a preset list element to the "#regular-list" (ID) unordered list
 */
const prependToRegularList = () => {
  $("ul#regular-list").prepend("<li>Prepended List Item</li>");
};

/**
 * Adds a preset paragraph element BEFORE the "#regular-list" (ID) unordered
 * list
 */
const addParagraphBeforeRegularList = () => {
  $("ul#regular-list").before("<p>Before the Regular List</p>");
};

/**
 * Adds a preset paragraph element AFTER the "#regular-list" (ID) unordered
 * list
 */
const addParagraphAfterRegularList = () => {
  $("ul#regular-list").after("<p>After the Regular List</p>");
};

/**
 * Empties the "#regular-list" (ID) unordered list of list elements
 */
const clearRegularList = () => {
  $("ul#regular-list").empty();
};

/**
 * Detaches the "#regular-list" (ID) unordered list from the HTML DOM entirely
 */
const detachRegularList = () => {
  $("ul#regular-list").detach();
};

/**
 * Appends the text inputted in the "#new-list-element-field" (ID) input
 * element as a list element to "#regular-list" (ID) unordered list after the
 * Enter button is pressed
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
 * Prints the value of each list element of the "#regular-list" (ID) unordered
 * list to the console
 */
const printRegularListElements = () => {
  const regularListArray = $("ul#regular-list li").toArray();
  $.each(regularListArray, (_, regularListValue) => {
    console.log(regularListValue);
  });
};

/**
 * Populates the "#user-list" (ID) unordered list with preset users
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
 * Alerts the user of the href value of the "#facebook-link" (ID) anchor
 * element
 */
const displayFacebookLinkHref = () => {
  alert($("a#facebook-link").attr("href"));
};
