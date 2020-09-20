<script src="../../simplepicker-master/dist/simplepicker.js"></script>

//Date & Time Picker
let simplepicker = new SimplePicker({
    zIndex: 10
  });

  //I commented this line out otherwise the picker opens as soon as the page loads. Kind of annoying.
  //simplepicker.open();

  const $button = document.querySelector('button');
  const $eventLog = document.querySelector('.event-log');
  $button.addEventListener('click', (e) => {
    simplepicker.open();
  });

  // $eventLog.innerHTML += '\n\n';
  simplepicker.on('submit', (date, readableDate) => {
    $eventLog.innerHTML += readableDate + '\n';
  });

  simplepicker.on('close', (date) => {
    $eventLog.innerHTML += 'Picker Closed'  + '\n';
  });