import { useState } from "react"
import { SoundCloudEmbed } from "Components";

import './ListenNow.scss';

const {
  LISTEN_DISABLED = false,
} = process.env;

export const ListenNow = () => {
  const [ show, setShow ] = useState();

  return (
    <div className="ListenNow">
      { show ? (
        <SoundCloudEmbed />
      ) : (
        <button disabled={ LISTEN_DISABLED } onClick={ () => setShow( !show ) }>
          Listen Now
        </button>
      ) }
    </div>
  )
}
