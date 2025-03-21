export default function SpotlightCard({
  image,
  link,
}: {
  image: any;
  link: string;
}) {
  return (
    <div className="spotlight-card">
      <img src={image} />
      <a href={link}>View Gallery</a>
    </div>
  );
}
