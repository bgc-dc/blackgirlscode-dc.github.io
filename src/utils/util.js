function getData (url) {
  $.ajax(
       {
           type: 'get',
           url: url,
           success: function (data) {
               this.setState({ data: JSON.parse(data) })  //or parse
           }.bind(this)
       },

   );
}

export {
  getData
}
