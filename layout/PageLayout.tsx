import React from 'react';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
