import { useState } from "react"
import { SoundCloudEmbed } from "Components";

import './ListenNow.scss';

export const ListenNow = () => {
  const [ show, setShow ] = useState();

  return (
    <div className="ListenNow">
      { show ? (
        <SoundCloudEmbed />
      ) : (
        <button onClick={ () => setShow( !show ) }>
          Listen Now
        </button>
      ) }
    </div>
  )
}
