function generateURL(submittedURL, submittedTitle, subreddit) {
    var base = "http://www.reddit.com/submit?resubmit=true&selftext=false";
    var formattedTitle = "&title=" + encodeURIComponent(submittedTitle) + "%20[x-post%20from%20/r/" + subreddit + "]";
    var formattedURL = "&url=" + encodeURIComponent(submittedURL);

    return base + formattedTitle + formattedURL;
}

if (window.location.href.indexOf("/comments/") > -1) {
    var submittedURL = document.getElementById('siteTable').getElementsByClassName('title')[1].attributes.href.nodeValue;
    var submittedTitle = document.getElementById('siteTable').getElementsByClassName('title')[0].getElementsByTagName('a')[0].textContent;
    var subreddit = document.getElementsByClassName('redditname')[0].innerText;

    var buttons = document.getElementById('siteTable').getElementsByClassName('flat-list buttons')[0];
    var xpostButton = document.createElement('li');
    var xpostButtonLink = document.createElement('a');

    var finalURL = generateURL(submittedURL, submittedTitle, subreddit);
    
    xpostButtonLink.setAttribute('href', finalURL);
    xpostButtonLink.appendChild(document.createTextNode('xpost'));
    
    xpostButton.appendChild(xpostButtonLink);
    xpostButton.setAttribute('id', 'xpostButton');
    xpostButton.setAttribute('title', 'submit this link to a different subreddit (remember to check \'other discussions\')');
    
    buttons.appendChild(xpostButton);

    console.log(submittedURL);
    console.log(submittedTitle);
    console.log(subreddit);
    console.log(finalURL);
}
