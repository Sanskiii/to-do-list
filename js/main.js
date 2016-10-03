var itemId = 0

function getUserInput() {
  var userItem = document.getElementById('userInput').value
  if (userItem.trim() != "") {
    var newLi = document.createElement('li')
    newLi.setAttribute('id', "listItem" + itemId)
    newLi.textContent = userItem
    document.getElementById('list').appendChild(newLi)
    document.getElementById('userInput').value = ""
    itemId++
  }
  else {
    document.getElementById("userInput").value = ""
    var errorMessage = document.createElement('p')  
    var errorText = "Please enter something to do."
    errorMessage.createTextNode(errorText)
    document.getElementById('userInput').appendChild(errorMessage)
  }
}

