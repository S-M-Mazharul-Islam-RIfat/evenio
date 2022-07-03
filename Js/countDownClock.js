$('#clock').countdown('2022/8/20', function (event) {
    var $this = $(this).html(event.strftime(''
        // +'<div><span>%w</span><span>Weeks</span></div>'
        + '<div><span>%D</span>  <span> : </span> </div>'
        + '<div><span>%H</span> <span> : </span> </div>'
        + '<div><span>%M</span> <span> : </span> </div>'
        + '<div><span>%S</span> </div>'
    ))
})
{/* <span>Days : </span> */ }
// </span><span>.</span><span>.</span>