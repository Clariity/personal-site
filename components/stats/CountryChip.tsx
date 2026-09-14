export function CountryChip({
  name,
  visitors,
}: {
  name: string;
  visitors: number;
}) {
  return (
    <div className="border rounded-sm px-2 py-1 text-sm">
      <span>{name}</span>

      <span className="text-muted-foreground">
        {" "}
        · {visitors.toLocaleString("en-GB")}
      </span>
    </div>
  );
}
