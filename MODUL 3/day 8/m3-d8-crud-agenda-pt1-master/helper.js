const url = "https://striveschool.herokuapp.com/api/product/";

var authToken = btoa("user26:Q2h7j3FtxhdxMdab")
      var message = document.querySelector("#message")

      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

      function setPlaceholders() {
        for (let input of document.querySelectorAll(".form-control")) {
          let placeholder = capitalize(input.id)
          input.setAttribute("placeholder", placeholder)
          input.setAttribute("onfocus", "this.placeholder=''")
          input.setAttribute("onblur", `this.placeholder='${placeholder}'`)
        }
      }

      window.onload = async function () {
        setPlaceholders()
      }
      
      async function doSubmit() {
        event.preventDefault()

        let response = await fetch(url, {
          method: "POST",
          headers: {
            "Authorization": `Basic ${authToken}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(makeProduct())
        })
        
        message.classList.replace("d-none", "d-flex")
        message.innerHTML = (response.status === 200) ? "OK" : "Something went wrong"

      }