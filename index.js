const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const links = [];
axios
  .get('https://web-crawler-test2.herokuapp.com')
  .then(res => {
    return res.data;
  })
  .then(data => {
    const dom = new JSDOM(data);
    const nodeList = dom.window.document.querySelectorAll('a');
    nodeList.forEach(el => {
      links.push(el.href);
    });
  });

console.log(links);
