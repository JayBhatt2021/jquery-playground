/**
 * selectors.js
 *
 * This file provides responsive functionality for selectors.html.
 */

/**
 * Hides all h1 elements
 */
const hideH1Elements = () => {
  $("h1").hide();
};

/**
 * Hides the "#heading1" (ID) h1 elements
 */
const hideHeadingOne = () => {
  $("h1#heading1").hide();
};

/**
 * Hides the ".heading2" (class) elements
 */
const hideHeadingTwo = () => {
  $(".heading2").hide();
};

/**
 * Hides the ":submit" (type) elements
 */
const hideSubmitButton = () => {
  $(":submit").hide();
};

/**
 * Hides all elements
 */
const hideAllElements = () => {
  $("*").hide();
};

/**
 * Turns the text color of all span elements within paragraph elements red
 */
const turnParagraphSpanElementsRed = () => {
  $("p span").css("color", "red");
};

/**
 * Turns the text color of the first list element in the "#list" (ID) unordered
 * list red
 */
const turnFirstListElementRed = () => {
  $("ul#list li:first").css("color", "red");
};

/**
 * Turns the text color of the last list element in the "#list" (ID) unordered
 * list green
 */
const turnLastListElementGreen = () => {
  $("ul#list li:last").css("color", "green");
};

/**
 * Turns the text color of "[href]" (attribute) elements red
 */
const turnAnchorElementsRed = () => {
  $("[href]").css("color", "red");
};

/**
 * Turns the text color of "[href='https://yahoo.com']" (attribute) anchor
 * elements green
 */
const turnYahooLinkGreen = () => {
  $("a[href='https://yahoo.com']").css("color", "green");
};

/**
 * Sets the background color of even list elements (0-indexed) in the "#list"
 * (ID) unordered list yellow
 */
const setEvenListElementsBackgroundColor = () => {
  $("ul#list li:even").css("background-color", "yellow");
};

/**
 * Sets the background color of odd list elements (0-indexed) in the "#list"
 * (ID) unordered list gray
 */
const setOddListElementsBackgroundColor = () => {
  $("ul#list li:odd").css("background-color", "#ccc");
};

/**
 * Removes the bullet point of every third list element in the "#list" (ID)
 * unordered list
 */
const removeEveryThirdListElementBullet = () => {
  $("ul#list li:nth-child(3n)").css("list-style", "none");
};
