import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DownloadIcon,
  FileText,
  FileType,
  MoreHorizontalIcon,
} from "lucide-react";

export default function Download() {
  return (
    <>
      <Button>
        <DownloadIcon className="size-4" /> Download PDF
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline">
            <MoreHorizontalIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <FileText className="size-4" />
            <span className="font-medium">Export to DOCX</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileType className="size-4" />
            <span className="font-medium">Export to TXT</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
