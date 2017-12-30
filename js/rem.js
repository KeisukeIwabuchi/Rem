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
  )
  this.frizz.bezierCurveTo(
    this.modifyValue(60),
    this.modifyValue(520),
    this.modifyValue(120),
    this.modifyValue(520),
    this.modifyValue(145),
    this.modifyValue(482)
  )
  this.frizz.bezierCurveTo(
    this.modifyValue(80),
    this.modifyValue(510),
    this.modifyValue(70),
    this.modifyValue(495),
    this.modifyValue(58),
    this.modifyValue(427)
  )
  this.frizz.quadraticCurveTo(
    this.modifyValue(45),
    this.modifyValue(360),
    this.modifyValue(79),
    this.modifyValue(272)
  )

  this.frizz.fillStyle = '#89B7F2'
  this.frizz.fill()
  this.frizz.stroke()
}

Rem.prototype.setHair = function setHair () {
  this.hair.beginPath()
  this.hair.moveTo(this.modifyValue(97), this.modifyValue(452))
  this.hair.bezierCurveTo(
    this.modifyValue(110),
    this.modifyValue(500),
    this.modifyValue(110),
    this.modifyValue(550),
    this.modifyValue(170),
    this.modifyValue(568)
  )
  this.hair.quadraticCurveTo(
    this.modifyValue(120),
    this.modifyValue(540),
    this.modifyValue(131),
    this.modifyValue(510)
  )

  this.hair.fillStyle = '#89B7F2'
  this.hair.fill()
  this.hair.stroke()

  this.hair.beginPath()
  this.hair.moveTo(this.modifyValue(145), this.modifyValue(140))
  this.hair.bezierCurveTo(
    this.modifyValue(-10),
    this.modifyValue(370),
    this.modifyValue(130),
    this.modifyValue(450),
    this.modifyValue(70),
    this.modifyValue(542)
  )
  this.hair.quadraticCurveTo(
    this.modifyValue(100),
    this.modifyValue(500),
    this.modifyValue(97),
    this.modifyValue(452)
  )
  this.hair.bezierCurveTo(
    this.modifyValue(110),
    this.modifyValue(505),
    this.modifyValue(140),
    this.modifyValue(570),
    this.modifyValue(217),
    this.modifyValue(572)
  )
  this.hair.bezierCurveTo(
    this.modifyValue(490),
    this.modifyValue(570),
    this.modifyValue(495),
    this.modifyValue(560),
    this.modifyValue(507),
    this.modifyValue(511)
  )
  this.hair.lineTo(this.modifyValue(533), this.modifyValue(539))
  this.hair.bezierCurveTo(
    this.modifyValue(600),
    this.modifyValue(480),
    this.modifyValue(610),
    this.modifyValue(320),
    this.modifyValue(596),
    this.modifyValue(243)
  )
  this.hair.bezierCurveTo(
    this.modifyValue(590),
    this.modifyValue(200),
    this.modifyValue(550),
    this.modifyValue(110),
    this.modifyValue(485),
    this.modifyValue(88)
  )
  this.hair.bezierCurveTo(
    this.modifyValue(390),
    this.modifyValue(50),
    this.modifyValue(200),
    this.modifyValue(55),
    this.modifyValue(145),
    this.modifyValue(140)
  )

  this.hair.fillStyle = '#89B7F2'
  this.hair.fill()
  this.hair.stroke()

  this.hair.beginPath()
  this.hair.moveTo(this.modifyValue(97), this.modifyValue(452))
  this.hair.bezierCurveTo(
    this.modifyValue(98),
    this.modifyValue(490),
    this.modifyValue(110),
    this.modifyValue(510),
    this.modifyValue(159),
    this.modifyValue(537)
  )
  this.hair.quadraticCurveTo(
    this.modifyValue(145),
    this.modifyValue(520),
    this.modifyValue(139),
    this.modifyValue(497)
  )

  this.hair.fillStyle = '#89B7F2'
  this.hair.fill()
  this.hair.strokeStyle = '#333'
  this.hair.stroke()

  this.hair.beginPath()
  this.hair.moveTo(this.modifyValue(139), this.modifyValue(497))
  this.hair.quadraticCurveTo(
    this.modifyValue(145),
    this.modifyValue(510),
    this.modifyValue(167),
    this.modifyValue(537)
  )
  this.hair.strokeStyle = '#333'
  this.hair.lineWidth = 0.6
  this.hair.stroke()

  this.hair.beginPath()
  this.hair.moveTo(this.modifyValue(507), this.modifyValue(511))
  this.hair.bezierCurveTo(
    this.modifyValue(500),
    this.modifyValue(550),
    this.modifyValue(525),
    this.modifyValue(550),
    this.modifyValue(537),
    this.modifyValue(553)
  )
  this.hair.bezierCurveTo(
    this.modifyValue(536),
    this.modifyValue(545),
    this.modifyValue(531),
    this.modifyValue(540),
    this.modifyValue(532),
    this.modifyValue(506)
  )

  this.hair.fillStyle = '#89B7F2'
  this.hair.fill()
  this.hair.stroke()
}

Rem.prototype.setFace = function setFace () {
  this.face.beginPath()
  this.face.moveTo(this.modifyValue(160), this.modifyValue(480))
  this.face.bezierCurveTo(
    this.modifyValue(190),
    this.modifyValue(580),
    this.modifyValue(200),
    this.modifyValue(580),
    this.modifyValue(310),
    this.modifyValue(623)
  )
  this.face.quadraticCurveTo(
    this.modifyValue(420),
    this.modifyValue(570),
    this.modifyValue(475),
    this.modifyValue(505)
  )
  this.face.quadraticCurveTo(
    this.modifyValue(500),
    this.modifyValue(450),
    this.modifyValue(510),
    this.modifyValue(400)
  )
  this.face.lineTo(this.modifyValue(510), this.modifyValue(190))
  this.face.lineTo(this.modifyValue(160), this.modifyValue(190))
  this.face.lineTo(this.modifyValue(160), this.modifyValue(480))

  this.face.fillStyle = '#FBEDEA'
  this.face.fill()
  this.face.stroke()
}

Rem.prototype.setEyebrows = function setEyebrows () {
  this.eyebrows.beginPath()
  this.eyebrows.moveTo(this.modifyValue(332), this.modifyValue(314))
  this.eyebrows.quadraticCurveTo(
    this.modifyValue(337),
    this.modifyValue(317),
    this.modifyValue(338),
    this.modifyValue(320)
  )
  this.eyebrows.quadraticCurveTo(
    this.modifyValue(360),
    this.modifyValue(315),
    this.modifyValue(374),
    this.modifyValue(322)
  )
  this.eyebrows.quadraticCurveTo(
    this.modifyValue(365),
    this.modifyValue(310),
    this.modifyValue(332),
    this.modifyValue(314)
  )

  this.eyebrows.fillStyle = '#89B7F2'
  this.eyebrows.fill()
  this.eyebrows.stroke()
}

Rem.prototype.setBangs = function setBangs () {
  //大枠
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(133), this.modifyValue(187))
  this.bangs.bezierCurveTo(
    this.modifyValue(85),
    this.modifyValue(290),
    this.modifyValue(80),
    this.modifyValue(440),
    this.modifyValue(153),
    this.modifyValue(483)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(270),
    this.modifyValue(489),
    this.modifyValue(322),
    this.modifyValue(476)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(319),
    this.modifyValue(440),
    this.modifyValue(315),
    this.modifyValue(388)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(320),
    this.modifyValue(440),
    this.modifyValue(330),
    this.modifyValue(475)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(332),
    this.modifyValue(475),
    this.modifyValue(334),
    this.modifyValue(474)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(330),
    this.modifyValue(280),
    this.modifyValue(374),
    this.modifyValue(196)
  )
  this.bangs.bezierCurveTo(
    this.modifyValue(385),
    this.modifyValue(310),
    this.modifyValue(443),
    this.modifyValue(420),
    this.modifyValue(515),
    this.modifyValue(440)
  )
  this.bangs.lineTo(this.modifyValue(515), this.modifyValue(187))
  var gra  = this.bangs.createLinearGradient(
    this.modifyValue(242),
    this.modifyValue(191),
    this.modifyValue(242),
    this.modifyValue(488)
  )
  gra.addColorStop(0,'#89B7F2')
  gra.addColorStop(0.5,'#89B7F2')
  gra.addColorStop(1,'#E2E2EE')
  this.bangs.fillStyle = gra
  this.bangs.fill()
  this.bangs.strokeStyle = '#444'
  this.bangs.stroke()

  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(515), this.modifyValue(440))
  this.bangs.lineTo(this.modifyValue(515), this.modifyValue(189))
  this.bangs.strokeStyle = '#89B7F2'
  this.bangs.lineWidth = 3
  this.bangs.stroke()

  //縦線左から1番目
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(140), this.modifyValue(368))
  this.bangs.quadraticCurveTo(
    this.modifyValue(140),
    this.modifyValue(430),
    this.modifyValue(176),
    this.modifyValue(484)
  )
  var gra2  = this.bangs.createLinearGradient(
    this.modifyValue(242),
    this.modifyValue(191),
    this.modifyValue(242),
    this.modifyValue(488)
  )
  gra2.addColorStop(0, '#000')
  gra2.addColorStop(1, '#666')
  this.bangs.strokeStyle = gra2
  this.bangs.lineWidth = 1
  this.bangs.stroke()

  //縦線左から2番目
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(181), this.modifyValue(200))
  this.bangs.quadraticCurveTo(
    this.modifyValue(130),
    this.modifyValue(375),
    this.modifyValue(191),
    this.modifyValue(484)
  )
  this.bangs.stroke()

  //縦線左から3番目
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(232), this.modifyValue(204))
  this.bangs.quadraticCurveTo(
    this.modifyValue(183),
    this.modifyValue(330),
    this.modifyValue(252),
    this.modifyValue(485)
  )
  this.bangs.stroke()

  //縦線左から4番目
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(213), this.modifyValue(337))
  this.bangs.quadraticCurveTo(
    this.modifyValue(210),
    this.modifyValue(400),
    this.modifyValue(243),
    this.modifyValue(483)
  )
  this.bangs.stroke()

  //縦線左から5番目
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(283), this.modifyValue(386))
  this.bangs.quadraticCurveTo(
    this.modifyValue(300),
    this.modifyValue(460),
    this.modifyValue(309),
    this.modifyValue(480)
  )
  this.bangs.stroke()

  //眉毛の左の毛束
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(306), this.modifyValue(220))
  this.bangs.quadraticCurveTo(
    this.modifyValue(310),
    this.modifyValue(300),
    this.modifyValue(347),
    this.modifyValue(380)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(315),
    this.modifyValue(280),
    this.modifyValue(330),
    this.modifyValue(202)
  )
  this.eyebrows.fillStyle = '#89B7F2'
  this.bangs.fill()
  this.bangs.stroke()

  //もみあげ部分
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(453), this.modifyValue(303))
  this.bangs.quadraticCurveTo(
    this.modifyValue(470),
    this.modifyValue(419),
    this.modifyValue(426),
    this.modifyValue(490)
  )
  this.bangs.bezierCurveTo(
    this.modifyValue(455),
    this.modifyValue(489),
    this.modifyValue(465),
    this.modifyValue(485),
    this.modifyValue(470),
    this.modifyValue(480)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(510),
    this.modifyValue(430),
    this.modifyValue(517),
    this.modifyValue(340)
  )
  this.eyebrows.fillStyle = '#89B7F2'
  this.bangs.fill()
  this.bangs.stroke()

  //もみあげの縦線
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(486), this.modifyValue(362))
  this.bangs.quadraticCurveTo(
    this.modifyValue(485),
    this.modifyValue(435),
    this.modifyValue(442),
    this.modifyValue(490)
  )
  this.bangs.stroke()

  //もみあげの左の短い線
  this.bangs.moveTo(this.modifyValue(438), this.modifyValue(367))
  this.bangs.quadraticCurveTo(
    this.modifyValue(443),
    this.modifyValue(380),
    this.modifyValue(448),
    this.modifyValue(392)
  )
  this.bangs.lineWidth = 0.4
  this.bangs.stroke()

  //髪留めの上の線
  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(419), this.modifyValue(182))
  this.bangs.quadraticCurveTo(
    this.modifyValue(443),
    this.modifyValue(220),
    this.modifyValue(448),
    this.modifyValue(245)
  )
  this.bangs.strokeStyle = '#333'
  this.bangs.lineWidth = 1
  this.bangs.stroke()

  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(119), this.modifyValue(271))
  this.bangs.quadraticCurveTo(
    this.modifyValue(111),
    this.modifyValue(295),
    this.modifyValue(113),
    this.modifyValue(315)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(118),
    this.modifyValue(310),
    this.modifyValue(119),
    this.modifyValue(271)
  )
  this.bangs.fillStyle = '#E1F1FF'
  this.bangs.fill()
  this.bangs.strokeStyle = '#E1F1FF'
  this.bangs.stroke()

  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(126), this.modifyValue(291))
  this.bangs.quadraticCurveTo(
    this.modifyValue(123),
    this.modifyValue(298),
    this.modifyValue(124),
    this.modifyValue(304)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(127),
    this.modifyValue(298),
    this.modifyValue(126),
    this.modifyValue(291)
  )
  this.bangs.fill()
  this.bangs.stroke()

  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(180), this.modifyValue(270))
  this.bangs.quadraticCurveTo(
    this.modifyValue(170),
    this.modifyValue(290),
    this.modifyValue(172),
    this.modifyValue(319)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(183),
    this.modifyValue(285),
    this.modifyValue(180),
    this.modifyValue(270)
  )
  this.bangs.fill()
  this.bangs.stroke()

  this.bangs.beginPath()
  this.bangs.moveTo(this.modifyValue(185), this.modifyValue(289))
  this.bangs.quadraticCurveTo(
    this.modifyValue(182),
    this.modifyValue(295),
    this.modifyValue(184),
    this.modifyValue(301)
  )
  this.bangs.quadraticCurveTo(
    this.modifyValue(186),
    this.modifyValue(295),
    this.modifyValue(185),
    this.modifyValue(289)
  )
  this.bangs.fill()
  this.bangs.stroke()
}

Rem.prototype.setEye = function setEye () {
  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(354), this.modifyValue(382))
  this.eye.bezierCurveTo(
    this.modifyValue(350),
    this.modifyValue(400),
    this.modifyValue(340),
    this.modifyValue(430),
    this.modifyValue(374),
    this.modifyValue(456)
  )
  this.eye.quadraticCurveTo(
    this.modifyValue(386),
    this.modifyValue(462),
    this.modifyValue(403),
    this.modifyValue(455)
  )
  this.eye.bezierCurveTo(
    this.modifyValue(420),
    this.modifyValue(445),
    this.modifyValue(435),
    this.modifyValue(430),
    this.modifyValue(434),
    this.modifyValue(426)
  )
  this.eye.bezierCurveTo(
    this.modifyValue(425),
    this.modifyValue(380),
    this.modifyValue(393),
    this.modifyValue(368),
    this.modifyValue(387),
    this.modifyValue(373)
  )
  this.eye.fillStyle = '#F1F0EE'
  this.eye.fill()
  this.eye.strokeStyle = '#F1F0EE'
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(360), this.modifyValue(397))
  this.eye.bezierCurveTo(
    this.modifyValue(355),
    this.modifyValue(420),
    this.modifyValue(360),
    this.modifyValue(440),
    this.modifyValue(380),
    this.modifyValue(448)
  )
  this.eye.quadraticCurveTo(
    this.modifyValue(395),
    this.modifyValue(452),
    this.modifyValue(404),
    this.modifyValue(447)
  )
  this.eye.bezierCurveTo(
    this.modifyValue(422),
    this.modifyValue(430),
    this.modifyValue(420),
    this.modifyValue(410),
    this.modifyValue(419),
    this.modifyValue(404)
  )
  this.eye.bezierCurveTo(
    this.modifyValue(410),
    this.modifyValue(380),
    this.modifyValue(400),
    this.modifyValue(376),
    this.modifyValue(380),
    this.modifyValue(375)
  )
  this.eye.quadraticCurveTo(
    this.modifyValue(364),
    this.modifyValue(383),
    this.modifyValue(360),
    this.modifyValue(397)
  )
  this.eye.fillStyle= '#352C23'
  this.eye.fill()
  this.eye.strokeStyle = '#352C23'
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(366), this.modifyValue(414))
  this.eye.bezierCurveTo(
    this.modifyValue(370),
    this.modifyValue(365),
    this.modifyValue(415),
    this.modifyValue(390),
    this.modifyValue(412),
    this.modifyValue(422)
  )
  this.eye.fillStyle = '#304574'
  this.eye.fill()
  this.eye.strokeStyle = '#304574'
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(383), this.modifyValue(450))
  this.eye.bezierCurveTo(
    this.modifyValue(410),
    this.modifyValue(448),
    this.modifyValue(411),
    this.modifyValue(430),
    this.modifyValue(412),
    this.modifyValue(422)
  )
  this.eye.quadraticCurveTo(
    this.modifyValue(395),
    this.modifyValue(380),
    this.modifyValue(366),
    this.modifyValue(414)
  )
  this.eye.bezierCurveTo(
    this.modifyValue(365),
    this.modifyValue(430),
    this.modifyValue(375),
    this.modifyValue(445),
    this.modifyValue(383),
    this.modifyValue(450)
  )
  this.eye.fillStyle = '#59ABE5'
  this.eye.fill()
  this.eye.strokeStyle = '#59ABE5'
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.arc(
    this.modifyValue(389),
    this.modifyValue(439),
    this.modifyValue(10),
    this.modifyValue(0),
    Math.PI * 2,
    false
  )
  this.eye.fillStyle = '#A6F5F9'
  this.eye.fill()
  this.eye.strokeStyle = '#A6F5F9'
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.arc(
    this.modifyValue(374),
    this.modifyValue(388),
    this.modifyValue(6),
    this.modifyValue(0),
    Math.PI * 2,
    false
  )
  this.eye.fillStyle = '#FBFBFB'
  this.eye.fill()
  this.eye.strokeStyle = '#FBFBFB'
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.ellipse(
    this.modifyValue(388),
    this.modifyValue(418),
    this.modifyValue(3),
    this.modifyValue(7),
    this.modifyValue(0),
    this.modifyValue(0),
    Math.PI * 2
  )
  this.eye.fillStyle = '#352C23'
  this.eye.fill()
  this.eye.strokeStyle = '#352C23'
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.arc(
    this.modifyValue(404),
    this.modifyValue(435),
    this.modifyValue(4),
    this.modifyValue(0),
    Math.PI * 2,
    false
  )
  this.eye.fillStyle = '#FBFBFB'
  this.eye.fill()
  this.eye.strokeStyle = '#FBFBFB'
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(339), this.modifyValue(398))
  this.eye.bezierCurveTo(
    this.modifyValue(370),
    this.modifyValue(370),
    this.modifyValue(410),
    this.modifyValue(355),
    this.modifyValue(434),
    this.modifyValue(430)
  )
  this.eye.bezierCurveTo(
    this.modifyValue(430),
    this.modifyValue(386),
    this.modifyValue(395),
    this.modifyValue(366),
    this.modifyValue(387),
    this.modifyValue(371)
  )
  this.eye.bezierCurveTo(
    this.modifyValue(355),
    this.modifyValue(370),
    this.modifyValue(345),
    this.modifyValue(385),
    this.modifyValue(339),
    this.modifyValue(398)
  )
  this.eye.fillStyle = '#352C23'
  this.eye.fill()
  this.eye.strokeStyle = '#352C23'
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(350), this.modifyValue(383))
  this.eye.quadraticCurveTo(
    this.modifyValue(345),
    this.modifyValue(378),
    this.modifyValue(340),
    this.modifyValue(385)
  )
  this.eye.quadraticCurveTo(
    this.modifyValue(346),
    this.modifyValue(378),
    this.modifyValue(351),
    this.modifyValue(381)
  )
  this.eye.fill()
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(350), this.modifyValue(381))
  this.eye.quadraticCurveTo(
    this.modifyValue(347),
    this.modifyValue(373),
    this.modifyValue(344),
    this.modifyValue(376)
  )
  this.eye.quadraticCurveTo(
    this.modifyValue(346),
    this.modifyValue(376),
    this.modifyValue(359),
    this.modifyValue(378)
  )
  this.eye.fill()
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(381), this.modifyValue(373))
  this.eye.quadraticCurveTo(
    this.modifyValue(368),
    this.modifyValue(365),
    this.modifyValue(371),
    this.modifyValue(362)
  )
  this.eye.quadraticCurveTo(
    this.modifyValue(375),
    this.modifyValue(367),
    this.modifyValue(390),
    this.modifyValue(370)
  )
  this.eye.fill()
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(420), this.modifyValue(393))
  this.eye.lineTo(this.modifyValue(434), this.modifyValue(394))
  this.eye.lineWidth = 0.8
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(338), this.modifyValue(372))
  this.eye.quadraticCurveTo(
    this.modifyValue(348),
    this.modifyValue(360),
    this.modifyValue(358),
    this.modifyValue(361)
  )
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(381), this.modifyValue(465))
  this.eye.lineTo(this.modifyValue(383), this.modifyValue(471))
  this.eye.lineTo(this.modifyValue(383), this.modifyValue(466))
  this.eye.fill()
  this.eye.stroke()

  this.eye.beginPath()
  this.eye.moveTo(this.modifyValue(392), this.modifyValue(466))
  this.eye.lineTo(this.modifyValue(393), this.modifyValue(470))
  this.eye.lineTo(this.modifyValue(394), this.modifyValue(465))
  this.eye.fill()
  this.eye.stroke()
}

Rem.prototype.setMouth = function setMouth () {
  this.mouth.beginPath()
  this.mouth.moveTo(this.modifyValue(287), this.modifyValue(572))
  this.mouth.bezierCurveTo(
    this.modifyValue(290),
    this.modifyValue(579),
    this.modifyValue(303),
    this.modifyValue(580),
    this.modifyValue(306),
    this.modifyValue(577)
  )
  this.mouth.bezierCurveTo(
    this.modifyValue(305),
    this.modifyValue(570),
    this.modifyValue(300),
    this.modifyValue(562),
    this.modifyValue(290),
    this.modifyValue(562)
  )
  this.mouth.quadraticCurveTo(
    this.modifyValue(284),
    this.modifyValue(565),
    this.modifyValue(287),
    this.modifyValue(572)
  )

  this.mouth.fillStyle = '#F4ACAA'
  this.mouth.fill()
  this.mouth.stroke()
}

Rem.prototype.setNose = function setNose () {
  this.nose.beginPath()
  this.nose.moveTo(this.modifyValue(270), this.modifyValue(498))
  this.nose.lineTo(this.modifyValue(274), this.modifyValue(506))
  this.nose.lineTo(this.modifyValue(272), this.modifyValue(500))
  this.nose.lineTo(this.modifyValue(270), this.modifyValue(498))

  this.nose.fillStyle = '#000'
  this.nose.fill()
  this.nose.stroke()
}

Rem.prototype.setEar = function setEar () {
  this.ear.beginPath()
  this.ear.moveTo(this.modifyValue(509), this.modifyValue(398))
  this.ear.quadraticCurveTo(
    this.modifyValue(515),
    this.modifyValue(390),
    this.modifyValue(524),
    this.modifyValue(391)
  )
  this.ear.quadraticCurveTo(
    this.modifyValue(540),
    this.modifyValue(410),
    this.modifyValue(537),
    this.modifyValue(434)
  )
  this.ear.bezierCurveTo(
    this.modifyValue(525),
    this.modifyValue(472),
    this.modifyValue(505),
    this.modifyValue(510),
    this.modifyValue(489),
    this.modifyValue(512)
  )
  this.ear.quadraticCurveTo(
    this.modifyValue(480),
    this.modifyValue(510),
    this.modifyValue(475),
    this.modifyValue(502)
  )
  this.ear.fillStyle = '#FBEDEA'
  this.ear.fill()
  this.ear.stroke()

  this.ear.beginPath()
  this.ear.moveTo(this.modifyValue(516), this.modifyValue(412))
  this.ear.quadraticCurveTo(
    this.modifyValue(490),
    this.modifyValue(440),
    this.modifyValue(497),
    this.modifyValue(438)
  )
  this.ear.quadraticCurveTo(
    this.modifyValue(500),
    this.modifyValue(460),
    this.modifyValue(485),
    this.modifyValue(478)
  )
  this.ear.lineTo(this.modifyValue(504), this.modifyValue(475))
  this.ear.quadraticCurveTo(
    this.modifyValue(530),
    this.modifyValue(425),
    this.modifyValue(516),
    this.modifyValue(412)
  )
  this.ear.fillStyle = '#E6A7A0'
  this.ear.fill()
  this.ear.strokeStyle = '#555'
  this.ear.stroke()
}

Rem.prototype.setCheeks = function setCheeks () {
  var gra  = this.cheek.createRadialGradient(
    this.modifyValue(435),
    this.modifyValue(480),
    this.modifyValue(7),
    this.modifyValue(435),
    this.modifyValue(480),
    this.modifyValue(30)
  )
  gra.addColorStop(0, '#FED8D2')
  gra.addColorStop(1, '#FBEDEA')

  //右
  this.cheek.beginPath()
  this.cheek.arc(
    this.modifyValue(435),
    this.modifyValue(480),
    this.modifyValue(30),
    this.modifyValue(0),
    Math.PI * 2,
    false
  )
  this.cheek.fillStyle = gra
  this.cheek.fill()
  this.cheek.strokeStyle = 'rgba(0, 0, 0, 0)'
  this.cheek.stroke()

  this.cheek.beginPath()
  this.cheek.arc(
    this.modifyValue(420),
    this.modifyValue(475),
    this.modifyValue(2),
    this.modifyValue(0),
    Math.PI * 2,
    false
  )
  this.cheek.fillStyle = 'rgba(255, 255, 255, .5)'
  this.cheek.fill()
  this.cheek.stroke()

  this.cheek.beginPath()
  this.cheek.arc(
    this.modifyValue(178),
    this.modifyValue(487),
    this.modifyValue(2),
    this.modifyValue(0),
    Math.PI * 2,
    false
  )
  this.cheek.fillStyle = 'rgba(255, 255, 255, .5)'
  this.cheek.fill()
  this.cheek.stroke()
}

Rem.prototype.setBarrette = function setBarrette () {
  this.barrette.beginPath()
  this.barrette.moveTo(this.modifyValue(382), this.modifyValue(239))
  this.barrette.quadraticCurveTo(
    this.modifyValue(435),
    this.modifyValue(258),
    this.modifyValue(480),
    this.modifyValue(266)
  )
  this.hairornaments.strokeStyle = '#333'
  this.barrette.lineWidth = 7
  this.barrette.miterLimit = 0.1
  this.barrette.stroke()

  this.barrette.beginPath()
  this.barrette.moveTo(this.modifyValue(394), this.modifyValue(287))
  this.barrette.quadraticCurveTo(
    this.modifyValue(440),
    this.modifyValue(258),
    this.modifyValue(471),
    this.modifyValue(228)
  )
  this.barrette.stroke()

  this.barrette.beginPath()
  this.barrette.moveTo(this.modifyValue(383), this.modifyValue(239))
  this.barrette.quadraticCurveTo(
    this.modifyValue(435),
    this.modifyValue(258),
    this.modifyValue(479),
    this.modifyValue(266)
  )
  this.barrette.strokeStyle = '#E087CB'
  this.barrette.lineWidth = 5
  this.barrette.stroke()

  this.barrette.beginPath()
  this.barrette.moveTo(this.modifyValue(395), this.modifyValue(287))
  this.barrette.quadraticCurveTo(
    this.modifyValue(440),
    this.modifyValue(258),
    this.modifyValue(470),
    this.modifyValue(228)
  )
  this.barrette.stroke()
}

Rem.prototype.setHairOrnaments = function setHairOrnaments () {
  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(538), this.modifyValue(299))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(605),
    this.modifyValue(460),
    this.modifyValue(500),
    this.modifyValue(640)
  )
  this.hairornaments.strokeStyle = '#333'
  this.hairornaments.lineWidth = 7
  this.hairornaments.miterLimit = 0.1
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(538), this.modifyValue(300))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(605),
    this.modifyValue(460),
    this.modifyValue(500),
    this.modifyValue(639)
  )
  this.hairornaments.strokeStyle = '#E087CB'
  this.hairornaments.lineWidth = 5
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(538), this.modifyValue(299))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(565),
    this.modifyValue(480),
    this.modifyValue(525),
    this.modifyValue(640)
  )
  this.hairornaments.strokeStyle = '#333'
  this.hairornaments.lineWidth = 7
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(538), this.modifyValue(300))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(565),
    this.modifyValue(480),
    this.modifyValue(525),
    this.modifyValue(639)
  )
  this.hairornaments.strokeStyle = '#E087CB'
  this.hairornaments.lineWidth = 5
  this.hairornaments.stroke()

  //花びら　上
  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(537), this.modifyValue(291))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(510),
    this.modifyValue(245),
    this.modifyValue(519),
    this.modifyValue(203)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(540),
    this.modifyValue(190),
    this.modifyValue(553),
    this.modifyValue(193)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(560),
    this.modifyValue(245),
    this.modifyValue(537),
    this.modifyValue(291)
  )
  this.hairornaments.strokeStyle = '#333'
  this.hairornaments.lineWidth = 7
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(537), this.modifyValue(291))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(510),
    this.modifyValue(245),
    this.modifyValue(519),
    this.modifyValue(203)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(540),
    this.modifyValue(190),
    this.modifyValue(553),
    this.modifyValue(193)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(560),
    this.modifyValue(245),
    this.modifyValue(537),
    this.modifyValue(291)
  )
  this.hairornaments.strokeStyle = '#E087CB'
  this.hairornaments.lineWidth = 5
  this.hairornaments.stroke()

  //花びら　右
  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(539), this.modifyValue(297))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(560),
    this.modifyValue(305),
    this.modifyValue(590),
    this.modifyValue(295)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(590),
    this.modifyValue(274),
    this.modifyValue(583),
    this.modifyValue(250)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(550),
    this.modifyValue(270),
    this.modifyValue(539),
    this.modifyValue(290)
  )
  this.hairornaments.lineTo(this.modifyValue(539), this.modifyValue(297))
  this.hairornaments.strokeStyle = '#333'
  this.hairornaments.lineWidth = 7
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(539), this.modifyValue(297))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(560),
    this.modifyValue(305),
    this.modifyValue(590),
    this.modifyValue(295)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(590),
    this.modifyValue(274),
    this.modifyValue(583),
    this.modifyValue(250)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(550),
    this.modifyValue(270),
    this.modifyValue(539),
    this.modifyValue(290)
  )
  this.hairornaments.lineTo(this.modifyValue(539), this.modifyValue(297))
  this.hairornaments.strokeStyle = '#E087CB'
  this.hairornaments.lineWidth = 5
  this.hairornaments.stroke()

  //花びら　右下
  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(539), this.modifyValue(301))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(540),
    this.modifyValue(340),
    this.modifyValue(567),
    this.modifyValue(379)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(580),
    this.modifyValue(360),
    this.modifyValue(585),
    this.modifyValue(340)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(550),
    this.modifyValue(300),
    this.modifyValue(539),
    this.modifyValue(301)
  )
  this.hairornaments.strokeStyle = '#333'
  this.hairornaments.lineWidth = 7
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(539), this.modifyValue(301))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(540),
    this.modifyValue(340),
    this.modifyValue(567),
    this.modifyValue(379)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(580),
    this.modifyValue(360),
    this.modifyValue(585),
    this.modifyValue(340)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(550),
    this.modifyValue(300),
    this.modifyValue(539),
    this.modifyValue(301)
  )
  this.hairornaments.strokeStyle = '#E087CB'
  this.hairornaments.lineWidth = 5
  this.hairornaments.stroke()

  //花びら　左下
  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(537), this.modifyValue(300))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(505),
    this.modifyValue(350),
    this.modifyValue(501),
    this.modifyValue(380)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(520),
    this.modifyValue(388),
    this.modifyValue(538),
    this.modifyValue(382)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(540),
    this.modifyValue(350),
    this.modifyValue(537),
    this.modifyValue(300)
  )
  this.hairornaments.strokeStyle = '#333'
  this.hairornaments.lineWidth = 7
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(537), this.modifyValue(300))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(505),
    this.modifyValue(350),
    this.modifyValue(501),
    this.modifyValue(380)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(520),
    this.modifyValue(388),
    this.modifyValue(538),
    this.modifyValue(382)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(540),
    this.modifyValue(350),
    this.modifyValue(537),
    this.modifyValue(300)
  )
  this.hairornaments.strokeStyle = '#E087CB'
  this.hairornaments.lineWidth = 5
  this.hairornaments.stroke()

  //花びら　左
  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(537), this.modifyValue(299))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(500),
    this.modifyValue(260),
    this.modifyValue(482),
    this.modifyValue(265)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(480),
    this.modifyValue(300),
    this.modifyValue(493),
    this.modifyValue(333)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(510),
    this.modifyValue(325),
    this.modifyValue(537),
    this.modifyValue(299)
  )
  this.hairornaments.strokeStyle = '#333'
  this.hairornaments.lineWidth = 7
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(537), this.modifyValue(299))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(500),
    this.modifyValue(260),
    this.modifyValue(482),
    this.modifyValue(265)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(480),
    this.modifyValue(300),
    this.modifyValue(493),
    this.modifyValue(333)
  )
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(510),
    this.modifyValue(325),
    this.modifyValue(537),
    this.modifyValue(299)
  )
  this.hairornaments.strokeStyle = '#E087CB'
  this.hairornaments.lineWidth = 5
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(540), this.modifyValue(281))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(543),
    this.modifyValue(285),
    this.modifyValue(541),
    this.modifyValue(304)
  )
  this.hairornaments.strokeStyle = '#333'
  this.hairornaments.lineWidth = 7
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(540), this.modifyValue(282))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(543),
    this.modifyValue(285),
    this.modifyValue(541),
    this.modifyValue(303)
  )
  this.hairornaments.strokeStyle = '#E087CB'
  this.hairornaments.lineWidth = 5
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(536), this.modifyValue(283))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(538),
    this.modifyValue(290),
    this.modifyValue(537),
    this.modifyValue(303)
  )
  this.hairornaments.strokeStyle = '#333'
  this.hairornaments.lineWidth = 7
  this.hairornaments.stroke()

  this.hairornaments.beginPath()
  this.hairornaments.moveTo(this.modifyValue(536), this.modifyValue(284))
  this.hairornaments.quadraticCurveTo(
    this.modifyValue(538),
    this.modifyValue(290),
    this.modifyValue(537),
    this.modifyValue(302)
  )
  this.hairornaments.strokeStyle = '#E087CB'
  this.hairornaments.lineWidth = 5
  this.hairornaments.stroke()
}
