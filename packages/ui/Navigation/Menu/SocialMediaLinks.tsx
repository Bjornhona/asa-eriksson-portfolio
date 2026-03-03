"use client";
// import { Facebook, Github, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Twitch, Twitter, Youtube, Tiktok, Pinterest, Reddit, Snapchat, Spotify, Soundcloud, Map } from "lucide-react";
import { Link, Github, Linkedin} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../../packages/ui/components/dropdown-menu";
import { cn } from "@/lib/utils";
import { SocialMediaLinkType } from "../../types";

type SocialMediaLinksProps = {
    socialMediaLinks: { 
      type: SocialMediaLinkType; 
      href: string
    }[];
};

const SocialMediaLinks = ({
  socialMediaLinks,
}: SocialMediaLinksProps) => {
  const socialMediaIconComponents = {
    github: Github,
    linkedin: Linkedin,
    // twitter: Twitter,
    // instagram: Instagram,
    // facebook: Facebook,
    // youtube: Youtube,
    // tiktok: Tiktok,
    // pinterest: Pinterest,
    // reddit: Reddit,
    // snapchat: Snapchat,
    // spotify: Spotify,
    // soundcloud: Soundcloud,
    // twitch: Twitch,
    // website: Globe,
    // email: Mail,
    // phone: Phone,
    // address: MapPin,
    // map: Map,
    // other: Other,
  };

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl",
              "transition-all duration-300")}>
            <Link className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="bg-white/10 text-foreground backdrop-blur-xl
            border border-white/20 shadow-xl rounded-xl">
          {socialMediaLinks.map((link) => {
            const Icon = socialMediaIconComponents[link.type];
            return (
            <DropdownMenuItem
              onClick={() => window.open(link.href, "_blank")}
              className={`px-2 py-1 rounded hover:bg-white/10 transition-colors`}
              key={link.type}>
                <Icon className="w-4 h-4" />
            </DropdownMenuItem>
          )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
  );
};

export default SocialMediaLinks;
