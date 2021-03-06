# Chartbeat Front-end Engineering Exercise

This exercise is comprised of multiple parts, and should be done in order.


## 1.  Debug

We've provided `cbUtils.js` which handles all AJAX calls to the Chartbeat API.

However this JavaScript file has some problems in it that we want you to fix.

Fix any style or functionality problems with `cbUtils.js`.


## 2.  Develop

Create a web app called Minibeat that shows the top ten visited pages
for gizmodo.com, sorted by current visitor number.  Use the provided file
structure as a starting point.  Modify the file structure to what you
think is best.

Use your fixed version of `cbUtils.js` from above to make API calls.  For full
API information refer to our [API Docs for live/toppages/](https://chartbeat.com/docs/api/explore/#endpoint=live/toppages/v3/).

Each page title in the list (found in the API via `page.title`) should be
preceded by its current visitor number (found via `page.stats.people`).

The list should poll for updates every 5 seconds and update the DOM to reflect
the new data.

When an item in the list is clicked, the right pane should show a list of
its top referers (found via `page.stats.toprefs`).  Each referer should include
its number of visitors (found via `topref.visitors`).

It should be formatted like the following wireframe:

<pre>
-----------------------------------------------------------
| Minibeat                                                |
-----------------------------------------------------------
| ### Page 1                | Page 3 details              |
| ### Page 2                |-----------------------------|
| ### Page 3              > | ### Referer 1               |
| ### Page 4                | ### Referer 2               |
| ### Page 5                | ### Referer 3               |
| ### Page 6                | ### Referer 4               |
| ### Page 7                | ### Referer 5               |
| ### Page 8                |                             |
| ### Page 9                |                             |
| ### Page 10               |                             |
-----------------------------------------------------------
</pre>

**Rules:**

 * Do not use jQuery or any other frameworks/languages (i.e. use pure JavaScript and CSS).

 * We are interested in how you structure large applications.

 * Do just enough so we can evaluate your understanding of JavaScript, HTML and CSS.

 * It should work in modern (HTML5) browsers. Focus on Chrome, Firefox, and Safari. IE compatibility is nice but don't spend too much time on it.

## Good Luck!
