    browser.tabs.onUpdated.addListener(handleUpdated);

    function handleUpdated(tabID, changeInfo, tabInfo) {
            if(changeInfo.status == "complete") {
                let newUrl = tabInfo.url
                let command = ":~:text="
                if (newUrl.includes(command)){
                    var parsedVariables = decodeURI(newUrl.slice(newUrl.indexOf(command) + command.length));
                    browser.find.find(parsedVariables, {tabId: tabID}).then(found)
                }
            }

        function found(results) {
            if (results.count > 0) {
              browser.find.highlightResults({noScroll: false});
            }
        }

    }