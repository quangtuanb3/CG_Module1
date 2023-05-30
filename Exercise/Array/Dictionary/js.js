function toVietNamese() {
    var english = [
      "apple",
      "banana",
      "cat",
      "dog",
      "elephant",
      "flower",
      "guitar",
      "house",
      "ice cream",
      "juice"
    ];
  
    var vietnam = [
      "quả táo",
      "quả chuối",
      "con mèo",
      "con chó",
      "con voi",
      "bông hoa",
      "đàn guitar",
      "ngôi nhà",
      "kem",
      "nước ép"
    ];
  
    let englishInput = document.getElementById("english").value;
    let vietnameseOutput = document.getElementById('vietnamese');
  
    let index = english.indexOf(englishInput);
    if (index === -1) {
      vietnameseOutput.value = 'Not Found';
    } else {
      vietnameseOutput.value = vietnam[index];
    }
  }
  