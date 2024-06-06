async function loadNavbar(){
    try{
      const response = await fetch('/navbar.html')
      if (response.ok) {
        const template = await response.text()
        document.getElementById('navbar-container').innerHTML = template
      } else {
        console.error('Erro ao carregar o navbar:',response.statusText)
      }
    } catch(error) {
      console.error('Erro ao carregar o navbar:', error)
    }
  }
  window.onload = loadNavbar