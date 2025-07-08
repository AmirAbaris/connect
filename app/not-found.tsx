import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-7xl font-black text-primary mb-4">۴۰۴</h1>
      <p className="text-lg text-muted-foreground mb-8">
        صفحه مورد نظر پیدا نشد.
      </p>
      <Link href="/" passHref>
        <Button size="lg" className="px-8 py-6 text-lg">
          بازگشت به خانه
        </Button>
      </Link>
    </div>
  );
}
