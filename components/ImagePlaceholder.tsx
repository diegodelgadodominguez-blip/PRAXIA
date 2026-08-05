type ImagePlaceholderProps = {
  label?: string;
  aspectClassName?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  aspectClassName = "aspect-[4/5]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectClassName} ${className} flex items-center justify-center overflow-hidden bg-charcoal`}
    >
      {label ? (
        <span className="font-mono text-xs tracking-[0.14em] text-nav-muted">
          {label}
        </span>
      ) : null}
    </div>
  );
}
