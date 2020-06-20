    browser.tabs.onUpdated.addListener(handleUpdated);

    function handleUpdated(tabID, changeInfo, tabInfo) {

            if(tabInfo.status == "loading") {
                let newUrl = changeInfo.url
                if (newUrl !== undefined){                    
                    let command = ":~:text="
                    if (newUrl.includes(command)){
                        var parsedVariables = decodeURI(newUrl.slice(newUrl.indexOf(command) + command.length));
                        setTimeout(function(){ browser.find.find(parsedVariables, {tabId: tabID}).then(found) }, 1000);
                    }
                }
            }

        function found(results) {
            console.log(`There were: ${results.count} matches.`);
            if (results.count > 0) {
              browser.find.highlightResults();
            }
        }

    }