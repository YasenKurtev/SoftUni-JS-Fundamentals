function browserHistory(obj, arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "Clear History and Cache") {
            let tokens = arr[i].split(' ');
            let action = tokens.shift();
            let website = tokens.join(' ');
            if (action === "Open") {
                obj["Open Tabs"].push(website);
                obj["Browser Logs"].push(arr[i]);
            } else if (action === "Close" && obj["Open Tabs"].includes(website)) {
                for (let i = 0; i < obj["Open Tabs"].length; i++) {
                    if (obj["Open Tabs"][i] === website) {
                        let index = obj["Open Tabs"].indexOf(website);
                        obj["Open Tabs"].splice(index, 1);
                        i = -1;
                    }
                }
                obj["Recently Closed"].push(website);
                obj["Browser Logs"].push(arr[i]);
            }
        } else {
            obj["Open Tabs"] = [];
            obj["Recently Closed"] = [];
            obj["Browser Logs"] = [];
        }

    }

    console.log(obj["Browser Name"]);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(', ')}`);
}

browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"])