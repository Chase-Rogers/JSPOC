

fetch('https://jsonplaceholder.typicode.com/users')
   .then((res) => res.json())
   .then((data) => {
      // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
      const users = data //This is an array with the content. No feed, no info about author etc..
      // const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
      // Functions to create a short text out of whole blog's content

      // Put things in right spots of markup
      let output = '';
      users.forEach((item) => {
        console.log(item)
         output += `
         <li id="${item.id}">
            <h1>${item.name}</h1>
         </li>`

      })
      document.querySelector('.users').innerHTML = output


}).then()

fetch('https://jsonplaceholder.typicode.com/posts')
   .then((res) => res.json())
   .then((data) => {
     // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
     const posts = data //This is an array with the content. No feed, no info about author etc..
     // const posts = res.filter(item => item.categories.length > 0) // That's the main trick* !
     console.log(posts)

      let output = '';
      posts.forEach((item) => {
        // console.log(item.body)
         output += `
         <li class="">
            <h3>${item.body}</h3>
         </li>`

      })
      document.querySelector('.posts').innerHTML = 'test'

})