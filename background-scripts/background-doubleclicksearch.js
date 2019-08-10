(function () {

  function onCreated(tab) {
    // console.log(`Created new tab: ${tab.id}`);
  }

  function onError(error) {
    // console.log(`Error: ${error}`);
  }

  browser.runtime.onMessage.addListener((message) => {
    // search on new tab
    var creating = browser.tabs.create({
      url: "https://www.google.com/search?q=" + message.text
    });
    creating.then(onCreated, onError);
  });

})();
