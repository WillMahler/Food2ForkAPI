let recipeCount = 30;


function handleSubmitButton()
{
  let ingredient = document.getElementById('userTextField').value
  let page = document.getElementById('recipes');
  page.innerHTML = ''
  let xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(xhttp.responseText)
        let recipes = JSON.parse(data)
        if (ingredient)
          for (let i=0; i < recipeCount; i++) {
            let rec = recipes.recipes[i]
            page.innerHTML += '<div style="display:inline-block; border:2px solid black; '
                           + 'margin:30px">'
                           + '<a href="' + rec.f2f_url + '" target= "_blank">'
                           + '<img src="' + rec.image_url + '" height="350" width="350"/></a>'
                           + '<h2 style="text-align:center;">' + rec.title + '</h2></div>'
          }
        }
      }
  xhttp.open('GET', `/recipes?ingredients=${ingredient}`, true)
  xhttp.send()
}

document.addEventListener('DOMContentLoaded', function() {
  let url = window.location.href
  if (url.indexOf("=") > -1) {
    let ingredientName = url.split('=')
    document.getElementById('userTextField').value = ingredientName[1]
  }
  else
    document.getElementById('userTextField').value = 'cake'

  handleSubmitButton()
})
