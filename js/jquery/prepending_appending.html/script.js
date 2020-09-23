// console.log($('#list')) //ye kam kar rha h kuki mena async and defer likha h code meh.

// $(() => { //this is way to do window.load in jquery so that code only get executed after window is loaded
//     console.log("inside $ fn ")
//     console.log($('#list'))
// })

$(() => {
    $('#prepend').click(() => {
      //  console.log($('#item').val())
      let text1 = $('#item').val()
     // $('#list').prepend($( `<li> ${text1}</li>`))
      //$('#list').prepend($( `<li>`).text(text1)) another way 
      $('#list').prepend($(`<li>`).html(`<b>${text1}</b>`))
    })

    $('#append').click(() => {
        let text1 = $('#item').val()
        $('#list').append($(`<li>`).text(text1)) //there are other ways also
      })
})