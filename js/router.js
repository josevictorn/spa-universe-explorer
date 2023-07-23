export class Router {
  routes = {}

  add(routerName, page) {
    this.routes[routerName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
      if (pathname === '/universe') {
        document.querySelector('body').style.backgroundImage = "url('./../images/mountains-universe02.png')"
        document.querySelector('#app').style.textAlign = ""
        
        document.querySelector('a#home').style.fontWeight = ""
        document.querySelector('a#home').style.color = ""
        document.querySelector('a#universe').style.fontWeight = "bold"
        document.querySelector('a#universe').style.color = "#FFF"
        document.querySelector('a#exploration').style.color=""
        document.querySelector('a#exploration').style.fontWeight=""
      } else if (pathname === '/exploration') {
        document.querySelector('body').style.backgroundImage = "url('./../images/mountains-universe-3.png')"
        document.querySelector('#app').style.textAlign = ""

        document.querySelector('a#home').style.fontWeight = ""
        document.querySelector('a#home').style.color = ""
        document.querySelector('a#exploration').style.color="#FFF"
        document.querySelector('a#exploration').style.fontWeight="700"
        document.querySelector('a#universe').style.fontWeight = ""
        document.querySelector('a#universe').style.color = ""
      } else {
        document.querySelector('body').style.backgroundImage = "url('./../images/mountains-universe-1.png')"
        document.querySelector('#app').style.textAlign = "center"

        document.querySelector('a#home').style.fontWeight = "700"
        document.querySelector('a#home').style.color = "#FFF"
        document.querySelector('a#exploration').style.color=""
        document.querySelector('a#exploration').style.fontWeight=""
        document.querySelector('a#universe').style.fontWeight = ""
        document.querySelector('a#universe').style.color = ""
      }
    })
  }
}