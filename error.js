try {
    let result = JSON.parse("invalid JSON");
    // throw('');
  } catch (error) {
    console.log("Error caught:", error.message);
  }