export default function PostLoading() {
  return (
    <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full p-4 animate-pulse">
      <div className="h-16 rounded-2xl bg-muted/50 mb-6" />
      <div className="space-y-4">
        <div className="h-8 w-3/4 rounded-full bg-muted/50" />
        <div className="h-4 w-full rounded-full bg-muted/50" />
        <div className="h-4 w-full rounded-full bg-muted/50" />
        <div className="h-4 w-5/6 rounded-full bg-muted/50" />
      </div>

      <div className="mt-8 h-14 rounded-2xl bg-muted/50" />
      <div className="mt-6 space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="p-4 rounded-2xl bg-muted/50">
            <div className="h-4 w-1/3 rounded-full bg-muted/70 mb-3" />
            <div className="h-4 w-full rounded-full bg-muted/50 mb-2" />
            <div className="h-4 w-4/5 rounded-full bg-muted/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
