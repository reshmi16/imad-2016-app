 var button = document.getelementbyid("counter");
 var counter = 0;
 button.onclick = function()
 { counter = counter + 1;
   var   request = new XMLHttpRequest();
   request.onreadystatechange=function()
   {
       if (request.readystate ==XMLHttpRequest.done )
       {
           if(request.status == 200)
           {
               var counter = request.responsetext;
               var spam = document.getelementbyid("count");
               span.innerhtml=counter.toString();
           }
       }
   };
   
   request.open=getrequest('get','http://reshmi16.imad.hasura-app.io/counter',true);
   request.send(null);
 }
 
