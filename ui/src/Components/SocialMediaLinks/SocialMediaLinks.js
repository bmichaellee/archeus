import { SocialMediaLink } from "Components";
import { SoundCloud, YouTube, Facebook, Twitter, Instagram, TikTok } from "Icons";

import './SocialMediaLinks.scss';

const {
  FACEBOOK_URL = "https://www.facebook.com/archeusrock/",
  TWITTER_URL = "https://twitter.com/archeusband",
  INSTAGRAM_URL = "https://www.instagram.com/archeusband/",
  TIKTOK_URL = "https://www.tiktok.com/@archeusband",
  YOUTUBE_URL = "https://www.youtube.com/channel/UC-Qff1XJwqqg-M6TGlBP-8A",
  SOUNDCLOUD_URL = "https://soundcloud.com/archeusband",
} = process.env;

export const SocialMediaLinks = () => (
  <div className="SocialMediaLinks">
    <SocialMediaLink icon={ SoundCloud } to={ SOUNDCLOUD_URL } />
    <SocialMediaLink icon={ YouTube } to={ YOUTUBE_URL } />
    <SocialMediaLink icon={ Facebook } to={ FACEBOOK_URL } />
    <SocialMediaLink icon={ Twitter } to={ TWITTER_URL } />
    <SocialMediaLink icon={ Instagram } to={ INSTAGRAM_URL } />
    <SocialMediaLink icon={ TikTok } to={ TIKTOK_URL } />
  </div>
)
