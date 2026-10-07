import { navbar } from "./components/layout/Navbar";

function App() {
  const { isAuthenticated, currentView } = useAuth();

  const renderAuthContent = () => {
    switch (currentView) {
      case AUTH_VIEW.REGISTER:
        return <RegisterForm />;
      case AUTH_VIEW.VERIFY_OTP:
        return <OtpVerifyModal />;
      case AUTH_VIEW.FORGOT_PASSWORD:
        return <ForgotPasswordForm />;
      case AUTH_VIEW.RESET_PASSWORD:
        return <PasswordResetForm />;
      case AUTH_VIEW.LOGIN:
      default:
        return <LoginForm />;
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-bg-ambient" area-hidden="true" />
      <navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {isAuthenticated ? (
          <UserProfileCard />
        ) : (
          <AuthLayout>{renderAuthContent()}</AuthLayout>
        )}
      </main>
      <ToastContainer />
    </div>
  )
}

export default App
