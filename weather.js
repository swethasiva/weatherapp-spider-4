
$(document).ready(function(){
    
    
    
    
    $("#search").click(function(){
        
        var city = $("#autocomplete").val();
        
        if(city!='')
            {   
                $.ajax({
                    
                    url : "http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric" + "&APPID=0d65d7da3d7616674f6859ac0c33d6d7" ,
                    type : "GET",
                    dataType : "jsonp",
                    success : function(data){
                        
                       
                       var widget = show(data);
                        $("#show").html(widget);
                        $("#autocomplete").val('');
                        
                    }
                    
                    
                    
                });
              
}
        else{
            $("#err").html('Oops!! Field Cannot Be Empty');
        }
        
        
        
        
        
        
        
    });
    
    
    
    
    
    
});


function show(data)
{
    return "<h4 ><strong>"+ data.name +" , "+ data .sys.country +"</strong></h4><strong><hr></strong>" +
           "<h4 ><strong>Weather :</strong>"+ data .weather[0].main +"</h4>" +
           "<h4><strong>Description :</strong><img src = 'http://openweathermap.org/img/w/" +data.weather[0].icon +".png'>"+ data .weather[0].description +"</h4>" +
           "<h4><strong>Temperature :</strong>"+ data .main.temp +"&deg;c</h4>" +
           "<h4><strong>Max. Temperature :</strong>"+ data .main.temp_max +"&deg;c</h4>" +
           "<h4><strong>Min. Temperature :</strong>"+ data .main.temp_min +"&deg;c</h4>"; 
}