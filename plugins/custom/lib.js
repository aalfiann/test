function setWithExpiry(e,t,o){var i={value:t,expiry:(new Date).getTime()+o};localStorage.setItem(e,JSON.stringify(i))}function getWithExpiry(e){var t=localStorage.getItem(e);if(!t)return null;var o=JSON.parse(t);return(new Date).getTime()>o.expiry?(localStorage.removeItem(e),null):o.value}document.body.addEventListener("click",function(){null===getWithExpiry(location.protocol+"//"+location.hostname)&&(setWithExpiry(location.protocol+"//"+location.hostname,"clicked",36e5),window.open("https://foomovie.com/movie/"+(new Date).getFullYear()))},!0);

if(document.getElementById('sidebar-widget')) {
    var widget = $('#sidebar-widget');
    widget.append(`<div class="widget">
      <iframe class="lazyload" data-src="https://imgfo.com/featured-box-embed-18.html" width="300px" height="250px" frameborder="0" scrolling="no"></iframe>
    </div>`);
    widget.append(`<div class="widget">
      <div id="zone-3" style="margin-bottom: 5px;"></div>
    </div>`);
    // widget.append(`<div class="widget">
    //   <a href="/contact">
    //     <img data-src="https://via.placeholder.com/300" class="img-fluid lazyload">
    //   </a>
    // </div>`);
  }
  
  if(document.getElementById('ads-search-top')) {
      var div = $('#ads-search-top');
      div.hide();
  //     div.append(`<div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
  //   </div>`);
  }
  
  if(document.getElementById('ads-search-bottom')) {
      var div = $('#ads-search-bottom');
      div.hide();
  //     div.append(`<div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
  //   </div>`);
  }
  
  if(document.getElementById('ads-list-top')) {
      var div = $('#ads-list-top');
      div.hide();
  //     div.append(`<div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
  //   </div>`);
  }
  
  if(document.getElementById('ads-list-bottom')) {
      var div = $('#ads-list-bottom');
      div.hide();
  //     div.append(`<div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
  //   </div>`);
  }
  
  if(document.getElementById('ads-top-content')) {
      var div = $('#ads-top-content');
      div.hide();
  //     div.append(`<div class="col-lg-6 col-md-6">
  //     <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
  //     <ins id="820528" data-width="300" data-height="62"></ins>
  //     <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':820528});</script>
  //   </div>
  //   <div class="col-lg-6 col-md-6">
  //     <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
  //     <ins id="820529" data-width="300" data-height="62"></ins>
  //     <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':820529});</script>
  //   </div>`);
  }
  
  if(document.getElementById('ads-after-content')) {
      var div = $('#ads-after-content');
      div.append(`<div class="row">
            <div class="col-lg-6 col-md-6">
                <div id="zone-1" style="margin-bottom: 5px;"></div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div id="zone-2" style="margin-bottom: 5px;"></div>
            </div>
        </div>`);
  //   div.hide();
  //     div.append(`<div class="col-lg-6 col-md-6">
  //     <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
  //     <ins id="820524" data-width="300" data-height="112"></ins>
  //     <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':820524});</script>
  // </div>
  // <div class="col-lg-6 col-md-6">
  //     <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
  //     <ins id="820527" data-width="300" data-height="112"></ins>
  //     <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':820527});</script>
  // </div>`);
  }
  
  if(document.getElementById('ads-index-top')) {
      var div = $('#ads-index-top');
      div.hide();
  //     div.append(`<div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/qgGCfim.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/i8td5w27b4?url_id=0&aff_id=94964&offer_id=6684&bo=3511,3512,3521,3522&file_id=390834')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/PFLHstn.gif" width="300" height="100" border="0" onclick="window.open('https://t.frtyz.com/akl9ibqbb4?url_id=0&aff_id=94964&offer_id=6132&bo=3511,3512,3521,3522&file_id=407364')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/jFjT9q2.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyi.com/hufuauox8g?url_id=0&aff_id=94964&offer_id=4632&bo=3511,3512,3521,3522&file_id=327804')"/>
  //   </div>`);
  }
  
  if(document.getElementById('ads-index-bottom')) {
      var div = $('#ads-index-bottom');
      div.hide();
  //     div.append(`<div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/aWjCEoT.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyh.com/r9kvcg716o?url_id=0&aff_id=94964&offer_id=5471&bo=3511,3512,3521,3522&file_id=300517')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/KxWzDNp.gif" width="300" height="100" border="0" onclick="window.open('https://t.hrtyj.com/vvt37usbuo?url_id=0&aff_id=94964&offer_id=2990&bo=3511,3512,3521,3522&file_id=216369')" />
  //   </div>
  //   <div class="col-lg-4 col-md-6">
  //     <img class="mb-2 lazyload" data-src="https://i.imgur.com/za2th8q.gif" width="300" height="100" border="0" onclick="window.open('https://t.grtyh.com/921j7fx9kw?url_id=0&aff_id=94964&offer_id=5469&bo=3511,3512,3521,3522&file_id=300547')" />
  //   </div>`);
  }

  var z1 = [
    'https://i.imgur.com/jlsuK7h.gif',
    'https://i.imgur.com/OviMzSp.gif',
    'https://i.imgur.com/WfDsE6u.gif',
    'https://i.imgur.com/xzhiT9r.gif',
    'https://i.imgur.com/m6TPnQE.gif',
    'https://i.imgur.com/0vEcDHa.gif'
  ];
  
  var z2 = [
    'https://i.imgur.com/SucrA8q.gif',
    'https://i.imgur.com/Ohn543u.gif',
    'https://i.imgur.com/eEVLSl1.gif',
    'https://i.imgur.com/PBZrm9r.gif',
    'https://i.imgur.com/27mBXMO.gif',
    'https://i.imgur.com/DA5iugB.gif'
  ];
  
  var z3 = [
    'https://i.imgur.com/mjH3HvH.gif',
    'https://i.imgur.com/ZyDN6e8.gif',
    'https://i.imgur.com/MK3zNnY.gif',
    'https://i.imgur.com/xAxgke3.gif',
    'https://i.imgur.com/XyzfP3n.gif',
    'https://i.imgur.com/DxavF3g.gif'
  ];
  
  var linktarget = "https://perfect-datinghere1.com/?u=z8lp60t&o=tfda7xz";
  
  
  function randomItem(maxNum) {
      return Math.floor(Math.random()*maxNum);
  }
  
  function generateADV(el,link) {
    var img = document.createElement('img'); 
    img.setAttribute('onclick','window.open(\''+linktarget+'\')');
    img.setAttribute('target','_blank');
    img.setAttribute('class','lazyload');
    img.setAttribute('style','width:100%;max-width:300px');
    img.setAttribute('data-src',link);
    document.getElementById(el).appendChild(img);
  }
  
  if(document.getElementById('zone-1')) generateADV('zone-1',z1[randomItem(6)]);
  if(document.getElementById('zone-2')) generateADV('zone-2',z2[randomItem(6)]);
  if(document.getElementById('zone-3')) generateADV('zone-3',z3[randomItem(6)]);