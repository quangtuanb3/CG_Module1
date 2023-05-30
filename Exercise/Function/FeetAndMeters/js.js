function changeToMeter() {
    let foot = Number(document.getElementById("foot").value);
    let meter = 0.305 * foot;
    document.getElementById('meter').value = meter.toFixed(3);
}

function changeToFoot() {
    let meter = Number(document.getElementById('meter').value);
    let foot = meter / 0.305;
    document.getElementById('foot').value = foot.toFixed(3);
}