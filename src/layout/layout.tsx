// src/layout/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-dark-primary to-dark-secondary text-white flex justify-center">
      {children}
    </div>
  );
}