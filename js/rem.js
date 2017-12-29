function Rem (id, size) {
  this.id            = id
  this.size          = size
  this.frizz         = ''
  this.hair          = ''
  this.face          = ''
  this.eyebrows      = ''
  this.bangs         = ''
  this.eye           = ''
  this.mouth         = ''
  this.nose          = ''
  this.ear           = ''
  this.cheek         = ''
  this.barrette      = ''
  this.hairornaments = ''
}


Rem.prototype.Draw = function Draw () {
  var main = document.getElementById(this.id)
  var cnv
  var types = [
    'frizz',
    'hair',
    'face',
    'eyebrows',
    'bangs',
    'eye',
    'mouth',
    'nose',
    'ear',
    'cheek',
    'barrette',
    'hairornaments'
  ]

  for (var i = 0; i < types.length; i++) {
    cnv = document.createElement('canvas')
    cnv.classList.add('cnvs')
    cnv.width = this.size
    cnv.height = this.size
    cnv.id = types[i]
    main.appendChild(cnv)
  }

  this.frizz         = document.getElementById('frizz').getContext('2d')
  this.hair          = document.getElementById('hair').getContext('2d')
  this.face          = document.getElementById('face').getContext('2d')
  this.eyebrows      = document.getElementById('eyebrows').getContext('2d')
  this.bangs         = document.getElementById('bangs').getContext('2d')
  this.eye           = document.getElementById('eye').getContext('2d')
  this.mouth         = document.getElementById('mouth').getContext('2d')
  this.nose          = document.getElementById('nose').getContext('2d')
  this.ear           = document.getElementById('ear').getContext('2d')
  this.cheek         = document.getElementById('cheek').getContext('2d')
  this.barrette      = document.getElementById('barrette').getContext('2d')
  this.hairornaments = document.getElementById('hairornaments').getContext('2d')

  this.setFrizz()
  this.setHair()
  this.setFace()
  this.setEyebrows()
  this.setBangs()
  this.setEye()
  this.setMouth()
  this.setNose()
  this.setEar()
  this.setCheeks()
  this.setBarrette()
  this.setHairOrnaments()
}

Rem.prototype.modifyValue = function modifyValue (value) {
  return (value / 640) * this.size
}

Rem.prototype.setFrizz = function setFrizz () {
  this.frizz.beginPath()
  this.frizz.moveTo(this.modifyValue(79), this.modifyValue(272))
  this.frizz.quadraticCurveTo(
    this.modifyValue(35),
    this.modifyValue(360),
    this.modifyValue(50),
    this.modifyValue(440)
  );
  this.frizz.bezierCurveTo(
    this.modifyValue(60),
    this.modifyValue(520),
    this.modifyValue(120),
    this.modifyValue(520),
    this.modifyValue(145),
    this.modifyValue(482)
  )
  this.frizz.bezierCurveTo(
    80,
    510,
    70,
    495,
    58,
    427
  )
  this.frizz.quadraticCurveTo(45, 360, 79, 272)

  this.frizz.fillStyle = '#89B7F2'
  this.frizz.fill()
  this.frizz.stroke()
}

Rem.prototype.setHair = function setHair () {
  this.hair.beginPath();
  this.hair.moveTo(97, 452);
  this.hair.bezierCurveTo(110, 500, 110, 550, 170, 568);
  this.hair.quadraticCurveTo(120, 540, 131, 510);

  this.hair.fillStyle = '#89B7F2';
  this.hair.fill();
  this.hair.stroke();

  this.hair.beginPath();
  this.hair.moveTo(145, 140);
  this.hair.bezierCurveTo(-10, 370, 130, 450, 70, 542);
  this.hair.quadraticCurveTo(100, 500, 97, 452);
  this.hair.bezierCurveTo(110, 505, 140, 570, 217, 572);
  this.hair.bezierCurveTo(490, 570, 495, 560, 507, 511);
  this.hair.lineTo(533, 539);
  this.hair.bezierCurveTo(600, 480, 610, 320, 596, 243);
  this.hair.bezierCurveTo(590, 200, 550, 110, 485,  88);
  this.hair.bezierCurveTo(390, 50, 200, 55, 145, 140);

  this.hair.fillStyle = '#89B7F2';
  this.hair.fill();
  this.hair.stroke();

  this.hair.beginPath();
  this.hair.moveTo(97, 452);
  this.hair.bezierCurveTo(98, 490, 110, 510, 159, 537);
  this.hair.quadraticCurveTo(145, 520, 139, 497);

  this.hair.fillStyle = '#89B7F2';
  this.hair.fill();
  this.hair.strokeStyle = '#333';
  this.hair.stroke();

  this.hair.beginPath();
  this.hair.moveTo(139, 497);
  this.hair.quadraticCurveTo(145, 510, 167, 537);
  this.hair.strokeStyle = '#333';
  this.hair.lineWidth = 0.6;
  this.hair.stroke();

  this.hair.beginPath();
  this.hair.moveTo(507, 511);
  this.hair.bezierCurveTo(500, 550, 525, 550, 537, 553);
  this.hair.bezierCurveTo(536, 545, 531, 540, 532, 506);

  this.hair.fillStyle = '#89B7F2';
  this.hair.fill();
  this.hair.stroke();
}

Rem.prototype.setFace = function setFace () {
  this.face.beginPath();
  this.face.moveTo(160, 480);
  this.face.bezierCurveTo(190, 580, 200, 580, 310, 623);
  this.face.quadraticCurveTo(420, 570, 475, 505);
  this.face.quadraticCurveTo(500, 450, 510, 400);
  this.face.lineTo(510, 190);
  this.face.lineTo(160, 190);
  this.face.lineTo(160, 480);

  this.face.fillStyle = '#FBEDEA';
  this.face.fill();
  this.face.stroke();
}

Rem.prototype.setEyebrows = function setEyebrows () {
  this.eyebrows.beginPath();
  this.eyebrows.moveTo(332, 314);
  this.eyebrows.quadraticCurveTo(337, 317, 338, 320);
  this.eyebrows.quadraticCurveTo(360, 315, 374, 322);
  this.eyebrows.quadraticCurveTo(365, 310, 332, 314);

  this.eyebrows.fillStyle = '#89B7F2';
  this.eyebrows.fill();
  this.eyebrows.stroke();
}

Rem.prototype.setBangs = function setBangs () {
  //大枠
  this.bangs.beginPath();
  this.bangs.moveTo(133, 188);
  this.bangs.bezierCurveTo(85, 290, 80, 440, 153, 483);
  this.bangs.quadraticCurveTo(270, 489, 322, 476);
  this.bangs.quadraticCurveTo(319, 440, 315, 388);
  this.bangs.quadraticCurveTo(320, 440, 330, 475);
  this.bangs.quadraticCurveTo(332, 475, 334, 474);
  this.bangs.quadraticCurveTo(330, 280, 374, 196);
  this.bangs.bezierCurveTo(385, 310, 443, 420, 515, 440);
  this.bangs.lineTo(515, 188);
  var gra  = this.bangs.createLinearGradient(242, 191, 242, 488);
  gra.addColorStop(0,'#89B7F2');
  gra.addColorStop(0.5,'#89B7F2');
  gra.addColorStop(1,'#E2E2EE');
  this.bangs.fillStyle = gra;
  this.bangs.fill();
  this.bangs.strokeStyle = '#444';
  this.bangs.stroke();

  this.bangs.beginPath();
  this.bangs.moveTo(515, 440);
  this.bangs.lineTo(515, 189);
  this.bangs.strokeStyle = '#89B7F2';
  this.bangs.lineWidth = 3;
  this.bangs.stroke();

  //縦線左から1番目
  this.bangs.beginPath();
  this.bangs.moveTo(140, 368);
  this.bangs.quadraticCurveTo(140, 430, 176, 484);
  var gra2  = this.bangs.createLinearGradient(242, 191, 242, 488);
  gra2.addColorStop(0,'#000');
  gra2.addColorStop(1,'#666');
  this.bangs.strokeStyle = gra2;
  this.bangs.lineWidth = 1;
  this.bangs.stroke();

  //縦線左から2番目
  this.bangs.beginPath();
  this.bangs.moveTo(181, 200);
  this.bangs.quadraticCurveTo(130, 375, 191, 484);
  this.bangs.stroke();

  //縦線左から3番目
  this.bangs.beginPath();
  this.bangs.moveTo(232, 204);
  this.bangs.quadraticCurveTo(183, 330, 252, 485);
  this.bangs.stroke();

  //縦線左から4番目
  this.bangs.beginPath();
  this.bangs.moveTo(213, 337);
  this.bangs.quadraticCurveTo(210, 400, 243, 483);
  this.bangs.stroke();

  //縦線左から5番目
  this.bangs.beginPath();
  this.bangs.moveTo(283, 386);
  this.bangs.quadraticCurveTo(300, 460, 309, 480);
  this.bangs.stroke();

  //眉毛の左の毛束
  this.bangs.beginPath();
  this.bangs.moveTo(306, 220);
  this.bangs.quadraticCurveTo(310, 300, 347, 380);
  this.bangs.quadraticCurveTo(315, 280, 330, 202);
  this.eyebrows.fillStyle = '#89B7F2';
  this.bangs.fill();
  this.bangs.stroke();

  //もみあげ部分
  this.bangs.beginPath();
  this.bangs.moveTo(453, 303);
  this.bangs.quadraticCurveTo(470, 419, 426, 490);
  this.bangs.bezierCurveTo(455, 489, 465, 485, 470, 480);
  this.bangs.quadraticCurveTo(510, 430, 517, 340);
  this.eyebrows.fillStyle = '#89B7F2';
  this.bangs.fill();
  this.bangs.stroke();

  //もみあげの縦線
  this.bangs.beginPath();
  this.bangs.moveTo(486, 362);
  this.bangs.quadraticCurveTo(485, 435, 442, 490);
  this.bangs.stroke();

  //もみあげの左の短い線
  this.bangs.moveTo(438, 367);
  this.bangs.quadraticCurveTo(443, 380, 448, 392);
  this.bangs.lineWidth = 0.4;
  this.bangs.stroke();

  //髪留めの上の線
  this.bangs.beginPath();
  this.bangs.moveTo(419, 182);
  this.bangs.quadraticCurveTo(443, 220, 448, 245);
  this.bangs.strokeStyle = '#333';
  this.bangs.lineWidth = 1;
  this.bangs.stroke();

  this.bangs.beginPath();
  this.bangs.moveTo(119, 271);
  this.bangs.quadraticCurveTo(111, 295, 113, 315);
  this.bangs.quadraticCurveTo(118, 310, 119, 271);
  this.bangs.fillStyle = '#E1F1FF';
  this.bangs.fill();
  this.bangs.strokeStyle = '#E1F1FF';
  this.bangs.stroke();

  this.bangs.beginPath();
  this.bangs.moveTo(126, 291);
  this.bangs.quadraticCurveTo(123, 298, 124, 304);
  this.bangs.quadraticCurveTo(127, 298, 126, 291);
  this.bangs.fill();
  this.bangs.stroke();

  this.bangs.beginPath();
  this.bangs.moveTo(180, 270);
  this.bangs.quadraticCurveTo(170, 290, 172, 319);
  this.bangs.quadraticCurveTo(183, 285, 180, 270);
  this.bangs.fill();
  this.bangs.stroke();

  this.bangs.beginPath();
  this.bangs.moveTo(185, 289);
  this.bangs.quadraticCurveTo(182, 295, 184, 301);
  this.bangs.quadraticCurveTo(186, 295, 185, 289);
  this.bangs.fill();
  this.bangs.stroke();
}

Rem.prototype.setEye = function setEye () {
  this.eye.beginPath();
  this.eye.moveTo(354, 382);
  this.eye.bezierCurveTo(350, 400, 340, 430, 374, 456);
  this.eye.quadraticCurveTo(386, 462, 403, 455);
  this.eye.bezierCurveTo(420, 445, 435, 430, 434, 426);
  this.eye.bezierCurveTo(425, 380, 393, 368, 387, 373);
  this.eye.fillStyle = '#F1F0EE';
  this.eye.fill();
  this.eye.strokeStyle = '#F1F0EE';
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(360, 397);
  this.eye.bezierCurveTo(355, 420, 360, 440, 380, 448);
  this.eye.quadraticCurveTo(395, 452, 404, 447);
  this.eye.bezierCurveTo(422, 430, 420, 410, 419, 404);
  this.eye.bezierCurveTo(410, 380,400, 376, 380, 375);
  this.eye.quadraticCurveTo(364, 383, 360, 397);
  this.eye.fillStyle= '#352C23';
  this.eye.fill();
  this.eye.strokeStyle = '#352C23';
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(366, 414);
  this.eye.bezierCurveTo(370, 365, 415, 390, 412, 422);
  this.eye.fillStyle = '#304574';
  this.eye.fill();
  this.eye.strokeStyle = '#304574';
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(383, 450);
  this.eye.bezierCurveTo(410, 448, 411, 430, 412, 422);
  this.eye.quadraticCurveTo(395, 380, 366, 414);
  this.eye.bezierCurveTo(365, 430, 375, 445, 383, 450);
  this.eye.fillStyle = '#59ABE5';
  this.eye.fill();
  this.eye.strokeStyle = '#59ABE5';
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.arc(389, 439, 10, 0, Math.PI*2, false);
  this.eye.fillStyle = '#A6F5F9';
  this.eye.fill();
  this.eye.strokeStyle = '#A6F5F9';
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.arc(374, 388, 6, 0, Math.PI*2, false);
  this.eye.fillStyle = '#FBFBFB';
  this.eye.fill();
  this.eye.strokeStyle = '#FBFBFB';
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.ellipse(388, 418, 3, 7, 0, 0, Math.PI*2);
  this.eye.fillStyle = '#352C23';
  this.eye.fill();
  this.eye.strokeStyle = '#352C23';
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.arc(404, 435, 4, 0, Math.PI*2, false);
  this.eye.fillStyle = '#FBFBFB';
  this.eye.fill();
  this.eye.strokeStyle = '#FBFBFB';
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(339, 398);
  this.eye.bezierCurveTo(370, 370, 410, 355, 434, 430);
  this.eye.bezierCurveTo(430, 386, 395, 366, 387, 371);
  this.eye.bezierCurveTo(355, 370, 345, 385, 339, 398);
  this.eye.fillStyle = '#352C23';
  this.eye.fill();
  this.eye.strokeStyle = '#352C23';
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(350, 383);
  this.eye.quadraticCurveTo(345, 378, 340, 385);
  this.eye.quadraticCurveTo(346, 378, 351, 381);
  this.eye.fill();
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(350, 381);
  this.eye.quadraticCurveTo(347, 373, 344, 376);
  this.eye.quadraticCurveTo(346, 376, 359, 378);
  this.eye.fill();
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(381, 373);
  this.eye.quadraticCurveTo(368, 365, 371, 362);
  this.eye.quadraticCurveTo(375, 367, 390, 370);
  this.eye.fill();
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(420, 393);
  this.eye.lineTo(434, 394);
  this.eye.lineWidth = 0.8;
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(338, 372);
  this.eye.quadraticCurveTo(348, 360, 358, 361);
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(381, 465);
  this.eye.lineTo(383, 471);
  this.eye.lineTo(383, 466);
  this.eye.fill();
  this.eye.stroke();

  this.eye.beginPath();
  this.eye.moveTo(392, 466);
  this.eye.lineTo(393, 470);
  this.eye.lineTo(394, 465);
  this.eye.fill();
  this.eye.stroke();
}

Rem.prototype.setMouth = function setMouth () {
  this.mouth.beginPath();
  this.mouth.moveTo(287, 572);
  this.mouth.bezierCurveTo(290, 579, 303, 580, 306, 577);
  this.mouth.bezierCurveTo(305, 570, 300, 562, 290, 562);
  this.mouth.quadraticCurveTo(284, 565, 287, 572);

  this.mouth.fillStyle = '#F4ACAA';
  this.mouth.fill();
  this.mouth.stroke();
}

Rem.prototype.setNose = function setNose () {
  this.nose.beginPath();
  this.nose.moveTo(270, 498);
  this.nose.lineTo(274, 506);
  this.nose.lineTo(272, 500);
  this.nose.lineTo(270, 498);

  this.nose.fillStyle = '#000';
  this.nose.fill();
  this.nose.stroke();
}

Rem.prototype.setEar = function setEar () {
  this.ear.beginPath();
  this.ear.moveTo(509, 398);
  this.ear.quadraticCurveTo(515, 390, 524, 391);
  this.ear.quadraticCurveTo(540, 410, 537, 434);
  this.ear.bezierCurveTo(525, 472, 505, 510, 489, 512);
  this.ear.quadraticCurveTo(480, 510, 475, 502);
  this.ear.fillStyle = '#FBEDEA';
  this.ear.fill();
  this.ear.stroke();

  this.ear.beginPath();
  this.ear.moveTo(516, 412);
  this.ear.quadraticCurveTo(490, 440, 497, 438);
  this.ear.quadraticCurveTo(500,460, 485, 478);
  this.ear.lineTo(504, 475);
  this.ear.quadraticCurveTo(530, 425, 516, 412);
  this.ear.fillStyle = '#E6A7A0';
  this.ear.fill();
  this.ear.strokeStyle = '#555';
  this.ear.stroke();
}

Rem.prototype.setCheeks = function setCheeks () {
  var gra  = this.cheek.createRadialGradient(435, 480, 7, 435, 480, 30);
  gra.addColorStop(0,'#FED8D2');
  gra.addColorStop(1,'#FBEDEA');

  //右
  this.cheek.beginPath();
  this.cheek.arc(435, 480, 30, 0, Math.PI * 2, false);
  this.cheek.fillStyle = gra;
  this.cheek.fill();
  this.cheek.strokeStyle = 'rgba(0, 0, 0, 0)';
  this.cheek.stroke();

  this.cheek.beginPath();
  this.cheek.arc(420, 475, 2, 0, Math.PI * 2, false);
  this.cheek.fillStyle = 'rgba(255, 255, 255, .5)';
  this.cheek.fill();
  this.cheek.stroke();

  this.cheek.beginPath();
  this.cheek.arc(178, 487, 2, 0, Math.PI * 2, false);
  this.cheek.fillStyle = 'rgba(255, 255, 255, .5)';
  this.cheek.fill();
  this.cheek.stroke();
}

Rem.prototype.setBarrette = function setBarrette () {
  this.barrette.beginPath();
  this.barrette.moveTo(382, 239);
  this.barrette.quadraticCurveTo(435, 258, 480, 266);
  this.hairornaments.strokeStyle = '#333';
  this.barrette.lineWidth = 7;
  this.barrette.miterLimit = 0.1;
  this.barrette.stroke();

  this.barrette.beginPath();
  this.barrette.moveTo(394, 287);
  this.barrette.quadraticCurveTo(440, 258, 471, 228);
  this.barrette.stroke();

  this.barrette.beginPath();
  this.barrette.moveTo(383, 239);
  this.barrette.quadraticCurveTo(435, 258, 479, 266);
  this.barrette.strokeStyle = '#E087CB';
  this.barrette.lineWidth = 5;
  this.barrette.stroke();

  this.barrette.beginPath();
  this.barrette.moveTo(395, 287);
  this.barrette.quadraticCurveTo(440, 258, 470, 228);
  this.barrette.stroke();
}

Rem.prototype.setHairOrnaments = function setHairOrnaments () {
  this.hairornaments.beginPath();
  this.hairornaments.moveTo(538, 299);
  this.hairornaments.quadraticCurveTo(605, 460, 500, 640);
  this.hairornaments.strokeStyle = '#333';
  this.hairornaments.lineWidth = 7;
  this.hairornaments.miterLimit = 0.1;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(538, 300);
  this.hairornaments.quadraticCurveTo(605, 460, 500, 639);
  this.hairornaments.strokeStyle = '#E087CB';
  this.hairornaments.lineWidth = 5;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(538, 299);
  this.hairornaments.quadraticCurveTo(565, 480, 525, 640);
  this.hairornaments.strokeStyle = '#333';
  this.hairornaments.lineWidth = 7;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(538, 300);
  this.hairornaments.quadraticCurveTo(565, 480, 525, 639);
  this.hairornaments.strokeStyle = '#E087CB';
  this.hairornaments.lineWidth = 5;
  this.hairornaments.stroke();

  //花びら　上
  this.hairornaments.beginPath();
  this.hairornaments.moveTo(537, 291);
  this.hairornaments.quadraticCurveTo(510, 245, 519, 203);
  this.hairornaments.quadraticCurveTo(540, 190, 553, 193);
  this.hairornaments.quadraticCurveTo(560, 245, 537, 291);
  this.hairornaments.strokeStyle = '#333';
  this.hairornaments.lineWidth = 7;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(537, 291);
  this.hairornaments.quadraticCurveTo(510, 245, 519, 203);
  this.hairornaments.quadraticCurveTo(540, 190, 553, 193);
  this.hairornaments.quadraticCurveTo(560, 245, 537, 291);
  this.hairornaments.strokeStyle = '#E087CB';
  this.hairornaments.lineWidth = 5;
  this.hairornaments.stroke();

  //花びら　右
  this.hairornaments.beginPath();
  this.hairornaments.moveTo(539, 297);
  this.hairornaments.quadraticCurveTo(560, 305, 590, 295);
  this.hairornaments.quadraticCurveTo(590, 274, 583, 250);
  this.hairornaments.quadraticCurveTo(550, 270, 539, 290);
  this.hairornaments.lineTo(539, 297);
  this.hairornaments.strokeStyle = '#333';
  this.hairornaments.lineWidth = 7;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(539, 297);
  this.hairornaments.quadraticCurveTo(560, 305, 590, 295);
  this.hairornaments.quadraticCurveTo(590, 274, 583, 250);
  this.hairornaments.quadraticCurveTo(550, 270, 539, 290);
  this.hairornaments.lineTo(539, 297);
  this.hairornaments.strokeStyle = '#E087CB';
  this.hairornaments.lineWidth = 5;
  this.hairornaments.stroke();

  //花びら　右下
  this.hairornaments.beginPath();
  this.hairornaments.moveTo(539, 301);
  this.hairornaments.quadraticCurveTo(540, 340, 567, 379);
  this.hairornaments.quadraticCurveTo(580, 360, 585, 340);
  this.hairornaments.quadraticCurveTo(550, 300, 539, 301);
  this.hairornaments.strokeStyle = '#333';
  this.hairornaments.lineWidth = 7;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(539, 301);
  this.hairornaments.quadraticCurveTo(540, 340, 567, 379);
  this.hairornaments.quadraticCurveTo(580, 360, 585, 340);
  this.hairornaments.quadraticCurveTo(550, 300, 539, 301);
  this.hairornaments.strokeStyle = '#E087CB';
  this.hairornaments.lineWidth = 5;
  this.hairornaments.stroke();

  //花びら　左下
  this.hairornaments.beginPath();
  this.hairornaments.moveTo(537, 300);
  this.hairornaments.quadraticCurveTo(505, 350, 501, 380);
  this.hairornaments.quadraticCurveTo(520, 388, 538, 382);
  this.hairornaments.quadraticCurveTo(540, 350, 537, 300);
  this.hairornaments.strokeStyle = '#333';
  this.hairornaments.lineWidth = 7;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(537, 300);
  this.hairornaments.quadraticCurveTo(505, 350, 501, 380);
  this.hairornaments.quadraticCurveTo(520, 388, 538, 382);
  this.hairornaments.quadraticCurveTo(540, 350, 537, 300);
  this.hairornaments.strokeStyle = '#E087CB';
  this.hairornaments.lineWidth = 5;
  this.hairornaments.stroke();

  //花びら　左
  this.hairornaments.beginPath();
  this.hairornaments.moveTo(537, 299);
  this.hairornaments.quadraticCurveTo(500, 260, 482, 265);
  this.hairornaments.quadraticCurveTo(480, 300, 493, 333);
  this.hairornaments.quadraticCurveTo(510, 325, 537, 299);
  this.hairornaments.strokeStyle = '#333';
  this.hairornaments.lineWidth = 7;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(537, 299);
  this.hairornaments.quadraticCurveTo(500, 260, 482, 265);
  this.hairornaments.quadraticCurveTo(480, 300, 493, 333);
  this.hairornaments.quadraticCurveTo(510, 325, 537, 299);
  this.hairornaments.strokeStyle = '#E087CB';
  this.hairornaments.lineWidth = 5;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(540, 281);
  this.hairornaments.quadraticCurveTo(543, 285, 541, 304);
  this.hairornaments.strokeStyle = '#333';
  this.hairornaments.lineWidth = 7;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(540, 282);
  this.hairornaments.quadraticCurveTo(543, 285, 541, 303);
  this.hairornaments.strokeStyle = '#E087CB';
  this.hairornaments.lineWidth = 5;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(536, 283);
  this.hairornaments.quadraticCurveTo(538, 290, 537, 303);
  this.hairornaments.strokeStyle = '#333';
  this.hairornaments.lineWidth = 7;
  this.hairornaments.stroke();

  this.hairornaments.beginPath();
  this.hairornaments.moveTo(536, 284);
  this.hairornaments.quadraticCurveTo(538, 290, 537, 302);
  this.hairornaments.strokeStyle = '#E087CB';
  this.hairornaments.lineWidth = 5;
  this.hairornaments.stroke();
}
