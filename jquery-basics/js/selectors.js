/**
 * selectors.js
 *
 * This file provides responsive functionality for selectors.html.
 */

/**
 * Hides the h1 elements of the current page
 */
const hideH1Elements = () => {
  $("h1").hide();
};

/**
 * Hides the h1 elements with the "heading1" id of the current page
 */
const hideHeadingOne = () => {
  $("h1#heading1").hide();
};

/**
 * Hides the elements with the "heading2" class of the current page
 */
const hideHeadingTwo = () => {
  $(".heading2").hide();
};

/**
 * Hides the elements with the "submit" type of the current page
 */
const hideSubmitButton = () => {
  $(":submit").hide();
};

/**
 * Hides all elements of the current page
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
 * Turns the text color of the first list element within an unordered list
 * of class "list" red
 */
const turnFirstListElementRed = () => {
  $("ul#list li:first").css("color", "red");
};

/**
 * Turns the text color of the last list element within an unordered list
 * of class "list" green
 */
const turnLastListElementGreen = () => {
  $("ul#list li:last").css("color", "green");
};

/**
 * Turns the text color of all elements with the "href" attribute red
 */
const turnAnchorElementsRed = () => {
  $("[href]").css("color", "red");
};

/**
 * Turns the text color of anchor elements with the
 * "[href='https://yahoo.com']" attribute green
 */
const turnYahooLinkGreen = () => {
  $("a[href='https://yahoo.com']").css("color", "green");
};

/**
 * Sets the background color of even list elements (0-indexed) within an
 * unordered list of class "list" yellow
 */
const setEvenListElementsBackgroundColor = () => {
  $("ul#list li:even").css("background-color", "yellow");
};

/**
 * Sets the background color of odd list elements (0-indexed) within an
 * unordered list of class "list" gray
 */
const setOddListElementsBackgroundColor = () => {
  $("ul#list li:odd").css("background-color", "#ccc");
};

/**
 * Removes the bullet point of every third list element within an unordered
 * list of class "list"
 */
const removeEveryThirdListElementBullet = () => {
  $("ul#list li:nth-child(3n)").css("list-style", "none");
};
