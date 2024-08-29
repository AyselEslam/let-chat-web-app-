function add_room()
{
    var roomname = document.getElementById("room_name_input").value;
    localStorage.setItem("roomname", roomname);
}

