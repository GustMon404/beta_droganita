var global = 0;

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
  
    if (keyName === 'ArrowDown') {
            global++;
            console.log(global)
            mudarClassDown()
    }

    if (keyName === 'ArrowUp') {
        if (global > 1){
            global--;
            console.log(global)
            mudarClassUp()
        }
    }
  
    if (event.ctrlKey) {
      // Even though event.key is not 'Control' (e.g., 'a' is pressed),
      // event.ctrlKey may be true if Ctrl key is pressed at the same time.
      console.log(`Combination of ctrlKey + ${keyName}`);
    } else {
      console.log(`Key pressed ${keyName}`);
    }
  }, false);
  
  document.addEventListener('keyup', (event) => {
    const keyName = event.key;
  
    // As the user releases the Ctrl key, the key is no longer active,
    // so event.ctrlKey is false.
    if (keyName === 'Control') {
      console.log('Control key was released');
    }
  }, false);

  function mudarClassDown(){
    let atual = document.getElementById(global);
    if (global >= 2){
        let ant = document.getElementById(global-1)
        ant.classList.remove("bg-danger")
    }  
    atual.classList.add("bg-danger")
  }

  function mudarClassUp(){
      let atual = document.getElementById(global);
      let ant = document.getElementById(global+1)
      ant.classList.remove("bg-danger")
      atual.classList.add("bg-danger")
  }