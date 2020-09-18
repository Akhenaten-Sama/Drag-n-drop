const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
    const slider = document.querySelector('.slider');
    M.Slider.init(slider,{
      height:500,
      transition:500,
      interval:6000,
      indicators: false

    });
    //Autocomplete
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
      data: {
        'Erin-Ijesha': null,
        'Lagos': null,
        'Enugu': null,
        'Obudu': null,
        'Lokoja': null,
        'Ibadan': null,
        'Akwa-Ibom': null,
        'Kano': null,
        'Onitsha': null,

      }
    });
     //material box
     const mb = document.querySelectorAll('.materialboxed');
     M.Materialbox.init(mb, {})
     const sb = document.querySelectorAll('scrollspy');
     M.scrollspy.init(sb,{});
