let roles = document.getElementsByClassName('role-item');
let img = document.getElementsByClassName('img')[0];
for (var i = 0; i < roles.length; i++) {
    roles[i].onmouseover = function() {
        this.classList.add('current');
    }
    roles[i].onmouseout = function() {
        this.classList.remove('current')
    }
}

