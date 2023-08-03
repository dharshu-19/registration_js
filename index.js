function submitform(event){
    event.preventDefault()
  
    var tab1=document.getElementById("tab")
    let action ={
      edi:"<input type='button'  id='edit' value='EDIT' onclick='editbutton()'>",
      del:"<input type='button'  id='del' value='DELETE' onclick='delbutton(this)'>",
      save:"<input type='button'  id='save' value='SAVE' onclick='savebutton()'>"
     }
     
     var row=tab1.insertRow()
     var cell1=row.insertCell()
     var cell2=row.insertCell()
     var cell3=row.insertCell()
     var cell4=row.insertCell()
     cell1.innerHTML =document.getElementById("name").value
     cell2.innerHTML =document.getElementById("mobilenumber").value
     cell3.innerHTML =document.getElementById("mailid").value
     cell4.innerHTML=action.edi + action.del + action.save
    
}

function editbutton() {
    var tab = document.getElementById("tab")
        for (i=1; i < tab.rows.length; i++){
            tab.rows[i].onclick = function(){
                document.getElementById("name").value = this.cells[0].innerHTML;
                document.getElementById("mobilenumber").value = this.cells[1].innerHTML;
                document.getElementById("mailid").value = this.cells[2].innerHTML;
             };
        }
    }
    
function savebutton() {
    var tab = document.getElementById("tab")
        for (i=1; i < tab.rows.length; i++){
                tab.rows[i].onclick = function(){
                    this.cells[0].innerHTML=document.getElementById("name").value
                    this.cells[1].innerHTML=document.getElementById("mobilenumber").value 
                    this.cells[2].innerHTML=document.getElementById("mailid").value 
            };
        }
     }
    
 function delbutton(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var r = confirm("Are you sure to delete this row!");  
    if (r == true) {  
        var result =document.getElementById("tab").deleteRow(i)
    } else {  
        result = "You have selected Cancelled!";  
    }  
   
}  
 function reset() {
    document.getElementById("name").value = '';
    document.getElementById("mobilenumber").value = '';
    document.getElementById("mailid").value = '';
   
}


