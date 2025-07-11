import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/terms", label: "قوانین" },
    { href: "/privacy", label: "حریم خصوصی" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-black mb-2">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                کانکت
              </span>
            </h3>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              اپلیکیشنی که اضطراب اجتماعی رو کم می‌کنه و ارتباطات رو راحت‌تر
              می‌کنه
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} کانکت. تمامی حقوق محفوظ است.
            </div>
            <div className="text-sm text-muted-foreground">ساخته شده با 🤎</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
