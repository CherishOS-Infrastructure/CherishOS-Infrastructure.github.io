//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".download .device");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((device) => {
        let filterImges = device.getAttribute("data-name"); //getting device data-name value
        //if user selected item data-name value is equal to devices data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          device.classList.remove("hide"); //first remove the hide class from the device
          device.classList.add("show"); //add show class in device
        }else{
          device.classList.add("hide"); //add hide class in device
          device.classList.remove("show"); //remove show class from the device
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available devices
  }
}
