import { signOutAction } from "@/app/actions";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import { ThemeSwitcher } from "./theme-switcher";
import { LogOut } from "lucide-react";
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
        Hey, {user.email}!
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
      <Button className="hidden md:flex" asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Sign in</Link>
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
