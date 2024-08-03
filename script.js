window.addEventListener('DOMContentLoaded', function() {
    var cookieValue = getCookie('backgroundColor'),
        btns = document.querySelectorAll('.color-btn');
  
    if (cookieValue) {
        setBackgroundColor(cookieValue);
    }
    
    Array.from(btns).forEach(function(btn) {
        btn.addEventListener('click', function() {
            var color = this.getAttribute('data-color');
            setBackgroundColor(color);
        });
    });
});
  
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    setCookie('backgroundColor', color);
}
  
function getCookie(name) {
    var cookies = document.cookie.split(';'),
        cookie = cookies.find(function(str) { return str.indexOf(name + '=') === 0; });
    if (cookie) {
        return cookie.split('=')[1];
    }
    return null;
}
  
function setCookie(name, value) {
    document.cookie = name + '=' + value;
}