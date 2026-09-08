import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CalendarWidget } from "./CalendarWidget";

export function BookingModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-background p-3 sm:p-4">
        <DialogTitle className="sr-only">Book a discovery call</DialogTitle>
        <CalendarWidget />
      </DialogContent>
    </Dialog>
  );
}
