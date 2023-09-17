//Add more Pizza item names
menu_list_array = [ "Veg Margherita Pizza","A","S","D","F","G","H","J","K"];

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("pizza_name").innerHTML = htmldata;
    var remove_commas = pizza_list_array.join("<br># ");
    document.getElementById("display_menu").innerHTML =  "# " + remove_commas;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item);
}

