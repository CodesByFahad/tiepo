type LogoProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function Logo({ className, style, ...props }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Logo"
      className={className}
      style={{ height: "50px", width: "auto", objectFit: "contain", ...style }}
      {...props}
    />
  );
}
