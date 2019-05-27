const htmlStr = '<p><em>lorem</em><strong>ipsum</strong></p>';
// 正则 replace splice
const stripHTMLTags = str => str.replace(/<[^>]*>/g,"");