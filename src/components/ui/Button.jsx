function Button({
  children,
  variant = "primary",
  href = "#",
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`btn-custom ${variant}`}
    >
      {children}
    </a>
  );
}

export default Button;