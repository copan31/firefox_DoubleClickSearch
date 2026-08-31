(function () {

  function onCreated(tab) {
    // console.log(`Created new tab: ${tab.id}`);
  }

  function onError(error) {
    // console.log(`Error: ${error}`);
  }

  browser.runtime.onMessage.addListener((message) => {
    // search on new tab
    browser.search.query({
      text: message.text,
      disposition: "NEW_TAB",
    });
  });

})();
