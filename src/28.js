function simulateClick(photo, isEnlarged) {
  if (!isEnlarged) {
    photo.classList.toggle("photo-enlarge");
    isEnlarged = true;
  } else {
    photo.classList.toggle("photo-reduce");
    isEnlarged = false;
  }
  return isEnlarged;
}



function scrollIntoView(event) {
  if (event.code === 'KeyA' || event.code === 'KeyФ') {
    return '.summary';
  } else if (event.code === 'KeyB' || event.code === 'KeyИ') {
    return '.skills';
  } else if (event.code === 'KeyC' || event.code === 'KeyС') {
    return '.work';
  } else if (event.code === 'KeyD' || event.code === 'KeyВ') {
    return '.education';
  }
}





