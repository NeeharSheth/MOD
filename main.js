img_count=0;

function tv(){
    img_count= 0;
    localStorage.setItem("image_count",img_count);
    window.location="tv.html";
}

function trash(){
    img_count= 1;
    localStorage.setItem("image_count",img_count);
    window.location="trash.html";
}

function chair(){
    img_count= 2;
    localStorage.setItem("image_count",img_count);
    window.location="chair.html";
}

function bed(){
    img_count= 3;
    localStorage.setItem("image_count",img_count);
    window.location="bed.html";
}

function books(){
    img_count= 4;
    localStorage.setItem("image_count",img_count);
    window.location="books.html";
}