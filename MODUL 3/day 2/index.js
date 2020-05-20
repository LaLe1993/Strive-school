function loadData() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(
      parsedJson => { // parsedJson is a list of Users as an Array
        const list = document.getElementById("myStuff")

        parsedJson.forEach(user => {
          const listElement = document.createElement('li')
          const textNode = document.createTextNode(user.email)
          listElement.appendChild(textNode)
          list.appendChild(listElement)
        })

      }).catch(err => console.log(err))

  }
  loadData()