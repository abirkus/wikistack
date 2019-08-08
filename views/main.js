const html = require("html-template-tag");
const layout = require("./layout");
const wikipage = require("./wikipage.js");
module.exports = (pages) => layout(`  
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
    ${pages.map(function(page){
          return '<li><a href='+ page.slug + '>' + page.title + '</a></li>'
          }).join('')}
    </ul>
  </ul>`);