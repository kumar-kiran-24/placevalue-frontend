import logoAsset from "../../assets/logo-main.png";
import { Link } from "react-router-dom";

export function Logo({ size = 28, withWordmark = false }: { size?: number; withWordmark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img
        src={logoAsset}
        alt="PlaceValue"
        style={{ height: size }}
        className="object-contain w-auto"
      />
      {withWordmark && (
        <span className="text-[1.05rem] font-extrabold tracking-tight text-foreground">
          <span className="text-brand-blue"></span>
        </span>
      )}
    </Link>
  );
}
