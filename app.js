const log = console.log;

/*
  1gb -> 1000 mb

  total = 1000gb
  used = 500mb (0 - 1000)
  left = total - used 
*/

function randomUsed (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Disk (total, used) {
  this.total = total; // 1000
  this.used = used; // 1000 - 633
  this.getLeft = getLeft;

  function getLeft () {
    return this.total - this.used;
  }
}

function displayDisk (used, left) {
  let itemBar = document.querySelector('#itemProgress')
      leftDisk = document.querySelector('#leftStorage'),
      percent = Math.floor((used * 100) / 1000);

  itemBar.style.width = `${percent}%`; // using in the disk
  leftDisk.textContent = left.toString(); // rest in the disk
}

setInterval(() => {
  let disk = new Disk(1000, randomUsed(80,1001));
  displayDisk(disk.used, disk.getLeft());

  /*
  log('usado: ' + disk.used);
  log('restante: ' + disk.getLeft());
  */
}, 2000);