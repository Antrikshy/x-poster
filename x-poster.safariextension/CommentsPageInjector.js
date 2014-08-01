if (window.location.href.indexOf("/comments/") > -1) {
    var submittedURL = document.getElementById('siteTable').getElementsByClassName('title')[1].attributes.href.nodeValue;
    var submittedTitle = document.getElementById('siteTable').getElementsByClassName('title')[0].getElementsByTagName('a')[0].textContent;
    var subreddit = document.getElementsByClassName('redditname')[0].innerText;

    var buttons = document.getElementById('siteTable').getElementsByClassName('flat-list buttons')[0];
    var xpostButton = document.createElement('li');
    var xpostButtonLink = document.createElement('a');
    
    xpostButtonLink.setAttribute('href', "http://www.example.com");
    xpostButtonLink.appendChild(document.createTextNode('xpost'));
    
    xpostButton.appendChild(xpostButtonLink);
    xpostButton.setAttribute('id', 'xpostButton');
    xpostButton.setAttribute('title', 'submit this link to a different subreddit');
    
    buttons.appendChild(xpostButton);

    console.log(submittedURL);
    console.log(submittedTitle);
    console.log(subreddit);
}
