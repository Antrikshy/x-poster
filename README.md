x-poster
========
A small, lightweight Safari extension that enables an xpost option on reddit's comment pages.

When you normally want to share content from one subreddit to another, you copy the link, open a new submission page, paste the URL, copy-paste or compose a title, add "x-post from /r/blabla", type in the subreddit name and hit submit. Phew! Even typing that was hard. With x-poster installed, you can simply click the newly added xpost button (next to the other buttons, like share, hide, save) under the post title on the comments page. It redirects you to the submission page with the title already filled in (with an x-post message), URL copy-pasted etc. You just need to type in the subreddit and submit.

Contribute
----------
Just fork, clone to your computer, make changes (I don't think you need to have a Safari developer account), test thouroughly, send me a pull request.

What to contribute? Here are some ideas:
* Open submission page in new tab (really simple, I'll add this anyway when I release a version with significant changes).
* Get around the '?resubmit=true' URL parameter without taking the user to an already-submitted page. Or at least find a way to notify the user that their xpost will force a resubmission even if the link has been posted to the new subreddit (inject non-intrusive CSS/JS/div?).
* Somehow handle self posts more elegantly.