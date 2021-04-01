function getImageCount() {
    // get number from user
    let pictureCount = window.prompt('How many pictures do you want?')
    // first check to see if what they gave me is a number
    if(isNaN(pictureCount) === false) {
      document.write(`<h1>${pictureCount}</h1>`)
      for(var i = 0; i < pictureCount; i++) {
        document.write('<img src="https://static01.nyt.com/images/2021/01/22/world/21xp-sanders-meme/21xp-sanders-meme-superJumbo-v4.jpg" alt="bernie" />')
        }
      } else {
        pictureCount = window.prompt('use a number please')
      }
    }