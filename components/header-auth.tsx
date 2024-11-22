import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { ThemeSwitcher } from "./theme-switcher";
import { LogOut, Mail, UserCircle2Icon } from "lucide-react";
import { FaceBookIcon, InstagramIcon } from "./ui/icons";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <div className="flex flex-col items-center">
        <span className="text-sm flex gap-2 items-center">
          <UserCircle2Icon />
          Hey, {user.email}!
        </span>
        </div>
        <form action={signOutAction}>
          <Button type="submit" variant={"outline"}>
            <LogOut />
          </Button>
        </form>
        <div className="social-media flex gap-2">
          <Link
            href={
              "https://www.facebook.com/profile.php?id=61552040243476&mibextid=ZbWKwL"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaceBookIcon />
          </Link>
          <Link
            href={
              "https://www.instagram.com/autoindustryllc?igsh=aGQ0bGE1cDByNHRn"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex gap-2 items-center">
      <span className="hidden md:flex md:gap-2 md:items-center md:text-sm">
        <Mail className="h-4 w-4" />
        industryautollc@gmail.com
      </span>
      <Button className="hidden md:flex" asChild size="sm" variant={"outline"}>
        <Link className="border border-slate-300" href="/sign-in">Sign in</Link>
      </Button>
      <ThemeSwitcher />
      <div className="social-media flex gap-2">
        <Link
          href={
            "https://www.facebook.com/profile.php?id=61552040243476&mibextid=ZbWKwL"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaceBookIcon />
        </Link>
        <Link
          href={
            "https://www.instagram.com/autoindustryllc?igsh=aGQ0bGE1cDByNHRn"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
}
