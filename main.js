// ==UserScript==
// @name         discord token login
// @version      0.1
// @description  amferohack addon
// @author       amfero
// @match        *discord.com/login*
// @icon         https://www.freelogovectors.net/wp-content/uploads/2021/05/discord_logo-freelogovectors.net_-180x180.png
// @grant        none
// ==/UserScript==


(function() 
{

    var button

    window.addEventListener("load", () => {
        addButton("token login", login)
    })
    
    function addButton(text, onclick) {
        var cssObj = {position: "absolute", bottom: "20%", right: "50%"}
        button = document.createElement("button"), btnStyle = button.style
        document.body.appendChild(button)
        button.innerHTML = text
        button.onclick = onclick
        Object.keys(cssObj).forEach(key => btnStyle[key] = cssObj[key])
        return button
    }

    function login()
    {
        var token = document.getElementsByClassName("inputDefault-3FGxgL input-2g-os5 inputField-2RZxdl")[0].value

        setInterval(() => 
        {
            document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
        }, 50)

        setTimeout(() => 
        {
            location.reload()
        }, 2500)
    }

    setInterval(function()
    {
        if(document.getElementsByClassName("inputDefault-3FGxgL input-2g-os5 inputField-2RZxdl").length < 1)
        {
            button.remove()
        }
    }, 50)

})()