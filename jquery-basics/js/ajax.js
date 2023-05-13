/**
 * ajax.js
 *
 * This file provides responsive functionality for ajax.html.
 */

// Runs once the page is settled
$(document).ready(() => {
  // Posting 101
  postUserInput();
});

/**
 * Loads the contents of test.html to the "#test" (ID) div element
 */
const loadTestHTML = () => {
  $("#test").load("test.html", (_, textStatus, xhr) => {
    if (textStatus === "success") {
      alert("test.html has been loaded successfully!");
    } else if (textStatus === "error") {
      alert(`Error: ${xhr.statusText}`);
    }
  });
};

/**
 * Gets the current Bitcoin prices and stores them in the
 * "#current-bitcoin-prices" (ID) unordered list
 */
const getBitcoinPricesJson = () => {
  $.getJSON(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    (bitcoinData) => {
      for (const moneyCode of ["USD", "GBP", "EUR"]) {
        const price = bitcoinData["bpi"][moneyCode]["rate_float"];
        const unit = bitcoinData["bpi"][moneyCode]["description"];

        $("ul#current-bitcoin-prices").append(`<li>${price} ${unit}s</li>`)
          .append();
      }
    },
  );
};

/**
 * Gets random cat facts and stores them in the "#cat-facts" (ID) div element
 */
const getCatFacts = () => {
  $.get("https://cat-fact.herokuapp.com/facts", (catData) => {
    $.each(catData, (index, catObject) => {
      $("#cat-facts").append(`<p>${index + 1}. ${catObject["text"]}</p>`);
    });
  });
};

/**
 * Gets random memes and stores them in the "#memes" (ID) div element
 */
const getMemes = () => {
  $.ajax({
    method: "GET",
    url: "https://api.imgflip.com/get_memes",
    dataType: "json",
  }).done((memeData) => {
    const memeArray = memeData["data"]["memes"];
    $.map(memeArray, (memeObject, index) => {
      $("#memes").append(
        `<h3>${index + 1}. ${memeObject["name"]}</h3><img src="${
          memeObject["url"]
        }" alt="meme"/>`,
      );
    });
  });
};

/**
 * Sends the user input as a post request and alerts the user of its response
 */
const postUserInput = () => {
  $("#post-form").on("submit", (e) => {
    e.preventDefault();
    const userInput = $("#user-input").val();
    const postUrl = $(this).attr("action");

    $.post(postUrl, { userInput: userInput }).done((responseText) =>
      alert(`Post request was successful. Response:\n${responseText}.`)
    );
  });
};
