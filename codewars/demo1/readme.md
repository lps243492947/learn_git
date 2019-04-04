[twitter] ()
写一个函数 将完成以下功能 参数为一句话 英文的
- 如果字符超过140字，返回false
- 如果是空字符，也返回false
- 以#开始
- 每个单词首字母大写

  function gengrateHashtag(str) {
      if( str.length > 140 || str === none) {
          return false;
      } else {
          for (i = 0 ;i = str.length;i++) {
              if (str[i] === &nbsp) {
                  str[i+1]
              }
          }
          console.log('#' + str)
      }
  }

  console.log(gengrateHashtag('hello miss dong'));
    function gengrateHashtag(str) { 
        if (str.length > 140 || str === '')
            return false;
        str = '#' + str;
        str += str.split(' ').map(word => word.charAt(0).toUppercase() + word.slice(1)).join(' ');
        return str;
    }
    console.log(gengrateHashtag('hello miss dong'));