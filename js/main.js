// https://datatables.net/manual/ajax
$(document).ready(function() {
  try {
    $('#hospitalBedsTable').DataTable({
      ajax: {
        url: 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=hospital_beds',
        dataSrc: ''
      },
      columns: [
        {
          data: '_source.hospital_name'
        },
        {
          data: '_source.state'
        },
        {
          data: '_source.city'
        },
        {
          data: '_source.beds_count'
        },
        {
          data: '_source.icu_beds_count'
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
  } catch (error) {
    console.error(error);
  }

  try {
    $('#medicinesTable').DataTable({
      ajax: {
        url: 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=medicines',
        dataSrc: ''
      },
      columns: [
        {
          data: '_source.person_name'
        },
        {
          data: '_source.contact'
        },
        {
          data: '_source.medicine_name'
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
  } catch (error) {
    console.error(error);
  }

  try {
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
  } catch (error) {
    console.error(error);
  }
} );

$('#info-type').on('change',function(){
  console.log($(this).val());
  // if( $(this).val()==="other"){
  // $("#otherType").show()
  // }
  // else{
  // $("#otherType").hide()
  // }
});