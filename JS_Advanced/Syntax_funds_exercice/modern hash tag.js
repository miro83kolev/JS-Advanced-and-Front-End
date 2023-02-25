function hashtag(text) {
    let textArr = text.split(" ");
    let special = [];
    for (const word of textArr) {
      if (word.startsWith("#") && word.length > 1) {
        let trimmedword = word.substring(1);
        if (/^[a-z]+$/i.test(trimmedword)) {
          special.push(trimmedword);
        }
      }
    }
    console.log(special.join("\n"));
  }