Web Crawler
Jonny's gone and done it again.

He's created a website generator, which creates a randomly generated HTML site with lots of links. However, across the site, many of the links are broken and he's struggling to find them manually.

This is where you come in. He'd like you to create a full stack application that looks at some of these websites, and compiles a list of all the broken links across the entire domain (not just on the index page).

Here is his user stories. They include a few non-traditional 'technical' ones that we're specifying just for learning purposes today.

As a Jonny, I should be able to use a webapp and input a website URL, which hits my backend API.
As a Jonny, I would like a compiled report of all of the broken links across the site in a TXT file
As a Jonny, I would like the report to be downloaded automatically in the browser
As a Jonny, I know that finding all the broken links across a large website could be a time consuming operation. If I've already searched for a certain URL, I should be given a cached report instead of waiting for a new one.
As a Jonny, I am a backend purist (🤫), and would like to use no NPM packages for the API.
As a Jonny, it might be nice to get some graphical feedback which displays the percentage of links that are broken, compared to those that are not.
As a Jonny, I would like you to use proper GIT practices
As a Jonny, I would like you to use a kanban board to track your teams progress
As a Jonny, I would like to separate the concerns between my front end and back end
IMPORTANT: As a Jonny, I would like to avoid accidentally launching a Denial of Service attack on any website. For that reason, when using your web crawler, please only user it on the links below.

Here are several of Jonny's pages:

https://broken-links-api.herokuapp.com/
https://web-crawler-test1.herokuapp.com/
https://web-crawler-test2.herokuapp.com/
https://random-static-linky-site-01.herokuapp.com/
https://random-static-linky-site-02.herokuapp.com/
