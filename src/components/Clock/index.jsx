import { useState } from "react";

import useClock from '../../hooks/useClock';


function Clock(props) {
  const [show, setShow] = useState(true);

  const { timeString } = useClock()
  if (show) {
    return (
      <>
        <span style={{ fontSize: '42px', marginRight: '8px' }}>{timeString}</span>
        <button onClick={() => setShow(!show)}>Hide Clock</button>
      </>
    )
  }
  else {
    return <></>
  }
}


export default Clock

