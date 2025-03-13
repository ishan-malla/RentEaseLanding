import Image from "next/image";

interface RoomCardProps {
  title: string;
  location: string;
  beds: number;
  baths: number;
  price: number;
  image: string;
}

export default function RoomCard({
  title,
  location,
  beds,
  baths,
  price,
  image,
}: RoomCardProps) {
  const formatBathrooms = (baths: number) => {
    return baths === 0.5
      ? "Shared bath"
      : `${baths} bath${baths > 1 ? "s" : ""}`;
  };

  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-video w-full overflow-hidden rounded-t-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-background rounded-b-xl border border-t-0">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground">
          {location}, {beds} bed{beds > 1 ? "s" : ""}, {formatBathrooms(baths)}
        </p>
        <p className="font-medium mt-2">${price}/month</p>
      </div>
    </div>
  );
}
