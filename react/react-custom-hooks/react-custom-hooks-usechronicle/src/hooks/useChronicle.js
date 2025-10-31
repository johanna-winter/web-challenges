const { useState, useEffect } = require("react");

export function useChronicle() {
  const [firstName, lastName, phoneNumber] = useState();
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    function setState(newValue) {
      setTimeline(newValue);
    }
    function resetState() {}
  }, []);
  return;
}
