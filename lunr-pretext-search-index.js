var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Cool Examples",
  "body": " Cool Examples  Text of section.  Here are some examples. See    example pretext elements   This is an example of an example.  This concludes the example.    No hint. Here's some math     "
},
{
  "id": "example-example",
  "level": "2",
  "url": "sec-section-name.html#example-example",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": " example pretext elements   This is an example of an example.  This concludes the example.    No hint. Here's some math    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
