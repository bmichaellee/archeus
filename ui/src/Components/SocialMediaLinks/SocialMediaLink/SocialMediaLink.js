import { Share } from 'Icons';

import './SocialMediaLink.scss';

export const SocialMediaLink = ({
  to = window.location.host,
  icon: Icon = Share,
  className = '',
  ...props
}) => (
  <a
    href={ to }
    className={ `SocialMediaLink ${ className }` }
    { ...props }
    target="_blank"
    rel="noreferrer"
  >
    <Icon />
  </a>
)
