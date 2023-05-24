let tbodyEle = document.getElementById("tbody_data");
let tbody_data = '';
let i = 2;
let j = 1;
while (i <= 9) {
    tbody_data += `<tr>`;
    j = 1;
    while (j <= 9) {
        tbody_data += `<td style="border: 1px solid gray; padding: 5px 10px;"> ${i} x ${j} = ${i * j}</td>`;
        j++;
    }
    tbody_data += `</tr>`;

    i++;
}


tbodyEle.innerHTML = tbody_data;
console.log(tbody_data)