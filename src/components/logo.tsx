import { Sailboat } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Sailboat className="h-7 w-7 text-accent" />
      <span className="text-xl font-semibold tracking-tighter">Overboard Asia</span>
    </div>
  );
}
