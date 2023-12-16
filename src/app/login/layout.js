export default function LoginLayout({ children }) {
  return (
    <div className="h-screen flex justify-center items-center flex-col dark text-foreground">
      {children}
    </div>
  );
}