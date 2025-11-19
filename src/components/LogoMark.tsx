type LogoMarkProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function LogoMark({ className, ...props }: LogoMarkProps) {
  return (
    <img
      src="/logomark.svg"
      alt="Logo Mark"
      className={className}
      {...props}
    />
  );
}
