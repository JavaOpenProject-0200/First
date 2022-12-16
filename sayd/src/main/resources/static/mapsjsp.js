/*window.initMap = function () {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5400456, lng: 126.9921017 },
    zoom: 10,
  });
};*/

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.628255, lng: 127.462993 },
    zoom: 13,
  });

  var specialAnimalsvets = [
    {
      place: "수동물병원",
      lat: 36.628255,
      lng: 127.462993,
      url: "https://naver.me/xw63ScN1",
      address: "충북 청주시 서원구 모충로3번길 81 한진신세대아파트 상가 110호",
    },
    { place: "이즈동물병원", lat: 36.622139, lng: 127.514085, url: "https://naver.me/FmgVfFoL", address: "충북 청주시 상당구 용암북로 154" },
    { place: "소망종합동물병원", lat: 36.666282, lng: 127.86792, url: "https://naver.me/xkqfMLEL", address: "충북 청주시 청원구 공항로 100-1 소망동물병원" },
    {
      place: "충북대학교 동물의료센터",
      lat: 36.623221,
      lng: 127.456142,
      url: "https://naver.me/FIgz8uyf",
      address: "충북 청주시 서원구 충대로 1 충북대학교 수의과대학 동물의료센터",
    },
    { place: "하나로동물병원", lat: 36.33262, lng: 127.444736, url: "https://naver.me/G0fFU4yf", address: "대전 동구 동대전로 115" },
    { place: "케나인동물병원", lat: 36.348754, lng: 127.399677, url: "https://naver.me/FLBKKKeA", address: "대전 서구 둔산남로 200" },
    { place: "다솜동물병원", lat: 36.788949, lng: 127.12847, url: "https://naver.me/5012bMz4", address: "충남 천안시 동남구 수곡2길 8-3" },
    {
      place: "아리스타동물의료센터",
      lat: 36.820281,
      lng: 127.110759,
      url: "https://naver.me/xmrP7VRY",
      address: "충남 천안시 서북구 불당23로 73-30 아리스타 팰리스 1층",
    },
    { place: "고운동물병원", lat: 36.518532, lng: 127.232274, url: "https://naver.me/FWJw5Crk", address: "세종 마음로 241 지상1, 2층" },
    { place: "쿨펫양한방동물병원", lat: 36.358448, lng: 127.354259, url: "https://naver.me/xbwn7bzu", address: "대전 유성구 한밭대로 502 홈플러스" },
  ];

  var infowindow = new google.maps.InfoWindow();

  for (var i = 0; i < specialAnimalsvets.length; i++) {
    var title = specialAnimalsvets[i].place;
    var pos = new google.maps.LatLng(specialAnimalsvets[i].lat, specialAnimalsvets[i].lng);

    var marker = new google.maps.Marker({
      position: pos,
      title: title,
      map: map,
      animation: google.maps.Animation.DROP,
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          var contents = "";
          contents += "<div style='font-family: Nanum Gothic, sans-serif;font-size: 18px; font-weight: bold;margin-bottom: 5px;'>";
          contents += specialAnimalsvets[i].place;
          contents += "</div>";
          contents += "<table style='border-spacing:2px;border:0px;'>";
          contents += "<tbody>";
          contents += "<tr>";
          contents += "<td style='width:70px;color:#767676;padding-right:12px'> 네이버지도: ";
          contents += "<td><a href=";
          contents += specialAnimalsvets[i].url;
          contents += ">";
          contents += specialAnimalsvets[i].url;
          contents += "</a>";
          contents += "</tr>";
          contents += "<td style='color:#767676;padding-right:12px'>주소";
          contents += "<td><span>";
          contents += specialAnimalsvets[i].address;
          contents += "</span>";
          contents += "</tr>";
          contents += "</tbody>";
          contents += "</table>";
          infowindow.setContent(contents);
          infowindow.open(map, marker);
        };
      })(marker, i)
    );

    if (marker) {
      marker.addListener("click", function () {
        map.setCenter(this.getPosition());
        map.setZoom(14);
      });
    }
  }
}