function grid(x_axis, y_axis) {
    for (let x = 0; x < y_axis; x++) {
        console.log(x);
        var div = document.createElement('div');
        div.id = 'div-horizontal' + x;
        //div.innerHTML = x;
        div.className = 'horizontal-div';
        document.body.append(div);

        for (let y = 0; y < y_axis; y++) {
            var divFather = document.getElementById('div-horizontal' + x);
            var newDiv = document.createElement('div');
            newDiv.id = 'div-' + x + '-' + y;
            //newDiv.innerHTML = x + '+' + y;
            newDiv.className = 'vertical-div';
            divFather.appendChild(newDiv);
        }
    }
}