'use client';

export default function FloatingTagline() {
  return (
    <div className="hidden sm:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40 pointer-events-none">
      <div className="bg-background/80 dark:bg-luxury-900/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-luxury pointer-events-none">
        <div className="text-xs text-foreground/70">Luxury</div>
        <div className="text-sm font-semibold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Redefined</div>
      </div>
    </div>
  );
}
