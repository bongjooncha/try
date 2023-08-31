navigator.serial.addEventListener("connect", (e) => {
	// Connect to `e.target` or add it to a list of available ports.
  });
  
  navigator.serial.addEventListener("disconnect", (e) => {
	// Remove `e.target` from the list of available ports.
  });
  
  navigator.serial.getPorts().then((ports) => {
	// Initialize the list of available ports with `ports` on page load.
  });
  
  button.addEventListener("click", () => {
	const usbVendorId = 0xabcd;
	navigator.serial
	  .requestPort({ filters: [{ usbVendorId }] })
	  .then((port) => {
		// Connect to `port` or add it to the list of available ports.
	  })
	  .catch((e) => {
		// The user didn't select a port.
	  });
  });

  while (port.readable) {
	const reader = port.readable.getReader();
	try {
	  while (true) {
		const { value, done } = await reader.read();
		if (done) {
		  // |reader| has been canceled.
		  break;
		}
		// Do something with |value|...
	  }
	} catch (error) {
	  // Handle |error|...
	} finally {
	  reader.releaseLock();
	}
  }
  
  