function sleep(ms) {
    console.log("Waiting " + ms + "ms");
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickOnAllElementsByClassName(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        console.log("Clicking");
        elements[0].click();
        await sleep(5000);
        elements = document.getElementsByClassName(className);
    }
    console.log("Finished clicking on all elements for class: " + className);
}

async function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

async function scrollToTop() {
    window.scrollTo(0, 0);
}

async function showAllConversations() {
    clickOnAllElementsByClassName("ajax-pagination-btn");
}

async function loadAllDiffs() {
    scrollToBottom();
    await sleep(5000);

    clickOnAllElementsByClassName("load-diff-button");
    scrollToTop();
}

async function main() {
    var currentURL = document.location.href;
    if (currentURL.includes("/files")) {
        loadAllDiffs();
    } else if (currentURL.includes("/pull/")) {
        showAllConversations();
    }
    console.log("Done");
}

main();