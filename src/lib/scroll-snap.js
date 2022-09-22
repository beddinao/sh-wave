export function dis_fun (con) {
  con.onwheel = null
}
function set_scroll_snapping ( container , sections ) {
  const get_hei = (elem) => {
    return parseFloat(getComputedStyle(elem).height)
  }
  function get_all_hei (els) {
    let hei = 0 ;
    for ( let i = 0 ; i < els.length ; i++ ){
      hei += get_hei(els[i]) ;
    }
    return hei
  }
  function scroll_to (el , call) {
    window.scrollTo({
      left : 0 ,
      top : el.offsetTop ,
      behavior : 'smooth'
    })
    call()
  }

  // seting an array with each elem offsets

  const get_up_offs = ( el ) => {
    var el_up = [] ;
    for ( let i = 20 ; i < (get_hei(el) + 1) ; i += (get_hei(el) - 20 ) ) {
      el_up.push(el.offsetTop + i) ;
    }
    return el_up
  }
  const get_down_offs = (el) => {
    var el_down = [] ;
    for ( let i = (get_hei(el) - 20) ; i > -1 ; i -=  (get_hei(el) - 20)  ){
      el_down.push(el.offsetTop - i) ;
    }
    return el_down
  }

  var offs = new Array ;

  function get_offs () {
    for( let i = 0 ; i < sections.length ; i++ ) {
      let obj = new Object ;
      obj.el = sections[i] ;
      obj.el_up = get_up_offs(sections[i])  ;
      obj.el_down = get_down_offs(sections[i]) ;
      offs.push(obj)
    }
  }
  //

  function which_el (e) {
    let of = window.pageYOffset ;

    let el_obj = offs.find( obj => {
      return ( e.deltaY > 0 ) ?  obj.el_down[0] < of && obj.el_down[1] > of 
      :  obj.el_up[0] < of && obj.el_up[1] > of 
    })

    if ( el_obj != undefined && el_obj != null ){
      dis_fun(container) ;
      scroll_to(el_obj.el , set_fun )
    }
  }

  const set_fun = () => {
    container.onwheel = which_el 
  }
  //let al_h = get_all_hei(sections) ;
  //let c_h = get_hei(container) ; 
  //if ( c_h == al_h ) {
  //    //
  //} else {
  //  console.error( ` the container should only contain sections : ( container.height(${c_h}px) != sections.height(${al_h}px) ) ` ) ;
  //}
  get_offs() ;
  set_fun() ;
}

export default set_scroll_snapping