import { Button } from "./ui/button";
import { MoveLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Back() {
  return (
    <Button variant="ghost" asChild>
      <Link to="/">
        <MoveLeft className="size-4" /> Back
      </Link>
    </Button>
  );
}
