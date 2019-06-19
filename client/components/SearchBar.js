import React from 'react';
import '../src/Bulma.scss'

import '../components/styles/SearchBar.scss';



const Search = () => {
  function getUserAddress() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyB4uz-JOMOlu3lJkMvjoPjX3nAwu7QJC_I" + "&sensor=false", function (data) {
          var myData = data;
          console.log(data)
          var input = document.querySelector('input');
          input.value = data.results[1].formatted_address;
          // console.log(data);
        })
        // var img = new Image();
        // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
        // $('#output').html(img);
      });
    }
  };

  return (
    <div>
      <div className="example">
        <input type="text" placeholder="Search.." name="search" />
        <button onClick={getUserAddress}><i class="fas fa-search"></i></button>
      </div>
    </div>
      )
    }
    
export default Search;