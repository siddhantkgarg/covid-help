// https://datatables.net/manual/ajax
$(document).ready(function() {
  $.fn.dataTable.ext.errMode = 'none';
  try {
    $('#hospitalBedsTable').DataTable({
      "sPaginationType":"simple",
      responsive:true,
      ajax: {
        url: 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=hospital_beds',
        dataSrc: '',
        cache: true // to prevent appending undersore in query param
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
      "sPaginationType":"simple",
      responsive:true,
      ajax: {
        url: 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=medicines',
        dataSrc: '',
        cache: true // to prevent appending undersore in query param
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
      "sPaginationType":"simple",
      responsive:true,
      ajax: {
        url: 'https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev/?index=oxygen',
        dataSrc: '',
        cache: true // to prevent appending undersore in query param
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

  //responsive on tab change
  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    // console.log('yua')
    $($.fn.dataTable.tables(true)).DataTable()
       .columns.adjust()
       .responsive.recalc();
  }); 



  //forms submit handler
  function apiRequest(index, data){
    console.log('daa ', data)
    data = JSON.stringify(data)
    $.ajax({
      url: `https://4tomrkuta3.execute-api.ap-south-1.amazonaws.com/dev?index=${index}`,
      method: "POST",
      dataType: "json",
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
      success: function(data) {
        console.log(index);
        if(index === "hospital_beds"){
          console.log('yay')
          $("#bed-alert").append(`<div class="alert alert-success" role="alert">
        hospital beds data has been successfully submitted!
        </div>`
        )
        }
        else if(index === "oxygen"){
          $("#oxygen-alert").append(`<div class="alert alert-success" role="alert">
        oxygen data has been successfully submitted!
        </div>`
        )
        }
        else{
          $("#med-alert").append(`<div class="alert alert-success" role="alert">
        medicine data has been successfully submitted!
        </div>`
        )
        }
        
        
      },
      error: function(data){
        console.log(data);
        $(".alert").append(`<div class="alert alert-danger" role="alert">
        Something went wrong!
        </div>`
        )
      }
    });
  };

  function handleEvent(e, form_name, index){
    var data = form_name.serializeArray();
    console.log(data)
    var jsonData={}
    $.each(data, function(i, field){
      jsonData[field.name] = field.value
    })
    var date = new Date();
    jsonData["last_updated"] = date.toISOString();
    jsonData["created_at"] = date.toISOString();
    var formatedData = {"data":jsonData}
    console.log(formatedData)
  
    apiRequest(index, formatedData)
    e.preventDefault();
  }

  var $hospital_form = $("#hospitalBeds")
  var $oxygen_form = $("#oxygen")
  var $medicines_form = $("#medicines")

  $hospital_form.on("submit", function(e){
    handleEvent(e, $hospital_form, "hospital_beds")
  })
  $oxygen_form.on("submit", function(e){
    handleEvent(e, $oxygen_form, "oxygen")
  })
  $medicines_form.on("submit", function(e){
    handleEvent(e, $medicines_form, "medicines")
  })


  //states population
  var states = {
    "AN":"Andaman and Nicobar Islands",
    "AP":"Andhra Pradesh",
    "AR":"Arunachal Pradesh",
    "AS":"Assam",
    "BR":"Bihar",
    "CG":"Chandigarh",
    "CH":"Chhattisgarh",
    "DN":"Dadra and Nagar Haveli",
    "DD":"Daman and Diu",
    "DL":"Delhi",
    "GA":"Goa",
    "GJ":"Gujarat",
    "HR":"Haryana",
    "HP":"Himachal Pradesh",
    "JK":"Jammu and Kashmir",
    "JH":"Jharkhand",
    "KA":"Karnataka",
    "KL":"Kerala",
    "LA":"Ladakh",
    "LD":"Lakshadweep",
    "MP":"Madhya Pradesh",
    "MH":"Maharashtra",
    "MN":"Manipur",
    "ML":"Meghalaya",
    "MZ":"Mizoram",
    "NL":"Nagaland",
    "OR":"Odisha",
    "PY":"Puducherry",
    "PB":"Punjab",
    "RJ":"Rajasthan",
    "SK":"Sikkim",
    "TN":"Tamil Nadu",
    "TS":"Telangana",
    "TR":"Tripura",
    "UP":"Uttar Pradesh",
    "UK":"Uttarakhand",
    "WB":"West Bengal"
}
  $.each(states, function(k,v){
    $("#states").append(`<option value=${v}></option>`)
  })

  //disabling form submission on enter
  $('#state').keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  $('#medicines').keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  $('#oxygen').keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  
});

$('#info-type').on('change',function(){
  console.log($(this).val());
  // if( $(this).val()==="other"){
  // $("#otherType").show()
  // }
  // else{
  // $("#otherType").hide()
  // }
});

//form actions
