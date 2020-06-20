(async (browser) => {

    async function findInAllTabs(allTabs) {
        for (let tab of allTabs) {
          let results = await browser.find.find("banana", {tabId: tab.id});
          console.log(`In page "${tab.url}": ${results.count} matches.`)
        }
      }
      console.log(browser.tabs.query({}))
      browser.tabs.query({}).then(findInAllTabs);

    browser.tabs.onUpdated.addListener(handleUpdated);

    

    function handleUpdated(tabId, changeInfo, tabInfo) {
        let newUrl = changeInfo.url

        if (newUrl !== undefined){
            let command = "#:~:"
            if (newUrl.includes(command)){
                var parsedVariables = decodeURI(newUrl.slice(newUrl.indexOf(command) + command.length));
            }
        }

    }
    
})(window.chrome || window.browser);