function Numbers(start, end) {
    if (start <= end) {
        document.querySelector("div").innerText = start;
        console.log(start);
        start ++;

        setTimeout(function() {
            Numbers(start, end)
        }, 1000);
    }
}

Numbers(1, 20);









