let tblData, i, j;
tblData = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
i = j = 1;
while (i <= 10) {
    tblData = tblData + "<tr>";
    while (j <= 10) {
        tblData = tblData + "<td>" + i * j + "</td>";
        j++;
    }
    tblData = tblData + "</tr>";
    j = 1;
    i++;
}
tblData = tblData + "</table>";
document.write(tblData);
