// https://datatables.net/manual/ajax
$(document).ready(function() {
  $('#oxygenTable').DataTable({
    ajax: {
      url: 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=oxygen',
      dataSrc: ''
    },
    columns: [
      {
        data: '_source.vendor_name'
      },
      {
        data: '_source.person_name'
      },
      {
        data: '_source.contact'
      },
      {
        data: '_source.state'
      },
      {
        data: '_source.city'
      },
      {
        data: '_source.quantity'
      },
      {
        data: '_source.price'
      },
      {
        data: '_source.link'
      },
      {
        data: '_source.comments'
      },
      /*{
        data: '_source.last_updated',
        render: function(data) {
          return new Date(data).toLocaleDateString()
        }
      },*/
      {
        data: '_source.created_at',
        render: function(data) {
          return new Date(data).toLocaleDateString()
        }
      },
      {
        data: '_source.verified'
      }
    ]
  });
} );