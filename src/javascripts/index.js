// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import "bootstrap"

const MakeBox = function(rand) {
    if(rand < .5) {
        document.write('<div class="red box"></div>')
    }
    else {
        document.write('<div class="blue box"></div>')
    }
}

function displayNBoxesUsingFor(i) {
    for (let i = 0; i < 10; ++i) {
        MakeBox(Math.random())
    }
}

function displayNBoxesUsingWhile(j) {
    let i = 0
    while (i < j) {
        i += 1
        MakeBox(Math.random())
    }
}

function displayNBoxesUsingDo(j) {
    let i = 0
    do {
        i += 1
        MakeBox(Math.random())
    } while (i < j)
}

const square = function(x) {
    return x * x
}

displayNBoxesUsingDo(5)
displayNBoxesUsingFor(10)
displayNBoxesUsingWhile(15)
alert(square(21))